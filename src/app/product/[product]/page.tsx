"use client";
import { useState } from "react";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  Check,
  Shield,
  ChevronDown,
} from "react-feather";
import { useParams } from "next/navigation";

const SingleProductPage = () => {
  // const { id } = useParams();

  const product = {
    id: 1,
    name: "Premium Chrome Plated Water Tap",
    brand: "Jaquar",
    category: "Plumbing",
    price: 3499,
    originalPrice: 3999,
    discount: 13,
    rating: 4.7,
    reviewCount: 28,
    inStock: true,
    images: [
      "/images/tap-1.jpg",
      "/images/tap-2.jpg",
      "/images/tap-3.jpg",
      "/images/tap-4.jpg",
    ],
    features: [
      "100% brass body for durability",
      "Chrome plated finish",
      "Ceramic disc technology",
      "Water saving (5L/min flow rate)",
      "Easy installation",
    ],
    description: `
      <p>The <strong>Jaquar Premium Chrome Tap</strong> is a high-quality water faucet designed for modern bathrooms and kitchens. Manufactured with precision engineering, this tap offers smooth operation and leak-proof performance.</p>
      <p>Perfect for <strong>Nepali households</strong>, it combines elegant design with water-saving technology to help reduce your water bills while maintaining excellent functionality.</p>
    `,
    specifications: [
      { name: "Material", value: "Brass with Chrome Plating" },
      { name: "Finish", value: "Mirror Polish" },
      { name: "Warranty", value: "5 Years" },
      { name: "Country of Origin", value: "India" },
      { name: "Model Number", value: "JPR-CP-45" },
    ],
    relatedProducts: [
      {
        id: 2,
        name: "Wall Mounted Basin Mixer",
        price: 4299,
        image: "/images/mixer.jpg",
      },
      {
        id: 3,
        name: "Water Saving Shower Set",
        price: 2899,
        image: "/images/shower.jpg",
      },
    ],
  };

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a
                  href="/"
                  className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 inline-flex items-center">
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-gray-500 mx-2">/</span>
                  <a
                    href="/product"
                    className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400">
                    Product
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="text-gray-500 mx-2">/</span>
                  <span className="text-amber-600 dark:text-amber-400">
                    {product.name}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mb-8 lg:mb-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-contain p-6"
              />
            </div>

            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-white dark:bg-gray-800 rounded-md shadow-sm overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-amber-500"
                      : "border-transparent"
                  }`}>
                  <img
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-20 object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Brand:{" "}
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {product.brand}
                </span>
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Category:{" "}
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {product.category}
                </span>
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              {product.name}
            </h1>

            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600 dark:text-gray-300 text-sm ml-2">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="mb-6">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  Rs. {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 dark:text-gray-400 line-through ml-3">
                    Rs. {product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.discount && (
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-semibold px-2 py-0.5 rounded ml-3">
                    {product.discount}% OFF
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Inclusive of all taxes
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Quantity
              </h3>
              <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  -
                </button>
                <span className="flex-1 text-center text-gray-900 dark:text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
              <button className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                <Heart className="h-5 w-5" />
                Wishlist
              </button>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-8">
              <div className="flex items-start">
                <Truck className="h-6 w-6 text-amber-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    Delivery Information
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Free delivery in Bhaktapur on orders over Rs. 2000. Expected
                    delivery: <strong>1-2 business days</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </button>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Shield className="h-5 w-5 mr-2 text-amber-500" />
                {
                  product.specifications.find((s) => s.name === "Warranty")
                    ?.value
                }{" "}
                Warranty
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("description")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "description"
                    ? "border-amber-500 text-amber-600 dark:text-amber-400"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}>
                Description
              </button>
              <button
                onClick={() => setActiveTab("specifications")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "specifications"
                    ? "border-amber-500 text-amber-600 dark:text-amber-400"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}>
                Specifications
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "reviews"
                    ? "border-amber-500 text-amber-600 dark:text-amber-400"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}>
                Reviews ({product.reviewCount})
              </button>
            </nav>
          </div>

          <div className="py-8">
            {activeTab === "description" && (
              <div className="prose dark:prose-invert max-w-none">
                <div
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {product.specifications.map((spec, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white w-1/3">
                          {spec.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Customer Reviews
                  </h3>
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="text-4xl font-bold text-gray-900 dark:text-white">
                        {product.rating}
                      </div>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(product.rating)
                                ? "text-amber-400 fill-amber-400"
                                : "text-gray-300 dark:text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-8">
                            {star} star
                          </span>
                          <div className="flex-1 mx-2 h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div
                              className="h-2.5 bg-amber-400 rounded-full"
                              style={{
                                width: `${star <= product.rating ? 100 : 0}%`,
                              }}></div>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400 w-8 text-right">
                            {star === 5 ? product.reviewCount : 0}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Write a Review
                  </button>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <img
                      src="/images/user-avatar.jpg"
                      alt="User avatar"
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Anil Shrestha
                        </h4>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Star className="h-4 w-4 text-amber-400 fill-amber-400 mr-1" />
                          5.0
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                        Purchased on May 15, 2024
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Excellent quality tap. The chrome finish looks premium
                        and the water flow is perfect. Installation was easy
                        too.
                      </p>
                      <div className="flex space-x-2">
                        <img
                          src="/images/review-1.jpg"
                          alt="Review image"
                          className="h-16 w-16 object-cover rounded"
                        />
                        <img
                          src="/images/review-2.jpg"
                          alt="Review image"
                          className="h-16 w-16 object-cover rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.relatedProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="h-48 p-4 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {item.name}
                  </h3>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    Rs. {item.price.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default SingleProductPage;
