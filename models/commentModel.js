// Import mongoose
const mongoose = require("mongoose");

//router handler
const commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post", // reference of post model
  },
  user: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

// exports
module.exports = mongoose.model("Comment", commentSchema);
