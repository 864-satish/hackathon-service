## API (cURL) and response
1. get all users
`curl --location 'http://localhost:3002/users/all'`
```json
[
    {
        "id": 3,
        "name": "Deepak Kumar",
        "department": "EE",
        "solvedProblems": [
            {
                "id": 5,
                "description": "Problem statement 3",
                "tag": "string",
                "difficulty": "Medium",
                "score": 30,
                "solvedCount": 2,
                "totalTime": 60,
                "averageTime": 30
            },
            {
                "id": 3,
                "description": "Problem statement 2",
                "tag": "array",
                "difficulty": "Medium",
                "score": 30,
                "solvedCount": 2,
                "totalTime": 60,
                "averageTime": 30
            },
            {
                "id": 1,
                "description": "Problem statement 1",
                "tag": "graph",
                "difficulty": "HARD",
                "score": 60,
                "solvedCount": 1,
                "totalTime": 30,
                "averageTime": 30
            },
            {
                "id": 2,
                "description": "Problem statement 2",
                "tag": "graph",
                "difficulty": "HARD",
                "score": 60,
                "solvedCount": 1,
                "totalTime": 30,
                "averageTime": 30
            },
            {
                "id": 4,
                "description": "Problem statement 3",
                "tag": "array",
                "difficulty": "Medium",
                "score": 20,
                "solvedCount": 2,
                "totalTime": 60,
                "averageTime": 30
            }
        ],
        "score": 200
    },
    {
        "id": 1,
        "name": "Satish Kumar",
        "department": "EE",
        "solvedProblems": [
            {
                "id": 3,
                "description": "Problem statement 2",
                "tag": "array",
                "difficulty": "Medium",
                "score": 30,
                "solvedCount": 2,
                "totalTime": 60,
                "averageTime": 30
            },
            {
                "id": 4,
                "description": "Problem statement 3",
                "tag": "array",
                "difficulty": "Medium",
                "score": 20,
                "solvedCount": 2,
                "totalTime": 60,
                "averageTime": 30
            }
        ],
        "score": 50
    },
    {
        "id": 2,
        "name": "Nitish Kumar",
        "department": "EE",
        "solvedProblems": [
            {
                "id": 5,
                "description": "Problem statement 3",
                "tag": "string",
                "difficulty": "Medium",
                "score": 30,
                "solvedCount": 2,
                "totalTime": 60,
                "averageTime": 30
            }
        ],
        "score": 30
    }
]
```

2. get user by id
`curl --location 'http://localhost:3002/users/3'`
```json
{
    "id": 3,
    "name": "Deepak Kumar",
    "department": "EE",
    "solvedProblems": [
        {
            "id": 5,
            "description": "Problem statement 3",
            "tag": "string",
            "difficulty": "Medium",
            "score": 30,
            "solvedCount": 2,
            "totalTime": 60,
            "averageTime": 30
        },
        {
            "id": 3,
            "description": "Problem statement 2",
            "tag": "array",
            "difficulty": "Medium",
            "score": 30,
            "solvedCount": 2,
            "totalTime": 60,
            "averageTime": 30
        },
        {
            "id": 1,
            "description": "Problem statement 1",
            "tag": "graph",
            "difficulty": "HARD",
            "score": 60,
            "solvedCount": 1,
            "totalTime": 30,
            "averageTime": 30
        },
        {
            "id": 2,
            "description": "Problem statement 2",
            "tag": "graph",
            "difficulty": "HARD",
            "score": 60,
            "solvedCount": 1,
            "totalTime": 30,
            "averageTime": 30
        },
        {
            "id": 4,
            "description": "Problem statement 3",
            "tag": "array",
            "difficulty": "Medium",
            "score": 20,
            "solvedCount": 2,
            "totalTime": 60,
            "averageTime": 30
        }
    ],
    "score": 200
}
```
3. get solved problems by user id
`curl --location 'http://localhost:3002/users/1/solved'`
response
```json
[
    {
        "id": 3,
        "description": "Problem statement 2",
        "tag": "array",
        "difficulty": "Medium",
        "score": 30,
        "solvedCount": 2,
        "totalTime": 60,
        "averageTime": 30
    },
    {
        "id": 4,
        "description": "Problem statement 3",
        "tag": "array",
        "difficulty": "Medium",
        "score": 20,
        "solvedCount": 2,
        "totalTime": 60,
        "averageTime": 30
    }
]
```

4. add user
```bash
curl --location 'http://localhost:3002/users/' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Deepak Kumar",
    "department": "EE",
    "asas": "212"
}'
```
response
```json
{
    "id": 3,
    "name": "Deepak Kumar",
    "department": "EE",
    "solvedProblems": [],
    "score": 0
}
```

5. add problem
```bash
curl --location 'http://localhost:3002/problems/' \
--header 'Content-Type: application/json' \
--data '{
    "description": "Problem statement 3",
    "tag": "string",
    "difficulty": "easy",
    "score": 10
}'
```
response
```json
{
    "id": 6,
    "description": "Problem statement 3",
    "tag": "string",
    "difficulty": "easy",
    "score": 10,
    "solvedCount": 0,
    "totalTime": 0,
    "averageTime": 0
}
```

6. solve a problem
```bash
curl --location 'http://localhost:3002/users/3/solve/4' \
--header 'Content-Type: application/json' \
--data '{
    "timeTaken": 30
}'
```
response `true`

7. List problem by filters in sorted order by score
```bash
curl --location 'http://localhost:3002/problems?difficulty=hard&tag=graph&sortByScore=1'
```
response
```json
[
    {
        "id": 1,
        "description": "Problem statement 1",
        "tag": "graph",
        "difficulty": "HARD",
        "score": 60,
        "solvedCount": 1,
        "totalTime": 30,
        "averageTime": 30
    },
    {
        "id": 2,
        "description": "Problem statement 2",
        "tag": "graph",
        "difficulty": "HARD",
        "score": 60,
        "solvedCount": 1,
        "totalTime": 30,
        "averageTime": 30
    }
]
```

8. Fetch leader `curl --location 'http://localhost:3002/leaderboard/leader'`
response
```json
{
    "id": 3,
    "name": "Deepak Kumar",
    "department": "EE",
    "solvedProblems": [
        {
            "id": 5,
            "description": "Problem statement 3",
            "tag": "string",
            "difficulty": "Medium",
            "score": 30,
            "solvedCount": 2,
            "totalTime": 60,
            "averageTime": 30
        },
        {
            "id": 3,
            "description": "Problem statement 2",
            "tag": "array",
            "difficulty": "Medium",
            "score": 30,
            "solvedCount": 2,
            "totalTime": 60,
            "averageTime": 30
        },
        {
            "id": 1,
            "description": "Problem statement 1",
            "tag": "graph",
            "difficulty": "HARD",
            "score": 60,
            "solvedCount": 1,
            "totalTime": 30,
            "averageTime": 30
        },
        {
            "id": 2,
            "description": "Problem statement 2",
            "tag": "graph",
            "difficulty": "HARD",
            "score": 60,
            "solvedCount": 1,
            "totalTime": 30,
            "averageTime": 30
        },
        {
            "id": 4,
            "description": "Problem statement 3",
            "tag": "array",
            "difficulty": "Medium",
            "score": 20,
            "solvedCount": 2,
            "totalTime": 60,
            "averageTime": 30
        }
    ],
    "score": 200
}
```
