import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  hash_password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

export default mongoose.model("user", UserSchema);
