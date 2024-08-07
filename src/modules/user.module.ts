import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user.controller';
import { UserService } from 'src/services/user.service';
import { ProblemModule } from './problem.module';
import { LeaderBardModule } from './leaderboard.module';

@Module({
  imports: [ProblemModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule { }
