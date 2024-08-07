

import { Controller, Post, Body, Get, Param, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProblemDto } from 'src/dto/problem.dto';
import { Problem, PROBLEM_DIFFICULTY } from 'src/entities/problem.entity';
import { ProblemFilter, ProblemService, SortByScore } from 'src/services/problem.service';

@Controller('problems')
export class ProblemController {
  constructor(private readonly problemService: ProblemService) { }

  @Post()
  @UsePipes(new ValidationPipe())
  addProblem(@Body() createProblemDto: CreateProblemDto) {
    return this.problemService.addProblem(createProblemDto);
  }

  @Get()
  fetchProblems(
    @Query('difficulty') difficulty?: PROBLEM_DIFFICULTY,
    @Query('tag') tag?: string,
    @Query('sortByScore') sortByScore?: string,
  ): Problem[] {
    const parsedFilters: Partial<ProblemFilter> = {
      ...(difficulty && { difficulty: difficulty }),
      ...(tag && { tag }),
    };
    const parsedSortByScore: SortByScore = parseInt(sortByScore) == 1 ? 1 : -1;

    return this.problemService.fetchProblems(parsedFilters, parsedSortByScore);
  }
}
