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
  exam_id: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  choices: [choiceSchema],
  image: {
    type: String,
    required: true,
  },
  correct_answer_explanation: {
    type: String,
    required: true,
  },
});

export default mongoose.model("MockExamQuestion", mockExamQuestionSchema);
