import { Injectable } from '@nestjs/common';
import { problemDb } from 'src/database/hackathon.database';
import { CreateProblemDto } from 'src/dto/problem.dto';
import { Problem, PROBLEM_DIFFICULTY } from 'src/entities/problem.entity';

export type SortByScore = 1 | -1; //Ascending | Descending

export interface ProblemFilter {
  difficulty: PROBLEM_DIFFICULTY;
  tag: string;
}

@Injectable()
export class ProblemService {
  private problems: Problem[] = [];
  constructor() { this.problems = problemDb; }

  addProblem(createProblemDto: CreateProblemDto): Problem {
    const { description, tag, difficulty, score } = createProblemDto;
    const problemId = this.problems.length + 1;
    const newProblem = new Problem(
      problemId,
      description,
      tag,
      difficulty,
      score,
    );
    this.problems.push(newProblem);
    return newProblem;
  }

  fetchProblems(filters: Partial<ProblemFilter>, sortByScore?: SortByScore): Problem[] {
    console.log('fetchProblems', { filters, sortByScore })
    const problems = this.problems.filter(p => {
      const isTagMatched = filters?.tag ? filters.tag == p.tag.toLowerCase() : true;
      const isDifficultyMatched = filters?.difficulty ? filters.difficulty.toLowerCase() == p.difficulty.toLowerCase() : true;
      return isTagMatched && isDifficultyMatched;
    });
    console.log('fetchProblems', { problems, sortByScore })
    if (sortByScore == 1) {
      return problems.sort((a, b) => a.score - b.score);
    } else {
      return problems.sort((a, b) => b.score - a.score);
    }
  }

  getProblemById(id: number): Problem {
    return this.problems.find((problem) => problem.id === id);
  }

  solveProblem(id: number, timeTaken: number): boolean {
    const problem = this.getProblemById(id);
    if (problem) {
      problem.solvedCount++;
      problem.totalTime += timeTaken;
      problem.averageTime = parseFloat((problem.totalTime / problem.solvedCount).toFixed(2));
    }
    return true;
  }
}
