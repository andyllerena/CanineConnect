export default function LoginSection() {
  return (
    <div className="space-y-4 max-w-md">
      {/* Name Input Field */}
      <div className="relative">
        <input
          type="text"
          className="w-full px-4 py-3 rounded-full border-2 border-white bg-white text-black placeholder-gray-500 focus:outline-none focus:border-[var(--primary)] transition-colors"
          placeholder="Enter your name"
        />
      </div>
      {/* Email Input Field */}
      <div className="relative">
        <input
          type="text"
          className="w-full px-4 py-3 rounded-full border-2 border-white bg-white text-black placeholder-gray-500 focus:outline-none focus:border-[var(--primary)] transition-colors"
          placeholder="Enter your email"
        />
      </div>
      {/* Get Started Button */}
      <div className="flex">
        <button className="flex-1 px-6 py-3 rounded-full bg-[var(--fg)] text-black font-semibold hover:opacity-90 transition-opacity duration-200 flex items-center justify-center">
          Get Started
        </button>
      </div>
    </div>
  );
}
