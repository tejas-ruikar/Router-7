import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Your Dashboard
        </h1>
        <Link
          to="/"
          className="text-blue-500 hover:underline text-lg"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
