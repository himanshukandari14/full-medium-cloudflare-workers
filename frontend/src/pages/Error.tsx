import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/blogs");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold text-blue-500">404</h1>
      <h2 className="text-3xl font-semibold mt-4 text-gray-700">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mt-2 text-center">
        The page you are looking for does not exist or has been moved.
      </p>
      <button
        onClick={handleGoHome}
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-200"
      >
        Return to Home
      </button>
    </div>
  );
};

export default Error;
