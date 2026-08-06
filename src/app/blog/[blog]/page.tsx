import type { Metadata } from "next";
import connectionDB from "@/connectDB/connectionDB";
import Blog from "@/models/Blog";
import BlogDetailClient from "@/components/blog/BlogDetailClient";
import { buildKeywords, CORE_KEYWORDS, SITE_URL } from "@/lib/seo";

interface RawBlog {
  _id: string;
  title: string;
  excerpt: string;
  description?: string;
  author: string;
  tags: string[];
  image: string;
  createdAt?: string;
}

async function getBlog(id: string): Promise<RawBlog | null> {
  try {
    await connectionDB();
    const blog = await Blog.findById(id).lean();
    return blog ? JSON.parse(JSON.stringify(blog)) : null;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blog: string }>;
}): Promise<Metadata> {
  const { blog: id } = await params;
  const blog = await getBlog(id);
  if (!blog) return { title: "Blog | Maa Kali Hardware" };

  return {
    title: blog.title,
    description: blog.excerpt,
    keywords: buildKeywords(CORE_KEYWORDS, blog.tags, [blog.title]),
    alternates: { canonical: `/blog/${id}` },
    openGraph: {
      type: "article",
      title: blog.title,
      description: blog.excerpt,
      url: `/blog/${id}`,
      images: blog.image ? [{ url: blog.image }] : undefined,
      authors: [blog.author],
      tags: blog.tags,
    },
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ blog: string }>;
}) {
  const { blog: id } = await params;
  const blog = await getBlog(id);

  const jsonLd = blog
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: blog.title,
        description: blog.excerpt,
        image: blog.image,
        author: { "@type": "Person", name: blog.author },
        publisher: {
          "@type": "Organization",
          name: "Maa Kali Hardware",
          logo: { "@type": "ImageObject", url: `${SITE_URL}/dh.png` },
        },
        datePublished: blog.createdAt,
        mainEntityOfPage: `${SITE_URL}/blog/${id}`,
        keywords: blog.tags?.join(", "),
      }
    : null;

  const breadcrumbLd = blog
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: blog.title, item: `${SITE_URL}/blog/${id}` },
        ],
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {breadcrumbLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      )}
      <BlogDetailClient />
    </>
  );
}
