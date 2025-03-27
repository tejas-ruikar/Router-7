import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl text-center space-y-6 border border-gray-200">
        <h1 className="text-4xl font-bold text-gray-800">
          About <span className="text-blue-500">Us</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          We are passionate about building modern web applications using{" "}
          <span className="font-semibold">React Router 7</span> and other
          cutting-edge technologies. Our mission is to provide seamless
          navigation and great user experiences for our users.
        </p>
        <p className="text-lg text-gray-600">
          Our goal is to help developers learn and grow by providing easy-to-use
          templates and well-documented projects.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
