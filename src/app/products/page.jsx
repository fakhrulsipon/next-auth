"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/products");
            const data = await res.json();

            if (!res.ok) {
                toast.error(data?.message || "Failed to fetch products");
                return;
            }

            setProducts(data.products);
        } catch (err) {
            console.error(err);
            toast.error("Failed to fetch products");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="p-8 min-h-screen">
            <div className="text-center mb-10">
                <h1 className="md:text-4xl text-2xl font-extrabold text-blue-400 mb-2">
                    Our Featured Products
                </h1>
                <p className="text-gray-600 text-lg">
                    Discover our latest items carefully selected for you
                </p>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="h-10 w-10 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dashed border-sky-600"></div>;
                </div>
            ) : products.length === 0 ? (
                <p className="text-center text-gray-500">No products found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
                        >
                            <h2 className="text-xl font-semibold text-blue-400 mb-2">
                                {product.name}
                            </h2>
                            <p className="text-gray-700 mb-3">{product.description}</p>
                            <p className="text-gray-900 font-bold text-lg mb-4">
                                ${product.price}
                            </p>

                            <Link href={`/products/${product._id}`}>
                                <button className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductPage; // এটা অবশ্যই default export হতে হবে
