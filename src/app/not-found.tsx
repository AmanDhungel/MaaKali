"use client";
import { Frown, Home, Mail, ArrowRight } from "react-feather";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-8 relative">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
          <Frown className="h-16 w-16 text-red-500 dark:text-red-400" />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-md border border-gray-200 dark:border-gray-700">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            404
          </span>
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        Page Not Found
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
        Oops! The page you're looking for doesn't exist or has been moved. Try
        searching or check out these helpful links instead.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => (window.location.href = "/")}
          className="flex cursor-pointer items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors">
          <Home className="h-5 w-5 mr-2" />
          Go to Homepage
        </button>

        <button
          onClick={() => router.back()}
          className="flex cursor-pointer items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors">
          <ArrowRight className="h-5 w-5 mr-2 transform rotate-180" />
          Go Back
        </button>
      </div>

      <div className="w-full max-w-md">
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
          Popular Pages
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { name: "Products", path: "/product" },
            { name: "Services", path: "/#services" },
            { name: "About Us", path: "/#about" },
            { name: "Contact", path: "/#contact" },
          ].map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="px-4 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 transition-colors flex items-center justify-between">
              {link.name}
              <ArrowRight className="h-4 w-4 text-gray-400" />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12 flex items-center text-sm text-gray-600 dark:text-gray-400">
        <Mail className="h-4 w-4 mr-2" />
        Can't find what you need?{" "}
        <a
          href="/contact"
          className="ml-1 text-amber-600 dark:text-amber-400 hover:underline">
          Contact us
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
