"use client";
import { GETSingleBlog } from "@/services/blog.services";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Calendar,
  User,
  ArrowLeft,
  Loader,
  Facebook,
  Twitter,
} from "react-feather";
import { SITE_URL } from "@/lib/seo";

const BlogDetailClient = () => {
  const param = useParams();
  const { data, isLoading } = GETSingleBlog(param?.blog as string);
  const shareUrl = `${SITE_URL}/blog/${param?.blog as string}`;

  if (isLoading) {
    return (
      <div className="bg-offwhite min-h-screen flex items-center justify-center">
        <Loader className="h-8 w-8 animate-spin text-forest" />
      </div>
    );
  }

  return (
    <div className="bg-offwhite min-h-screen">
      <div className="border-b border-border-light px-[6vw] py-4">
        <div className="max-w-[820px] mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-forest hover:text-mint font-semibold text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1.5" />
            Back to Blog
          </Link>
        </div>
      </div>

      <main className="max-w-[820px] mx-auto px-[6vw] py-14">
        <header className="mb-9">
          <span className="inline-block font-accent text-[11px] tracking-[.12em] text-forest border border-forest/40 px-3 py-1.5 mb-5">
            MAA KALI HARDWARE
          </span>
          <h1 className="text-[32px] md:text-[44px] font-black tracking-[-.02em] leading-[1.05] mb-5">
            {data?.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 font-accent text-xs tracking-[.05em] text-body-muted mb-8">
            <span className="flex items-center">
              <User className="h-3.5 w-3.5 mr-2" />
              {data?.author}
            </span>
            <span className="flex items-center">
              <Calendar className="h-3.5 w-3.5 mr-2" />
              {new Date(data?.createdAt ? data?.createdAt : "").toDateString()}
            </span>
          </div>

          {data?.image && (
            <div className="border border-border-light overflow-hidden mb-8">
              <Image
                width={820}
                height={460}
                src={data.image}
                alt={data.title ?? ""}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </header>

        <article className="prose max-w-none prose-headings:font-black prose-a:text-forest">
          <div dangerouslySetInnerHTML={{ __html: data?.description || "" }} />

          {!!data?.tags?.length && (
            <div className="mt-12 flex flex-wrap gap-2 not-prose">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white border border-border-light text-ink text-sm px-3 py-1.5"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </article>

        <div className="mt-10 pt-8 border-t border-border-light flex flex-wrap gap-4">
          <Link
            href="/product"
            className="text-forest hover:text-mint font-semibold text-sm underline underline-offset-2"
          >
            Shop genuine hardware, plumbing & electrical products →
          </Link>
          <Link
            href="/services"
            className="text-forest hover:text-mint font-semibold text-sm underline underline-offset-2"
          >
            Explore our home construction & repair services →
          </Link>
        </div>

        <div className="flex flex-wrap justify-between items-center mt-8 pt-6 border-t border-border-light">
          <span className="font-accent text-xs tracking-[.1em] text-body-muted">
            SHARE THIS ARTICLE
          </span>
          <div className="flex gap-3">
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-border-light hover:border-forest hover:text-forest transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                shareUrl
              )}&text=${encodeURIComponent("Check this out!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-border-light hover:border-forest hover:text-forest transition-colors"
            >
              <Twitter className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogDetailClient;
