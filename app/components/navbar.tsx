// Navbar Component
import { Link } from "react-router-dom";

export function Navbar() {
    return (
      <nav className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-gray-800 text-2xl font-bold">
            Router 7
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
  }