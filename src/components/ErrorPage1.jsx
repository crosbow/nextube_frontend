import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage1 = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-6">
      <p className="text-8xl md:text-9xl font-extrabold text-purple-400 mb-4 tracking-widest">
        404
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
        Page Not Found
      </h1>
      <p className="text-lg text-gray-400 mb-10 max-w-lg">
        {error.error?.message}
      </p>
      <div className="space-x-4">
        <button
          onClick={() => navigate(-1)}
          className="cursor-pointer inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 font-bold transition-colors text-white shadow-xl shadow-purple-900/40 text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.155-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125h4.5a.75.75 0 00.75-.75v-4.5a.75.75 0 01.75-.75h2.25a.75.75 0 01.75.75v4.5a.75.75 0 00.75.75h4.5a1.125 1.125 0 001.125-1.125V9.75M8.25 21V10.125"
            />
          </svg>
          <span>Go Back</span>
        </button>
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 rounded-full text-purple-400 border border-purple-600 hover:bg-purple-900 transition-colors text-sm font-semibold"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};
export default ErrorPage1;
