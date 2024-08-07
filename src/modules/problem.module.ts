import { Module } from '@nestjs/common';
import { ProblemController } from 'src/controllers/problem.controller';
import { ProblemService } from 'src/services/problem.service';

@Module({
  controllers: [ProblemController],
  providers: [ProblemService],
  exports: [ProblemService],
})
export class ProblemModule {}
