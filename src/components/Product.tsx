import { ShoppingCart, Heart, Star, Eye } from "react-feather";

const ProductCard = ({
  product,
}: {
  product: {
    image: string;
    name: string;
    category: string;
    brand: string;
    price: number;
    originalPrice: number;
    rating: number;
    inStock: boolean;
    isProductNew: boolean;
  };
}) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 md:h-56 object-cover"
        />

        {product.isProductNew && (
          <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            NEW
          </div>
        )}

        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
          <button className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
            <Eye className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </button>
          <button className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
            <Heart className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
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
              Rs. {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-500 dark:text-gray-400 line-through ml-2">
                Rs. {product.originalPrice.toLocaleString()}
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
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example Usage
const ProductShowcase = () => {
  const sampleProduct = {
    id: 1,
    name: "High Quality Chrome Plated Water Tap",
    category: "Plumbing",
    brand: "Jaquar",
    price: 2450,
    originalPrice: 2999,
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/2583028/pexels-photo-2583028.jpeg?auto=compress&cs=tinysrgb&w=600",
    inStock: true,
    isProductNew: false,
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductCard product={sampleProduct} />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
