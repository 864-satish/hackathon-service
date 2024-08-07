import { Module } from '@nestjs/common';
import { ProblemModule } from './modules/problem.module';
import { UserModule } from './modules/user.module';
import { LeaderBardModule } from './modules/leaderboard.module';

@Module({
  imports: [ProblemModule, UserModule, LeaderBardModule],
})
export class AppModule {}
