"use client";
import { GETSingleBlog } from "@/services/blog.services";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import {
  Calendar,
  User,
  ArrowLeft,
  Share2,
  Loader,
  Facebook,
  Twitter,
} from "react-feather";

const SingleBlogPage = () => {
  const param = useParams();
  const pathname = usePathname();
  const { data, isLoading } = GETSingleBlog(param?.blog as string);

  if (isLoading) {
    return <Loader className="flex w-12 h-12 m-auto mt-12 animate-spin" />;
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen mb-20">
      <div className="pt-6 pb-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="/blog"
          className="inline-flex items-center text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors">
          <ArrowLeft className="h-5 w-5 mr-1" />
          Back to Blog
        </a>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <span className="inline-block bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Maa Kali Hardware
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {data?.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-400 mb-6">
            <span className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {data?.author} •
            </span>
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(data?.createdAt ? data?.createdAt : "").toDateString()}
            </span>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md mb-8 w-fit m-auto">
            <Image
              width={500}
              height={500}
              src={data?.image ? data?.image : ""}
              alt={data?.title ? data?.title : ""}
              className="w-[20vh] h-auto object-cover"
            />
          </div>
        </header>

        <article className="prose dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: data?.description || "" }} />

          <div className="mt-12 flex flex-wrap gap-2">
            {data?.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </article>

        <div className="flex flex-wrap justify-between items-center mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-4">
            <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              <Share2 className="h-5 w-5 mr-2" />
              Share Using Social Media Icons
            </button>
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                `https://maa-kali.vercel.app${pathname}`
              )}`}
              target="_blank"
              rel="noopener noreferrer">
              <Facebook className="h-5 w-5 mr-2" />
            </Link>
            <Link
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                `https://maa-kali.vercel.app${pathname}`
              )}&text=${encodeURIComponent("Check this out!")}`}
              target="_blank"
              rel="noopener noreferrer">
              <Twitter className="h-5 w-5 mr-2" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SingleBlogPage;
