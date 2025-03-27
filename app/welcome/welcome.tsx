import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar";

// Welcome Component
export function Welcome() {
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl text-center space-y-6 border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to <span className="text-blue-500">React Router</span>
          </h1>
          <p className="text-lg text-gray-600">
            Seamlessly navigate between pages with ease using React Router 7.
          </p>

          

          {/* New Links for Join Us and Login */}
          <div className="flex space-x-4 justify-center mt-6">
            <Link
              to="/signup"
              className="px-6 py-3 text-green-500 border border-green-500 rounded-lg shadow-md hover:bg-green-100 transition"
            >
              Join Us
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 text-purple-500 border border-purple-500 rounded-lg shadow-md hover:bg-purple-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
