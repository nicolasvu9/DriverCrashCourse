# Express API

## Setting Up

Install Node or nvm if not already installed, I'm using node v20.9.0
Run `node --version` to verify your version

Clone Repo

Go to server directory
`cd server`

Install node modules with 
`npm install`

The config file with the mongo db access is encrypted, to decrypt use the below command and enter the course in lowercase with the numbers when prompted

Encrypt
`gpg -c ./config/default.json`

Decrypt
`gpg ./config/default.json.gpg`

Run server
`npm run dev`

# Authentication
We use JWT to authenticate and authorize requests. Add token to HEADER
```JSON
{
  "x-access-token": "<TOKEN>"
}
```
In Postman

<img width="738" alt="image" src="https://github.com/nicolasvu9/DriverCrashCourse/assets/77313877/ef37911f-ec40-4d82-95f5-a9e0a5086cf3">

## Sign Up

### Request

`POST /api/auth/signup`

```json
{
    "username": "nicolas",
    "password": "password"
}
```

### Response

```
Successfully signed up
```

## Sign In

### Request

`POST /api/auth/signin`

```json
{
    "username": "nicolas",
    "password": "password"
}
```

### Response

```json
{
    "_id": "6566954b27350a14f671fcbf",
    "username": "user",
    "access_token": "<TOKEN>",
    "role": "user"
}
```



# Practice Questions

## Get all practice questions for administrative purposes

### Request

`GET /api/practicequestions/admin`

### Response

```json
[
  {
    "_id": "1",
    "text": "Are you having fun?",
    "choices": [
      { "choice_text": "Yes", "isCorrect": true },
      { "choice_text": "No", "isCorrect": false },
      { "choice_text": "All of the above", "isCorrect": false }
    ],
    "correct_answer_explanation": "You're having fun"
  }
  // ... more practice questions
]
```
## Get all practice questions for a user, with  it's current status of completion per question

### Request

`GET /api/practicequestions/`

### Response

```json
[
  {
    "_id": "1",
    "text": "Are you having fun?",
    "choices": [
      { "choice_text": "Yes", "isCorrect": true },
      { "choice_text": "No", "isCorrect": false },
      { "choice_text": "All of the above", "isCorrect": false }
    ],
    "correct_answer_explanation": "You're having fun",
    "isCompleted": true
  }
  // ... more practice questions
]
```


## Create a new practice question

### Request

`POST /api/practicequestions`

```json
{
  "text": "Are you having fun?",
  "choices": [
    { "choice_text": "Yes", "isCorrect": true },
    { "choice_text": "No", "isCorrect": false },
    { "choice_text": "All of the above", "isCorrect": false }
  ],
  "correct_answer_explanation": "You're having fun"
}
```

### Response

```json
{
  "_id": "1",
  "text": "Are you having fun?",
  "choices": [
    { "choice_text": "Yes", "isCorrect": true },
    { "choice_text": "No", "isCorrect": false },
    { "choice_text": "All of the above", "isCorrect": false }
  ],
  "correct_answer_explanation": "You're having fun"
}
```

## Set Question as Completed for User
This is to be done after a question is completed, to store the progress in practice questions

### Request

`POST /api/practicequestions/<ID OF QUESTION COMPLETED>/completed`

### Response

```json
{
    "question_id": "65669dfb3441e42e4ffef3e0",
    "user_id": "6565840af2af5e6e372d59e8",
    "_id": "6566a5660b6ea1ec537d7a57",
    "__v": 0
}
```

## Modify a question with its ID

### Request

`PUT /api/practicequestions/<ID OF QUESTION YOU WANT TO MODIFY>`

```json
{
  "text": "Are you having fun?",
  "choices": [
    { "choice_text": "Yes", "isCorrect": true },
    { "choice_text": "No", "isCorrect": false },
    { "choice_text": "All of the above", "isCorrect": false }
  ],
  "correct_answer_explanation": "You're having fun"
}
```

### Response

```json
{
  "_id": "1",
  "text": "Are you having fun?",
  "choices": [
    { "choice_text": "Yes", "isCorrect": true },
    { "choice_text": "No", "isCorrect": false },
    { "choice_text": "All of the above", "isCorrect": false }
  ],
  "correct_answer_explanation": "You're having fun"
}
```

## Delete practice question by ID

### Request

`DELETE /api/practicequestion/<ID OF QUESTION YOU WANT TO DELETE>`

### Response

Returns deleted question object

# Mock Exam Questions

## Get all questions for a mock exam with mock exam id

### Request

`GET /api/mockexams/questions/<MOCK EXAM ID>`

### Response

