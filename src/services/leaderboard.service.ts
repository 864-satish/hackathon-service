import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserService } from './user.service';

@Injectable()
export class LeaderBoardService {
  constructor(private readonly userService: UserService) { }

  getLeader(): User {
    const allUsers = this.userService.getAllUsers();
    if (!allUsers?.length) {
      throw new NotFoundException('No user exists');
    }
    return allUsers.sort((a, b) => b.score - a.score)[0];
  }

  getTopNUsers(n: number): User[] {
    const allUsers = this.userService.getAllUsers();
    if (!allUsers?.length) {
      throw new NotFoundException('No user exists');
    }
    return allUsers.sort((a, b) => b.score - a.score).slice(0, n);
  }
}
