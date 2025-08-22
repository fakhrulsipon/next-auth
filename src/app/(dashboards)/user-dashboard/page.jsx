import React from 'react';

const UserDashboard = () => {
    return (
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6 md:px-12 lg:px-24">
  <div className="max-w-6xl mx-auto text-center">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
      Why Choose <span className="text-blue-600">MyStore</span>?
    </h2>
    <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-12">
      At MyStore, we’re committed to providing high-quality products with
      exceptional service. Explore why thousands of customers trust us
      every day.
    </p>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300">
        <div className="text-blue-600 text-4xl mb-4">🛒</div>
        <h3 className="text-xl font-semibold mb-2">Wide Product Range</h3>
        <p className="text-gray-500">
          From everyday essentials to premium products, find everything in one place.
        </p>
      </div>

      {/* Card 2 */}
      <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300">
        <div className="text-blue-600 text-4xl mb-4">⚡</div>
        <h3 className="text-xl font-semibold mb-2">Fast & Secure Delivery</h3>
        <p className="text-gray-500">
          Get your products delivered safely and quickly, anywhere across the country.
        </p>
      </div>

      {/* Card 3 */}
      <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300">
        <div className="text-blue-600 text-4xl mb-4">💳</div>
        <h3 className="text-xl font-semibold mb-2">Easy Payment Options</h3>
        <p className="text-gray-500">
          Multiple payment methods including cash on delivery and secure online payments.
        </p>
      </div>

      {/* Card 4 */}
      <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300">
        <div className="text-blue-600 text-4xl mb-4">⭐</div>
        <h3 className="text-xl font-semibold mb-2">Trusted by Customers</h3>
        <p className="text-gray-500">
          Thousands of happy customers trust MyStore for quality and reliability.
        </p>
      </div>

      {/* Card 5 */}
      <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300">
        <div className="text-blue-600 text-4xl mb-4">📞</div>
        <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
        <p className="text-gray-500">
          Our support team is always here to help you with your queries.
        </p>
      </div>

      {/* Card 6 */}
      <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300">
        <div className="text-blue-600 text-4xl mb-4">🌍</div>
        <h3 className="text-xl font-semibold mb-2">Nationwide Coverage</h3>
        <p className="text-gray-500">
          No matter where you are, we deliver products to your doorstep.
        </p>
      </div>
    </div>
  </div>
</div>

    );
};

export default UserDashboard;