```json
[
  {
    "_id": "1",
    "mock_exam_id": "<MOCK EXAM ID>",
    "text": "Are you having fun?",
    "choices": [
      { "choice_text": "Yes", "isCorrect": true },
      { "choice_text": "No", "isCorrect": false },
      { "choice_text": "All of the above", "isCorrect": false }
    ],
    "correct_answer_explanation": "You're having fun"
  }
  // ... more mock exam questions
]
```

## Create a new mock exam question

### Request

`POST /api/mockexams/questions`

```json
{
  "text": "Are you having fun?",
  "mock_exam_id": "<MOCK EXAM ID>",
  "choices": [
    { "choice_text": "Yes", "isCorrect": true },
    { "choice_text": "No", "isCorrect": false },
    { "choice_text": "All of the above", "isCorrect": false }
  ],
  "correct_answer_explanation": "You're having fun"
}
```

## Modify a mock exam question with its ID

### Request

`PUT /api/mockexams/questions/<ID OF QUESTION YOU WANT TO MODIFY>`

```json
{
  "text": "Are you having fun?",
  "mock_exam_id": "<MOCK EXAM ID>",
  "choices": [
    { "choice_text": "Yes", "isCorrect": true },
    { "choice_text": "No", "isCorrect": false },
    { "choice_text": "All of the above", "isCorrect": false }
  ],
  "correct_answer_explanation": "You're having fun"
}
```

## Delete practice question by ID

### Request

`DELETE /api/mockexams/questions/<ID OF QUESTION YOU WANT TO DELETE>`

# Mock Exam

## Get all mock exams

### Request

`GET /api/mockexams`

### Response

```json
[
  {
    "_id": "65599b0a8d72abf26df73603",
    "name": "Sample Mock Exam",
    "description": "This is a sample description for the mock exam.",
    "__v": 0
  }
]
```

## Create a new mock exam

### Request

`POST /api/mockexams`

```json
{
  "name": "Sample Mock Exam",
  "description": "This is a sample description for the mock exam."
}
```

## Modify a mock exam question with its ID

### Request

`PUT /api/mockexams/<ID OF QUESTION YOU WANT TO MODIFY>`

```json
{
  "name": "Sample Mock Exam",
  "description": "This is a sample description for the mock exam."
}
```

## Delete EXAM ID

### Request

`DELETE /api/mockexams/<ID OF EXAM YOU WANT TO DELETE>`

## Submit results for a given EXAM

### Request

`POST /api/mockexams/results/<ID OF EXAM YOU WANT TO UPDATE RESULT>`

```json
{
    "result": 95
}
```

### Response
```json
{
    "_id": "65668b3de78a99fa4bacc5e6",
    "mock_exam_id": "65668a606140fa0fa188ab2b",
    "user_id": "6565840af2af5e6e372d59e8",
    "__v": 0,
    "top_result": 95
}
```

# Suggest questions

## Get all suggested questions

### Request

`GET /api/suggestedquestions`

### Response

Same as practice questions

## Create a new suggested question

### Request

`POST /api/suggestedquestions`
json object as payload

```json
{
  "text": "Are you having fun?",
  "choices": [
    { "choice_text": "Yes", "isCorrect": true },
    { "choice_text": "No", "isCorrect": false },
    { "choice_text": "All of the above", "isCorrect": false }
  ],
  "correct_answer_explanation": "You're having fun"
}
```

## Modify a suggested question with its ID

### Request

`PUT /api/mockexams/<ID OF QUESTION YOU WANT TO MODIFY>`

## Delete suggested question

### Request

`DELETE /api/mockexams/<ID OF EXAM YOU WANT TO DELETE>`

## Approve suggested question

This deletes the suggested question and adds it to the practice questions. Can be a modified version and image can be uploaded.

### Request

`POST /api/suggestedquestions/<ID OF SUGGESTED QUESTION>/approve`

```json
{
  "text": "Are you having fun?",
  "choices": [
    { "choice_text": "Yes", "isCorrect": true },
    { "choice_text": "No", "isCorrect": false },
    { "choice_text": "All of the above", "isCorrect": false }
  ],
  "correct_answer_explanation": "You're having fun"
}
```

# User Statistics
`GET /api/statistics`

### Response

```json
{
    "practiceQuestionsProgress": {
        "totalPracticeQuestions": 12,
        "completedPracticeQuestions": 1
    },
    "mockExamsTopResults": {
        "mockExamsTopResults": [
            {
                "_id": "65669886e78a99fa4bd0ad1e",
                "mock_exam_id": {
                    "_id": "65668a606140fa0fa188ab2b",
                    "name": "Sample Mock Exam"
                },
                "user_id": "6565840af2af5e6e372d59e8",
                "__v": 0,
                "top_result": 95
            }
        ]
    }
}
```


