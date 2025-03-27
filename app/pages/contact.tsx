import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full text-center space-y-6 border border-gray-200">
        <h1 className="text-4xl font-bold text-gray-800">
          Get in <span className="text-blue-500">Touch</span>
        </h1>
        <p className="text-lg text-gray-600">
          Have questions? We'd love to hear from you! Fill out the form below, or
          send us an email at{" "}
          <a
            href="mailto:support@example.com"
            className="text-blue-500 hover:underline"
          >
            support@example.com
          </a>
        </p>
        <form className="space-y-4 text-left max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
        <Link
          to="/"
          className="inline-block px-6 py-3 text-blue-500 border border-blue-500 rounded-lg shadow-md hover:bg-blue-100 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
