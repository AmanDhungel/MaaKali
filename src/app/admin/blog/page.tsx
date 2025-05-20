"use client";

import Link from "next/link";

const BlogPostForm = () => {
  return (
    <>
      <Link
        href="/admin/addblog"
        className="w-fit flex bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-5 mr-5 ml-auto">
        Add Blog
      </Link>
    </>
  );
};

export default BlogPostForm;
