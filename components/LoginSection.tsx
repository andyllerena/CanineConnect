"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginSection() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(
        "https://frontend-take-home-service.fetch.com/auth/login",
        {
          method: "POST",
          //Tells browser to include cookies in future requests
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            //accept header for better compatibility
            Accept: "application/json",
          },
          // Send the data in the exact format the API expects
          body: JSON.stringify({
            name: name.trim(), // Remove any extra whitespace
            email: email.trim().toLowerCase(), // Normalize email
          }),
        }
      );

      // Check if the response is successful
      if (!res.ok) {
        // Try to get error message from response
        let errorMessage = "Login failed";
        try {
          const errorText = await res.text();
          errorMessage = errorText || `HTTP ${res.status}: ${res.statusText}`;
        } catch {
          errorMessage = `HTTP ${res.status}: ${res.statusText}`;
        }
        throw new Error(errorMessage);
      }
      router.push("/search");
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg text-center">
          {error}
        </div>
      )}

      {/* Name Input Field */}
      <div className="relative">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          minLength={1} // Ensure name isn't empty
          className="w-full px-4 py-3 rounded-full border-2 border-white bg-white text-black placeholder-gray-500 focus:outline-none focus:border-[var(--primary)] transition-colors"
          placeholder="Enter your name"
          disabled={loading}
        />
      </div>

      {/* Email Input Field */}
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-full border-2 border-white bg-white text-black placeholder-gray-500 focus:outline-none focus:border-[var(--primary)] transition-colors"
          placeholder="Enter your email"
          disabled={loading}
        />
      </div>

      {/* Submit Button */}
      <div className="flex">
        <button
          type="submit"
          disabled={loading || !name.trim() || !email.trim()}
          className="flex-1 px-6 py-3 rounded-full bg-[var(--fg)] text-black font-semibold hover:opacity-90 transition-opacity duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Logging in..." : "Get Started"}
        </button>
      </div>
    </form>
  );
}
