import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    tags: { type: [String], required: true },
    image: { type: String, required: true },
    comments: [
      {
        name: { type: String, required: true },
        email: { type: String, required: true },
        comment: { type: String, required: true },
        date: { type: String, required: true },
      },
    ],
    relatedPosts: { type: [String], required: true },
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
