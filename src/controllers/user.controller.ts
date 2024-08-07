import { Controller, Post, Body, Get, Param, ValidationPipe, UsePipes } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/user.dto';
import { User } from 'src/entities/user.entity';
import { LeaderBoardService } from 'src/services/leaderboard.service';
import { UserService } from 'src/services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('all')
  getAllUsers(): User[] {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.userService.getUserById(parseInt(id));
  }

  @Post()
  @UsePipes(new ValidationPipe())
  addUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.addUser(createUserDto);
  }

  @Post(':userId/solve/:problemId')
  solveProblem(
    @Param('userId') userId: string,
    @Param('problemId') problemId: string,
    @Body('timeTaken') timeTaken: number,
  ) {
    return this.userService.solveProblem(parseInt(userId), parseInt(problemId), timeTaken);
  }

  @Get(':userId/solved')
  getSolvedProblems(@Param('userId') userId: string) {
    return this.userService.getSolvedProblems(parseInt(userId));
  }
}
