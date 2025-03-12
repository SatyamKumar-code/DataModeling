import mongoose from "mongoose"


const todoSchema = new mongoose.model({
  content: {
    type: String,
    required: true
  },
  complete: {
    type: String,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, {timestamps: ture});


export const Todo = mongoose.model("SubTodo", todoSchema);