// import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");
exports.createComment = async (req, res) => {
  try {
    // fetch data from req body
    const { post, user, body } = req.body;

    // create a comment object
    const comment = new Comment({
      post,user,body
    });

    // save the new comment into the DB
    const savedComment = await comment.save();

    // find the post by ID, add the new Comment to its comments array

    const updatedPost = await Post.findByIdAndUpdate(post,{ $push: { comments: savedComment._id } },
{ new: true }
    ).populate("comments")
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "Error While Creating Comments",
      
    });
  }
};
