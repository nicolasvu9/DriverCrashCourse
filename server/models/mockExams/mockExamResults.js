import mongoose from "mongoose";
const { Schema } = mongoose;

const mockExamResultsSchema = new Schema({
  mock_exam_id: {
    type: Schema.Types.ObjectId,
    ref: "mockexam",
    required: true,
  },
  top_result: {
    type: Number,
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

export default mongoose.model("mockexamresults", mockExamResultsSchema);
