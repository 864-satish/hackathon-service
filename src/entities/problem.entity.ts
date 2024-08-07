export enum PROBLEM_DIFFICULTY {
    EASY = 'EASY',
    MEDIUM = 'MEDIUM',
    HARD = 'HARD',
}

export type ProblemFilter ={
    tag?: string;
    difficulty?: PROBLEM_DIFFICULTY ;
}

export enum SortByScore {
    ASC = 'ASC',
    DESC = 'DESC',
};

export class Problem {
    constructor(
        public id: number,
        public description: string,
        public tag: string,
        public difficulty: PROBLEM_DIFFICULTY,
        public score: number,
        public solvedCount: number = 0,
        public totalTime: number = 0,
        public averageTime: number = 0,
    ) { }
}
