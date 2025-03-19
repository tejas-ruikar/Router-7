import { Navbar } from "../components/navbar";

export  function About() {
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl text-center space-y-6 border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-lg text-gray-600">
            We are a team of passionate developers dedicated to building
            high-quality web applications. Our mission is to create seamless
            and user-friendly experiences using modern web technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Twitter
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
