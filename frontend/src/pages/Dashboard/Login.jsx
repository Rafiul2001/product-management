import React from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate API call
    console.log("Login data:", data);
    await new Promise(resolve => setTimeout(resolve, 500));
    alert(`Welcome, ${data.username}!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-500 p-3 rounded-full">
                <FaSignInAlt className="text-white text-2xl" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Admin Login</h1>
            <p className="text-gray-600 text-sm">Sign in to your account</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  {...register("username", {
                    required: "Username is required",
                  })}
                  className={`w-full pl-10 pr-3 py-2.5 bg-white border rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.username ? "border-red-400" : "border-gray-300"
                  }`}
                  placeholder="Enter username"
                />
              </div>
              {errors.username && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className={`w-full pl-10 pr-3 py-2.5 bg-white border rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.password ? "border-red-400" : "border-gray-300"
                  }`}
                  placeholder="Enter password"
                />
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2.5 px-4 rounded-lg font-medium text-white transition-colors flex items-center justify-center ${
                isSubmitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {isSubmitting ? (
                "Signing in..."
              ) : (
                <>
                  <FaSignInAlt className="mr-2" />
                  Sign In
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <button className="text-sm text-blue-500 hover:text-blue-600">
              Forgot your password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;