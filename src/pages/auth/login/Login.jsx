import { Link } from "react-router-dom";

import LeftContent from "./components/LeftContent";
import LoginForm from "./components/LoginForm";
import LoginWithGoogle from "./components/LoginWithGoogle";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 sm:p-12 max-w-7xl mx-auto ">
      <div className="w-full max-w-x6l bg-gray-900 rounded-3xl shadow-2xl overflow-hidden shadow-purple-900/50 flex">
        <LeftContent />

        <div className="w-full lg:w-1/2 p-8 sm:p-10 lg:p-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              <span className="gradient-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Sign In
              </span>
            </h1>
            <p className="text-gray-400">
              Welcome back to the creative dashboard.
            </p>
          </div>

          <LoginForm />

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-gray-900 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            <LoginWithGoogle />
          </div>
          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?
            <Link
              to="/signup"
              className="font-bold text-blue-600 ml-2 underline transition-colors"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
