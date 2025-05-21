import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: String,
    excerpt: String,
    description: String,
    author: String,
    tags: [String],
    image: {
      type: String,
      required: true,
    },
    comments: [
      {
        name: String,
        email: String,
        comment: String,
        date: String,
      },
    ],
    relatedPosts: [String],
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
