import { Problem } from "./problem.entity";

export class User {
  constructor(
    public id: number,
    public name: string,
    public department: string,
    public solvedProblems: Problem[] = [],
    public score: number = 0,
  ) {}
}
