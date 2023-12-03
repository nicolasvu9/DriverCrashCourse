import mongoose from "mongoose";
const { Schema } = mongoose;

const flashcardSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  }
});

export default mongoose.model("flashcard", flashcardSchema);