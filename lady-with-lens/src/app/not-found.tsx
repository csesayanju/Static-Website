export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-8">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-lg text-gray-600">Sorry, the page you’re looking for doesn’t exist.</p>
        <a href="/" className="mt-6 text-blue-500 hover:underline">← Back to home</a>
      </div>
    );
  }
  