import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  question_id: {
    type: Schema.Types.ObjectId,
    ref: "practicequestion",
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

export default mongoose.model("questionprogression", UserSchema);
