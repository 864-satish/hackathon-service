import { Problem, PROBLEM_DIFFICULTY } from "src/entities/problem.entity";
import { User } from "src/entities/user.entity";

export const userDb: User[] = [];
export const problemDb: Problem[] = [];

/**
 * @info : data for sample testing 
 */
/**@info testing user */
const user1 = {
    "name": "Satish Kumar",
    "department": "EE",
};

const problem1 = {
    "description": "Target sum problem",
    "tag": "Array",
    "difficulty": PROBLEM_DIFFICULTY.MEDIUM,
    "score": 10
}

export const sampleUsers: User[] = [
    {
        "id": 1,
        "name": "Deepak",
        "department": "CSE",
        "solvedProblems": [],
        "score": 0
    },
    {
        "id": 2,
        "name": "Satish",
        "department": "EE",
        "solvedProblems": [],
        "score": 0
    },
    {
        "id": 3,
        "name": "Nitish",
        "department": "CSE",
        "solvedProblems": [],
        "score": 0
    },
    {
        "id": 4,
        "name": "Vikash",
        "department": "CSE",
        "solvedProblems": [],
        "score": 0
    },
    {
        "id": 5,
        "name": "Suhash",
        "department": "CSE",
        "solvedProblems": [],
        "score": 0
    }
];
export const sampleProblems: Problem[] = [
    {
        "id": 1,
        "description": "Problem statement ",
        "tag": "queue",
        "difficulty": PROBLEM_DIFFICULTY.MEDIUM,
        "score": 20,
        "solvedCount": 0,
        "totalTime": 0,
        "averageTime": 0
    },
    {
        "id": 2,
        "description": "Problem statement 2",
        "tag": "graph",
        "difficulty": PROBLEM_DIFFICULTY.HARD,
        "score": 50,
        "solvedCount": 0,
        "totalTime": 0,
        "averageTime": 0
    },
    {
        "id": 3,
        "description": "Problem statement 3",
        "tag": "dp",
        "difficulty": PROBLEM_DIFFICULTY.MEDIUM,
        "score": 40,
        "solvedCount": 0,
        "totalTime": 0,
        "averageTime": 0
    },
    {
        "id": 4,
        "description": "Problem statement 4",
        "tag": "string",
        "difficulty": PROBLEM_DIFFICULTY.HARD,
        "score": 60,
        "solvedCount": 0,
        "totalTime": 0,
        "averageTime": 0
    },
    {
        "id": 5,
        "description": "Problem statement 5",
        "tag": "graph",
        "difficulty": PROBLEM_DIFFICULTY.MEDIUM,
        "score": 40,
        "solvedCount": 0,
        "totalTime": 0,
        "averageTime": 0
    },
    {
        "id": 6,
        "description": "Problem statement 3",
        "tag": "stack",
        "difficulty": PROBLEM_DIFFICULTY.EASY,
        "score": 20,
        "solvedCount": 0,
        "totalTime": 0,
        "averageTime": 0
    },
    {
        "id": 7,
        "description": "Problem statement 7",
        "tag": "stack",
        "difficulty": PROBLEM_DIFFICULTY.EASY,
        "score": 10,
        "solvedCount": 0,
        "totalTime": 0,
        "averageTime": 0
    },
    {
        "id": 8,
        "description": "Problem statement 8",
        "tag": "string",
        "difficulty": PROBLEM_DIFFICULTY.MEDIUM,
        "score": 40,
        "solvedCount": 0,
        "totalTime": 0,
        "averageTime": 0
    },
    {
        "id": 9,
        "description": "Problem statement 9",
        "tag": "array",
        "difficulty": PROBLEM_DIFFICULTY.MEDIUM,
        "score": 40,
        "solvedCount": 0,
        "totalTime": 0,
        "averageTime": 0
    },
    {
        "id": 10,
        "description": "Problem statement 10",
        "tag": "stack",
        "difficulty": PROBLEM_DIFFICULTY.HARD,
        "score": 60,
        "solvedCount": 0,
        "totalTime": 0,
        "averageTime": 0
    },
    {
        "id": 11,
        "description": "Problem statement 11",
        "tag": "stack",
        "difficulty": PROBLEM_DIFFICULTY.MEDIUM,
        "score": 50,
        "solvedCount": 0,
        "totalTime": 0,
        "averageTime": 0
    },
    {
        "id": 12,
        "description": "Problem statement 8",
        "tag": "queue",
        "difficulty": PROBLEM_DIFFICULTY.EASY,
        "score": 20,
        "solvedCount": 0,
        "totalTime": 0,
        "averageTime": 0
    },
];

export const connectDb = () => {
    if (userDb.length == 0) {
        userDb.push(...sampleUsers);
    }
    if (problemDb.length == 0) {
        problemDb.push(...sampleProblems);
    }
}