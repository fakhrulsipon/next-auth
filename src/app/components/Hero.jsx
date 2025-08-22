"use client";

export default function Hero() {
  return (
    <section className="relative text-center py-24 bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 text-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="xl:text-6xl md:text-4xl lg:text-5xl text-3xl font-extrabold mb-6 drop-shadow-lg">
          Welcome to <span className="text-blue-300">MyStore</span>
        </h1>
        <p className="text-xl mb-8 text-gray-100">
          Discover premium products at unbeatable prices. Shop with confidence,
          style, and comfort.
        </p>
        <button className="px-8 py-4 bg-blue-300 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:bg-blue-400 transition-transform">
          Start Shopping
        </button>
      </div>
    </section>
  );
}
