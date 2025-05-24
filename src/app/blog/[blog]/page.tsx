"use client";
import { GETSingleBlog } from "@/services/blog.services";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Calendar, User, ArrowLeft, Share2, Bookmark } from "react-feather";

const SingleBlogPage = () => {
  const param = useParams();
  const { data } = GETSingleBlog(param?.blog as string);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
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
              Share
            </button>
          </div>
        </div>

        {/* <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="flex items-start">
            <img
              src="/images/author-rajesh.jpg"
              alt={data?.author}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {data?.author}
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                With over 15 years of experience in plumbing and hardware,
                Rajesh helps homeowners find the right solutions. Visit him at
                Radhe Radhe Hardware in Bhaktapur for expert advice.
              </p>
            </div>
          </div>
        </div> */}

        {/* <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Related Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data?.relatedPosts.map((post) => (
              <a
                key={post.id}
                href={`/data/${post.id}`}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {blog.readTime} min read
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section> */}

        {/* <section
          id="comments"
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Comments (3)
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Anil Shrestha
                  </h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    2 days ago
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Great article! I bought the Nepal Wrench Pro from your store
                  last month and it's been very useful.
                </p>
              </div>
            </div>
          </div>

          <form className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Leave a Comment
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <textarea
                placeholder="Your Comment"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white"
                required></textarea>
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Post Comment
              </button>
            </div>
          </form>
        </section> */}
      </main>
    </div>
  );
};

export default SingleBlogPage;
