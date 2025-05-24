"use client";
import { GETProducts } from "@/services/product.services";
import { Loader2 } from "lucide-react";
import { ShoppingCart, Heart, Star, Eye } from "react-feather";
import { ProductFormProps } from "@/types/product.types";

const ProductCard = ({ product }: { product: ProductFormProps }) => {
  console.log("product", product);
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 md:h-56 object-cover"
        />

        {product.isProductNew.toLowerCase() === "true" && (
          <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            NEW
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">
            {product.category}
          </span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
            <span className="text-xs text-gray-700 dark:text-gray-300 ml-1">
              {product.rating}
            </span>
          </div>
        </div>

        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-3">
          <div>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              Rs. {product?.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-500 dark:text-gray-400 line-through ml-2">
                Rs. {product.originalPrice}
              </span>
            )}
          </div>

          <button className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>Brand: {product.brand}</span>
            <span
              className={product.inStock ? "text-green-500" : "text-red-500"}>
              {product.inStock === "true" ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductShowcase = () => {
  const { data, isLoading } = GETProducts();
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading ? (
            <Loader2 className="animate-spin" />
          ) : data ? (
            data.map((product: ProductFormProps) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            "No products available"
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
