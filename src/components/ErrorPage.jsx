import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-black mb-4">Oops!</h1>
      <h2 className="text-3xl mb-6">Page not found</h2>

      {error && (
        <p className="text-gray-600 mb-8">
          {error.statusText || error.message}
        </p>
      )}

      <p className="mb-8 text-black">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
