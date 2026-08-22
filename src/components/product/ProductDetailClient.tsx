"use client";
import { useState } from "react";
import { Star, ShoppingCart, Check } from "react-feather";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useProductStore } from "@/store/product.store";
import { toast } from "react-toastify";
import { GETSingleProduct, GETProducts } from "@/services/product.services";
import Link from "next/link";

// Shape mirrors RawProduct in app/product/[product]/page.tsx (plus fields
// that the client uses but the server type omits)
interface InitialProduct {
  _id: string;
  name: string;
  category: string;
  brand: string;
  price: number | string;
  image: string;
  description?: string;
  inStock?: string;
  isProductNew?: string;
  originalPrice?: number | string;
  rating?: number | string;
  features?: string | string[];
  specifications?: string;
}

interface Props {
  /** Pre-fetched from the server component — used immediately so the first
   *  HTML response contains real content (critical for Google indexing). */
  initialProduct?: InitialProduct | null;
}

const ProductDetailClient = ({ initialProduct }: Props) => {
  const params = useParams<{ product: string }>();
  const productId = params?.product ?? "";
  const { data: fetchedProduct, isLoading } = GETSingleProduct(productId);
  const { data: allProducts } = GETProducts();
  const addToCart = useProductStore((state) => state.addToCart);

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "specifications">(
    "description"
  );

  // Use server-provided data immediately; switch to fresh API data once ready
  const product = fetchedProduct ?? initialProduct;

  // Only show spinner when there is no initial data to display
  if (isLoading && !product) {
    return (
      <div className="bg-offwhite min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-forest h-8 w-8" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-offwhite min-h-screen flex items-center justify-center">
        <p className="text-body-muted">Product not found.</p>
      </div>
    );
  }

  const features = !product.features
    ? []
    : Array.isArray(product.features)
    ? (product.features as string[])
    : String(product.features).split(",").map((f) => f.trim()).filter(Boolean);
  const specifications = product.specifications
    ? String(product.specifications)
        .split(",")
        .map((s) => {
          const [name, value] = s.split(":").map((x) => x.trim());
          return { name: name || s, value: value || "" };
        })
        .filter((s) => s.name)
    : [];
  const related = (allProducts || [])
    .filter((p) => p._id !== product._id && p.category === product.category)
    .slice(0, 4);
  const ratingNum = Number(product.rating) || 0;

  return (
    <div className="bg-offwhite min-h-screen">
      <div className="border-b border-border-light px-[6vw] py-4">
        <nav className="max-w-[1320px] mx-auto flex items-center gap-2 text-sm text-body-muted">
          <Link href="/" className="hover:text-forest">Home</Link>
          <span>/</span>
          <Link href="/product" className="hover:text-forest">Products</Link>
          <span>/</span>
          <span className="text-forest">{product.name}</span>
        </nav>
      </div>

      <main className="max-w-[1320px] mx-auto px-[6vw] py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="bg-white border border-border-light aspect-square flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-body-muted">
              Brand: <span className="font-semibold text-ink">{product.brand}</span>
            </span>
            <span className="font-accent text-[10px] tracking-[.08em] bg-ink text-white px-2 py-1">
              {product.category}
            </span>
          </div>

          <h1 className="text-[28px] md:text-[34px] font-black tracking-[-.01em] mb-3">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mb-5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(ratingNum) ? "text-forest fill-forest" : "text-border-light"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-body-muted">{product.rating}</span>
          </div>

          <div className="mb-7">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-ink">
                Rs. {Number(product.price).toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-body-muted line-through">
                  Rs. {Number(product.originalPrice).toLocaleString()}
                </span>
              )}
            </div>
            <p className="text-sm text-body-muted mt-1">Inclusive of all taxes</p>
          </div>

          {features.length > 0 && (
            <div className="mb-7">
              <h3 className="text-base font-extrabold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-forest mt-1 shrink-0" />
                    <span className="text-body-muted text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-7">
            <h3 className="text-base font-extrabold mb-2.5">Quantity</h3>
            <div className="flex items-center border border-border-light w-32">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-ink hover:bg-offwhite"
              >
                -
              </button>
              <span className="flex-1 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-ink hover:bg-offwhite"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              addToCart({
                _id: product._id,
                image: product.image,
                name: product.name,
                category: product.category,
                brand: product.brand,
                price: String(product.price),
                originalPrice:
                  product.originalPrice != null ? String(product.originalPrice) : undefined,
                rating: String(product.rating ?? "0"),
                inStock: product.inStock ?? "true",
                isProductNew: product.isProductNew ?? "false",
                features: Array.isArray(product.features)
                  ? product.features.join(",")
                  : product.features ?? "",
                description: product.description ?? "",
                specifications: product.specifications ?? "",
              });
              toast.success("Product added to cart!", {
                position: "bottom-center",
                autoClose: 1000,
                pauseOnHover: false,
                draggable: false,
                theme: "dark",
              });
            }}
            className="w-full sm:w-auto bg-forest hover:bg-mint hover:text-ink text-white py-4 px-8 font-extrabold flex items-center justify-center gap-2.5 transition-colors mb-6"
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </button>

          <div
            className={`text-sm font-semibold ${
              product.inStock === "true" ? "text-forest" : "text-red-500"
            }`}
          >
            {product.inStock === "true" ? "In Stock" : "Out of Stock"}
          </div>
        </div>
      </main>

      <div className="max-w-[1320px] mx-auto px-[6vw] pb-16">
        <div className="border-b border-border-light flex gap-8">
          <button
            onClick={() => setActiveTab("description")}
            className={`py-4 border-b-2 font-bold text-sm ${
              activeTab === "description" ? "border-forest text-forest" : "border-transparent text-body-muted"
            }`}
          >
            Description
          </button>
          {specifications.length > 0 && (
            <button
              onClick={() => setActiveTab("specifications")}
              className={`py-4 border-b-2 font-bold text-sm ${
                activeTab === "specifications" ? "border-forest text-forest" : "border-transparent text-body-muted"
              }`}
            >
              Specifications
            </button>
          )}
        </div>

        <div className="py-8">
          {activeTab === "description" && (
            <div
              className="prose max-w-none text-body-muted"
              dangerouslySetInnerHTML={{ __html: product.description || "" }}
            />
          )}
          {activeTab === "specifications" && specifications.length > 0 && (
            <table className="min-w-full divide-y divide-border-light">
              <tbody className="divide-y divide-border-light">
                {specifications.map((spec, index) => (
                  <tr key={index}>
                    <td className="py-3 pr-6 text-sm font-bold text-ink w-1/3">{spec.name}</td>
                    <td className="py-3 text-sm text-body-muted">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <section className="max-w-[1320px] mx-auto px-[6vw] pb-20">
          <h2 className="text-2xl font-black mb-7">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((item) => (
              <Link
                key={item._id}
                href={`/product/${item._id}`}
                className="bg-white border border-border-light hover:-translate-y-1 transition-transform"
              >
                <div className="aspect-square bg-[#EEF4EF] flex items-center justify-center overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-2 line-clamp-2">{item.name}</h3>
                  <div className="text-base font-black">Rs. {Number(item.price).toLocaleString()}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailClient;
