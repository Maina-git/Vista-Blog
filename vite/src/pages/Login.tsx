import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firabse";
import { useAuth } from "../context/authContext";
import { LuGalleryThumbnails } from "react-icons/lu";
import { useEffect, useState } from "react";

const Login = () => {
  const { email, setEmail, password, setPassword } = useAuth();

  const [fade, setFade] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setError(
        error.message || "Failed to log in. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!fade) {
    return (
      <div className="h-screen w-full bg-white flex flex-col items-center justify-center gap-5">
        <img
          className="rounded-full w-[100px] sm:w-[200px] animate-pulse"
          src="/images/Vista..jpg"
          alt="Loading..."
        />
        <span className="text-sm sm:text-lg font-bold text-pink-700">
          Loading...
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-50 px-4">
      <div className="flex items-center text-pink-700 font-bold text-4xl mb-4">
        <LuGalleryThumbnails />
      </div>
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-8"
      >
        <h1 className="text-pink-700 text-center text-2xl font-bold mb-6">
          Vista Blog
        </h1>
        {error && (
          <div className="bg-red-100 text-red-600 text-sm p-3 mb-4 rounded">
            {error}
          </div>
        )}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-3 border rounded outline-none focus:ring-2 focus:ring-pink-700"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 p-3 border rounded outline-none focus:ring-2 focus:ring-pink-700"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 text-white font-semibold rounded ${
            loading
              ? "bg-pink-400 cursor-not-allowed"
              : "bg-pink-700 hover:bg-pink-600"
          } transition`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;

