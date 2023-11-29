import mongoose from "mongoose";
const { Schema } = mongoose;

const choiceSchema = new Schema({
  choice_text: {
    type: String,
    required: true,
  },
  isCorrect: {
    type: Boolean,
    required: true,
  },
});

const mockExamQuestionSchema = new Schema({
  mock_exam_id: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  choices: [choiceSchema],
  correct_answer_explanation: {
    type: String,
    required: true,
  },
});

export default mongoose.model("MockExamQuestion", mockExamQuestionSchema);
