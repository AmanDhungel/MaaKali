"use client";
import { GETBlogs } from "@/services/blog.services";
import { BlogPostFormProps } from "@/types/blog.types";
import Image from "next/image";
import { Calendar, User, ArrowRight, Loader, Smile } from "react-feather";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

const BlogCard = ({ blogs }: { blogs: BlogPostFormProps[] }) => {
  if (!blogs || blogs.length === 0) {
    return (
      <div className="col-span-full text-center py-16 bg-white border border-border-light">
        <Smile className="inline-block mb-3 h-10 w-10 text-forest" />
        <p className="text-lg font-bold text-ink">No blog posts available yet.</p>
      </div>
    );
  }

  return (
    <>
      {blogs.map((blog, i) => (
        <Reveal key={blog.id ?? blog._id} index={i % 8}>
          <a
            href={`/blog/${blog._id}`}
            className="group bg-white border border-border-light h-full flex flex-col transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(10,20,29,.1)]"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EEF4EF]">
              <Image
                width={500}
                height={300}
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6 flex flex-col gap-3 flex-1">
              <div className="flex flex-wrap items-center gap-4 font-accent text-[11px] tracking-[.06em] text-forest">
                <span className="flex items-center">
                  <Calendar className="h-3.5 w-3.5 mr-1.5" />
                  {blog.createdAt
                    ? new Intl.DateTimeFormat("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }).format(new Date(blog.createdAt))
                    : "Invalid Date"}
                </span>
                <span className="flex items-center">
                  <User className="h-3.5 w-3.5 mr-1.5" />
                  {blog.author}
                </span>
              </div>

              <h3 className="text-[19px] font-extrabold leading-snug line-clamp-2">
                {blog.title}
              </h3>

              <p className="text-[14px] leading-relaxed text-body-muted line-clamp-3">
                {blog.excerpt}
              </p>

              <span className="mt-auto inline-flex items-center text-forest group-hover:text-mint font-bold text-sm">
                Read more
                <ArrowRight className="h-4 w-4 ml-2" />
              </span>
            </div>
          </a>
        </Reveal>
      ))}
    </>
  );
};

const BlogSection = () => {
  const { data, isLoading } = GETBlogs();

  return (
    <section className="bg-offwhite px-[6vw] py-[100px]">
      <div className="max-w-[1320px] mx-auto">
        <Reveal className="mb-12">
          <Eyebrow index="04" label="BLOG / GUIDES" />
          <h2 className="font-black tracking-[-.02em] leading-[1.02] max-w-[600px] text-[clamp(28px,3.6vw,44px)]">
            Tips for building &amp; maintaining your home.
          </h2>
        </Reveal>
        {isLoading ? (
          <Loader className="animate-spin flex m-auto w-10 h-10 text-forest" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px]">
            <BlogCard blogs={(data ?? []) as BlogPostFormProps[]} />
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
