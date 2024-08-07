import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { LeaderBoardService } from 'src/services/leaderboard.service';

@Controller('leaderboard')
export class LeaderBoardController {
    constructor(private readonly leaderBoardService: LeaderBoardService) { }

    @Get('leader')
    getLeader() {
        return this.leaderBoardService.getLeader();
    }

    @Get('board')
    getLeaderboard() {
        //Top 10 user
        return this.leaderBoardService.getTopNUsers(10);
    }
}
