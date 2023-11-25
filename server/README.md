# Express API

## Setting Up

Install Node or nvm if not already installed, I'm using node v20.9.0
Run `node --version` to verify your version

Clone Repo

Go to server directory

Install node modules with `npm install`

The config file with the mongo db access is encrypted, to decrypt use the below command and enter the course when prompted

Encrypt
`gpg -c ./config/default.json`

Decrypt
`gpg ./config/default.json.gpg`

Go to server directory and run
`npm run dev`

# Practice Questions

## Get all practice questions

### Request

`GET /api/practicequestions`

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

## Modify a question with its ID

### Request

`PUT /api/practicequestion/<ID OF QUESTION YOU WANT TO MODIFY>`

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

```
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

```
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
