import { Injectable } from '@nestjs/common';
import { Problem, PROBLEM_DIFFICULTY } from 'src/entities/problem.entity';
import { ProblemService } from './problem.service';

@Injectable()
export class RecommendationService {
  constructor(private readonly problemService: ProblemService) {}

  getRecommendedProblems(difficulty: PROBLEM_DIFFICULTY, limit: number = 5): Problem[] {
    //TODO: recommendation based on multiple tags
    //Have strategy on selecting recommendation algorithm
    return this.problemService.fetchProblems({ difficulty }).slice(0, limit);
  }
}
