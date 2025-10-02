const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 sm:p-12">
      <div className="w-full max-w-4xl bg-gray-900 rounded-3xl shadow-2xl overflow-hidden shadow-purple-900/50 flex">
        <div className="hidden lg:flex w-1/2 p-12 items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 relative">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold mb-4">
              <span className="gradient-text bg-gradient-to-r from-purple-300 to-blue-300">
                Access Your Studio
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              Manage your content, statistics, and community in one place.
            </p>
            <div className="w-64 h-64 rounded-full border-4 border-white/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10" />
            <div className="w-20 h-20 rounded-full bg-pink-500 absolute top-10 right-10 blur-xl opacity-30" />
          </div>
        </div>
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
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required=""
                className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 placeholder-gray-500 text-white input-gradient-focus transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required=""
                className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 placeholder-gray-500 text-white input-gradient-focus transition-all"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-400"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg shadow-pink-600/30 text-sm font-bold text-white 
                             bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-500"
              >
                SIGN IN NOW
              </button>
            </div>
          </form>
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
            <div className="mt-6 flex space-x-4">
              <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-700 rounded-xl shadow-sm text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 transition-colors">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/48px-Google_%22G%22_logo.svg.png"
                  className="w-5 h-5 mr-3"
                  alt="Google"
                />
                Google
              </button>
              <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-700 rounded-xl shadow-sm text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 transition-colors">
                <svg
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.008c0 4.413 2.868 8.167 6.839 9.497.5.092.682-.218.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.37-1.34-3.37-1.34-.454-1.157-1.11-1.464-1.11-1.464-.908-.62.068-.608.068-.608 1.004.07 1.531 1.032 1.531 1.032.892 1.53 2.342 1.084 2.91.828.092-.643.356-1.084.644-1.334-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.03-2.682-.104-.252-.446-1.27.098-2.65 0 0 .84-.268 2.75 1.025A9.394 9.394 0 0112 7.087c.85.004 1.701.11 2.5.326 1.908-1.293 2.748-1.025 2.748-1.025.546 1.38.203 2.398.1 2.65.64.698 1.028 1.592 1.028 2.682 0 3.843-2.335 4.688-4.565 4.935.359.308.678.92.678 1.855 0 1.334-.012 2.41-.012 2.73 0 .267.18.577.688.484C19.13 20.17 22 16.416 22 12.008 22 6.484 17.523 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </button>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?
            <a
              href="#"
              className="font-bold text-purple-400 hover:text-purple-300 transition-colors"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
