"use client";
import { Lock, ArrowRight, Home, HelpCircle } from "react-feather";
import { FaContao } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

const UnauthorizedPage = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-4 text-center">
      <div className="mb-6 p-5 bg-red-100 dark:bg-red-900/30 rounded-full">
        <Lock className="h-12 w-12 text-red-600 dark:text-red-400" />
      </div>

      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
        403
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Access Forbidden
      </h2>

      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
        You don't have permission to access this page. If you believe this is an
        error, please contact your administrator or try signing in with a
        different account.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => router.push("/")}
          className="flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors">
          <Home className="h-5 w-5 mr-2" />
          Go to Homepage
        </button>

        <button
          onClick={() => router.back()}
          className="flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors">
          <ArrowRight className="h-5 w-5 mr-2 transform rotate-180" />
          Return Back
        </button>
      </div>

      {/* Additional Help Links */}
      <div className="flex flex-wrap justify-center gap-6 text-sm">
        <a
          href="/#contact"
          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
          <FaContao className="h-4 w-4 mr-1" />
          Contact Support
        </a>

        {pathname !== "/login" && (
          <button
            onClick={() => router.push("/login")}
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            <Lock className="h-4 w-4 mr-1" />
            Try Different Account
          </button>
        )}
      </div>

      {/* Technical Details (hidden from most users) */}
      <details className="mt-12 text-xs text-gray-500 dark:text-gray-400 cursor-pointer">
        <summary className="outline-none">Technical Details</summary>
        <div className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-left">
          <p>
            <strong>Error:</strong> HTTP 403 Forbidden
          </p>
          <p>
            <strong>Path:</strong> {pathname}
          </p>
          <p>
            <strong>Timestamp:</strong> {new Date().toLocaleString()}
          </p>
          <p className="mt-2">
            This error occurs when the server understands the request but
            refuses to authorize it. Common causes include insufficient
            permissions, IP restrictions, or authentication failures.
          </p>
        </div>
      </details>
    </div>
  );
};

export default UnauthorizedPage;
