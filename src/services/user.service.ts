import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/user.dto';
import { Problem } from 'src/entities/problem.entity';
import { User } from 'src/entities/user.entity';
import { ProblemService } from './problem.service';
import { userDb } from 'src/database/hackathon.database';

@Injectable()
export class UserService {
    private users: User[] = [];

    constructor(private readonly problemService: ProblemService) {
        this.users = userDb;
    }

    getAllUsers(): User[] {
        return this.users;
    }

    getUserById(id: number): User {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new NotFoundException(`User not found with id: ${id}`)
        }
        return user;
    }

    addUser(createUserDto: CreateUserDto): User {
        const { name, department } = createUserDto;
        const userId = this.users.length + 1;
        const newUser = new User(userId, name, department);
        this.users.push(newUser);
        return newUser;
    }

    solveProblem(userId: number, problemId: number, timeTaken: number): boolean {
        const user = this.users.find(user => user.id === userId);
        const problem = this.problemService.getProblemById(problemId);
        console.log('solveProblem_service', { userId, problemId, timeTaken, user, problem })
        if (!user) {
            throw new NotFoundException(`User not found with id: ${userId}`)
        }
        if (!problem) {
            throw new NotFoundException(`Problem not found with id: ${problemId}`)
        }

        if(user?.solvedProblems?.find(p => p.id === problem.id)) {
            throw new ConflictException('Problem already solved.');
        }
    
        user.solvedProblems.push(problem);
        user.score = user.score + problem.score;
        console.log('solveProblem_service_2', { userScore: user.score, score: problem.score });
        this.problemService.solveProblem(problemId, timeTaken);
        return true;
    }

    getSolvedProblems(userId: number): Problem[] {
        const user = this.users.find(user => user.id === userId);
        return user ? user.solvedProblems : [];
    }

    getLeader(): User {
        return this.users.sort((a, b) => b.score - a.score)[0];
    }
}
