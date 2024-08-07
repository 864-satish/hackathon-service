import { Module } from '@nestjs/common';
import { LeaderBoardController } from 'src/controllers/leaderboad.controller';
import { LeaderBoardService } from 'src/services/leaderboard.service';
import { UserModule } from './user.module';

@Module({
  imports: [UserModule],
  controllers: [LeaderBoardController],
  providers: [LeaderBoardService],
})
export class LeaderBardModule { }
