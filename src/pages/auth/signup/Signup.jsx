import { Link } from "react-router-dom";
import LeftContent from "../login/components/LeftContent";
import LoginWithGoogle from "../login/components/LoginWithGoogle";
import SignupForm from "./components/SignupForm";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 sm:p-12 max-w-7xl mx-auto ">
      <div className="w-full max-w-6xl bg-gray-900 rounded-3xl shadow-2xl overflow-hidden shadow-purple-900/50 flex">
        <LeftContent />

        <div className="w-full lg:w-1/2 p-8 sm:p-10 lg:p-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              <span className="gradient-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Sign Up
              </span>
            </h1>
            <p className="text-gray-400">Welcome to NexTube.</p>
          </div>

          <SignupForm />

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
            Already have an account?
            <Link
              to="/login"
              className="font-bold text-blue-600 ml-2 underline transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Signup;
