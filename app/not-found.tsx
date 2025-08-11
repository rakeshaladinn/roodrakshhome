import Link from "next/link";
import { BiHome, BiSearch } from "react-icons/bi";

export default async function NotFound() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-pink-50 via-rose-50 to-rose-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center space-y-8 relative">
        {/* Animated 404 */}
        <div className="relative">
          <div className="text-[12rem] md:text-[16rem] font-bold text-pink-100 select-none leading-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-rose-400 to-pink-100 flex items-center justify-center animate-pulse">
              <BiSearch className="w-16 h-16 md:w-20 md:h-20 text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-rose-900">
              Oops! Page Not Found
            </h1>
            <p className="text-lg text-rose-600 max-w-md mx-auto">
              The page you are looking for seems to have wandered off into the
              digital wilderness.
            </p>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-rose-300 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <div className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
              <Link href="/" className="flex items-center gap-2">
                <BiHome className="w-4 h-4" />
                Go Home
              </Link>
            </div>
          </div>
        </div>

        {/* Additional help text */}
        <div className="pt-8 border-t border-rose-200">
          <p className="text-sm text-rose-500">
            If you believe this is an error, please{" "}
            <Link
              href="/contact"
              className="text-rose-600 hover:text-rose-700 underline font-medium"
            >
              contact support
            </Link>
          </p>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-rose-300 rounded-full opacity-60 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-6 h-6 bg-pink-300 rounded-full opacity-40 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-3 h-3 bg-rose-200 rounded-full opacity-50 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 right-10 w-5 h-5 bg-pink-400 rounded-full opacity-30 animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>
    </div>
  );
}
