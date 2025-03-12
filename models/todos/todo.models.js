import mongoose, { mongo } from "mongoose"

const subTodoSchema = new mongoose.Schema(
  {
    tital: {
      type: String,
      required: true
    },
    complate: {
      type: Boolean,
      default: false
    },
    createBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    SubTodos: [
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubTodo"
      } // Array of sub-Todos
    ]
  }, {timestamp: ture});

export const SubTodo = mongoose.model("Todo", subTodoSchema);