"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Calendar, Clock, User, ArrowRight, Loader } from "react-feather";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  createdAt: string;
  author: string;
  readTime: number;
  url: string;
}

const BlogCard = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <>
      {blogs.map((blog) => (
        <article
          key={blog.id}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              width={500}
              height={300}
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="p-6">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {blog.createdAt
                  ? new Intl.DateTimeFormat("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }).format(new Date(blog.createdAt))
                  : "Invalid Date"}
              </span>
              <span className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {blog.author}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {blog.readTime} min read
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
              {blog.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-5 line-clamp-3">
              {blog.excerpt}
            </p>

            <a
              href={blog.url}
              className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium hover:text-amber-700 dark:hover:text-amber-300 transition-colors">
              Read More
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </div>
        </article>
      ))}
    </>
  );
};

const BlogSection = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("http://localhost:3000/api/blog");
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  console.log("blogs", blogs);

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Latest{" "}
          <span className="text-amber-600 dark:text-amber-400">Blog Posts</span>
        </h2>
        {loading ? (
          <Loader className="animate-spin flex m-auto w-12 h-12" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard blogs={blogs} />
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
