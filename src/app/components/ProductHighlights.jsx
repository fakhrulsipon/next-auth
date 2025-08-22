"use client";

export default function ProductHighlights() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl lg:text-3xl md:text-2xl font-bold text-center mb-4 text-gray-800">
        🌟 Featured Products
      </h2>
      {/* Subtitle */}
      <p className="text-center text-gray-500 text-lg mb-16">
        Check out our latest gadgets and accessories curated just for you.
      </p>
      <div className="grid md:grid-cols-3 gap-10">
        {/* Product Card 1 */}
        <div className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform">
          <img
            src="https://i.postimg.cc/KzvBbRn4/image-1.jpg"
            alt="Product 1"
            className="rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold">Smart Watch</h3>
          <p className="text-gray-600 mt-2">Track your health in style.</p>
          <p className="text-indigo-600 font-bold mt-3">$99.99</p>
        </div>

        {/* Product Card 2 */}
        <div className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform">
          <img
            src="https://i.postimg.cc/GpbsPHgz/image-2.jpg"
            alt="Product 2"
            className="rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold">Wireless Headphones</h3>
          <p className="text-gray-600 mt-2">Immersive sound, tangle-free.</p>
          <p className="text-indigo-600 font-bold mt-3">$149.99</p>
        </div>

        {/* Product Card 3 */}
        <div className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform">
          <img
            src="https://i.postimg.cc/7P5XJW2h/image-3.png"
            alt="Product 3"
            className="rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold">Stylish Backpack</h3>
          <p className="text-gray-600 mt-2">Perfect for work & travel.</p>
          <p className="text-indigo-600 font-bold mt-3">$59.99</p>
        </div>
      </div>
    </section>
  );
}
