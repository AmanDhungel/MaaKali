"use client";
import { useMemo, useState } from "react";
import { GETProducts } from "@/services/product.services";
import { Loader2 } from "lucide-react";
import { ShoppingCart, Star } from "react-feather";
import { ProductFormProps } from "@/types/product.types";
import { useProductStore } from "@/store/product.store";
import { toast } from "react-toastify";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

const ProductCard = ({ product, index = 0 }: { product: ProductFormProps; index?: number }) => {
  const addToCart = useProductStore((state) => state.addToCart);

  return (
    <Reveal
      index={index % 8}
      className="group bg-white border border-border-light flex flex-col transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(10,20,29,.12)]"
    >
      <Link href={`/product/${product._id}`} className="relative block aspect-square bg-[#EEF4EF] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2.5 left-2.5 bg-ink text-white font-accent text-[9.5px] tracking-[.08em] px-2 py-1">
          {product.category}
        </span>
        {product.isProductNew?.toLowerCase() === "true" && (
          <div className="absolute top-2.5 right-2.5 bg-forest text-white text-xs font-bold px-2 py-1">
            NEW
          </div>
        )}
      </Link>

      <div className="p-[18px] flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-body-muted uppercase">{product.brand}</span>
          <div className="flex items-center">
            <Star className="h-3.5 w-3.5 text-forest fill-forest" />
            <span className="text-xs text-body-muted ml-1">{product.rating}</span>
          </div>
        </div>

        <Link href={`/product/${product._id}`}>
          <h3 className="text-[15.5px] font-bold leading-snug line-clamp-2 hover:text-forest transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="mt-auto flex items-center justify-between pt-2.5">
          <div>
            <span className="font-black text-[16px] text-ink">Rs. {product?.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-body-muted line-through ml-2">
                Rs. {product.originalPrice}
              </span>
            )}
          </div>
          <button
            className="w-[34px] h-[34px] bg-forest hover:bg-mint hover:text-ink text-white flex items-center justify-center font-extrabold transition-colors"
            onClick={() => {
              addToCart(product);
              toast.success("Product added to cart!", {
                position: "bottom-center",
                autoClose: 1000,
                pauseOnHover: false,
                draggable: false,
                theme: "dark",
              });
            }}
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-1 pt-2.5 border-t border-border-light">
          <span
            className={`text-xs font-semibold ${
              product.inStock === "true" ? "text-forest" : "text-red-500"
            }`}
          >
            {product.inStock === "true" ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>
    </Reveal>
  );
};

const ProductShowcase = () => {
  const { data, isLoading } = GETProducts();
  const [activeCat, setActiveCat] = useState("All");

  const cats = useMemo(() => {
    if (!data) return ["All"];
    return ["All", ...Array.from(new Set(data.map((p) => p.category))).sort()];
  }, [data]);

  const filtered = useMemo(() => {
    if (!data) return [];
    return activeCat === "All" ? data : data.filter((p) => p.category === activeCat);
  }, [data, activeCat]);

  return (
    <section className="bg-offwhite px-[6vw] py-[100px]" id="products">
      <div className="max-w-[1320px] mx-auto">
        <Reveal className="mb-10">
          <Eyebrow index="02" label="SHOP BY CATEGORY" />
          <h2 className="font-black tracking-[-.02em] leading-[1.02] max-w-[680px] text-[clamp(28px,3.6vw,44px)]">
            Featured products from Maa Kali Hardware
          </h2>
        </Reveal>

        <div className="flex gap-2.5 flex-wrap mb-9 border-b border-border-light pb-7">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className={`px-5 py-[11px] text-sm font-semibold transition-colors ${
                c === activeCat
                  ? "bg-ink text-white border border-ink"
                  : "bg-white text-ink border border-border-light hover:border-forest"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[22px]">
          {isLoading ? (
            <Loader2 className="animate-spin text-forest" />
          ) : filtered.length > 0 ? (
            filtered.map((product: ProductFormProps, i: number) => (
              <ProductCard key={product._id} product={product} index={i} />
            ))
          ) : (
            <p className="text-body-muted">No products available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
