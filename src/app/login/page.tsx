"use client";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, Facebook } from "react-feather";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type formFields = {
  email: string;
  password: string;
  rememberMe: boolean;
  showPassword: boolean;
  isLoading: boolean;
  error: string;
};
const LoginForm = () => {
  const router = useRouter();
  const { register, handleSubmit, setError } = useForm<formFields>();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");

  interface LoginFormData {
    email: string;
    password: string;
    rememberMe: boolean;
  }

  interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}

  const onSubmit: SubmitHandler<formFields> = async (data) => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Login successful", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      if (response.data.accessToken) {
        document.cookie = `accessToken=${response.data.accessToken}; path=/; max-age=3600; secure; samesite=strict`;
      }
      if (response.data.refreshToken) {
        document.cookie = `refreshToken=${response.data.refreshToken}; path=/; max-age=3600; secure; samesite=strict`;
      }

      if (response.data.status === 200) {
        router.push("/admin/blog");
        setIsLoading(false);
      }

      console.log("Response:", response.data);
    } catch (error: AxiosError | any) {
      console.log("Response:", error);
      toast.error(error?.response?.data.error, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setIsLoading(false);
    }

    // setError("");

    // const formData: LoginFormData = {
    //   email,
    //   password,
    //   rememberMe,
    // };
    console.log("Form submitted:", data);
  };

  interface OAuthProvider {
    provider: string;
  }

  const handleOAuth = (provider: OAuthProvider["provider"]): void => {
    console.log(`Logging in with ${provider}`);
    router.push(`/api/auth/${provider.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome Back
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Log in to your Maa Kali Hardware account
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
          <div className="p-8">
            {/* {error && (
              <div className="mb-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 p-3 rounded-lg text-sm">
                {error}
              </div>
            )} */}

            <div className="grid grid-cols-3 gap-3 mb-6">
              <button
                // onClick={() => handleOAuth("Google")}
                className="flex items-center justify-center p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                aria-label="Login with Google">
                <FaGoogle className="h-5 w-5 text-red-500" />
              </button>
              <button
                // onClick={() => handleOAuth("Facebook")}
                className="flex items-center justify-center p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                aria-label="Login with Facebook">
                <Facebook className="h-5 w-5 text-blue-600" />
              </button>
              <button
                // onClick={() => handleOAuth("Github")}
                className="flex items-center justify-center p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                aria-label="Login with GitHub">
                <FaGithub className="h-5 w-5 text-gray-800 dark:text-gray-200" />
              </button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  OR CONTINUE WITH
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="text"
                    autoComplete="username"
                    required
                    {...register("email")}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    {...register("password")}
                    className="block w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }>
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a
                    href="/forgot-password"
                    className="font-medium text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 ${
                    isLoading ? "opacity-75 cursor-not-allowed" : ""
                  }`}>
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </>
                  ) : (
                    "Sign in"
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="px-8 py-4 bg-gray-50 dark:bg-gray-700 text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
