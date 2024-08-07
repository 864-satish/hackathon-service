import { PROBLEM_DIFFICULTY } from "src/entities/problem.entity";
import { IsString, IsInt, IsNotEmpty, Min, Max } from 'class-validator';

export class CreateProblemDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  tag: string;

  @IsString()
  @IsNotEmpty()
  difficulty: PROBLEM_DIFFICULTY;

  @IsInt()
  @Min(0)
  @Max(100)
  score: number;
}
