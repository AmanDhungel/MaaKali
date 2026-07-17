import type { Metadata } from "next";
import connectionDB from "@/connectDB/connectionDB";
import Product from "@/models/Product";
import ProductDetailClient from "@/components/product/ProductDetailClient";
import { buildKeywords, CORE_KEYWORDS, SITE_URL } from "@/lib/seo";

interface RawProduct {
  _id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  image: string;
  description?: string;
  inStock?: string;
}

async function getProduct(id: string): Promise<RawProduct | null> {
  try {
    await connectionDB();
    const product = await Product.findById(id).lean();
    return product ? JSON.parse(JSON.stringify(product)) : null;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>;
}): Promise<Metadata> {
  const { product: id } = await params;
  const product = await getProduct(id);
  if (!product) return { title: "Product | Maa Kali Hardware" };

  const title = `${product.name} — ${product.category}`;
  const description = `Buy ${product.name} (${product.brand}) at Maa Kali Hardware, the best hardware store in Bhaktapur & the Kathmandu Valley. Genuine ${product.category.toLowerCase()} products, fair prices, fast delivery.`;

  return {
    title,
    description,
    keywords: buildKeywords(CORE_KEYWORDS, [
      product.name,
      product.brand,
      product.category,
      `${product.category} price in Nepal`,
      `buy ${product.name} in Bhaktapur`,
    ]),
    alternates: { canonical: `/product/${id}` },
    openGraph: {
      title: `${title} | Maa Kali Hardware`,
      description,
      url: `/product/${id}`,
      images: product.image ? [{ url: product.image }] : undefined,
    },
  };
}

export default async function SingleProductPage({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product: id } = await params;
  const product = await getProduct(id);

  const jsonLd = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        image: product.image,
        description: product.description,
        brand: { "@type": "Brand", name: product.brand },
        category: product.category,
        offers: {
          "@type": "Offer",
          url: `${SITE_URL}/product/${id}`,
          priceCurrency: "NPR",
          price: product.price,
          availability:
            product.inStock === "true"
              ? "https://schema.org/InStock"
              : "https://schema.org/OutOfStock",
          seller: { "@type": "Organization", name: "Maa Kali Hardware" },
        },
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
      <ProductDetailClient />
    </>
  );
}
