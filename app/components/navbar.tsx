// Navbar Component
import { Link } from "react-router-dom";

export function Navbar() {
    return (
      <nav className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-gray-800 text-2xl font-bold">
            RouteME
          </Link>
          <div className="flex space-x-6">
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 transition">
              Dashboard
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition">
              Contact
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-gray-900 transition">
              Login
            </Link>
          </div>
        </div>
      </nav>
    );
  }