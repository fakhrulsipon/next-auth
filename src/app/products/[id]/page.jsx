"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const ProductDetails = () => {
    const params = useParams();
    const id = params.id;
    const router = useRouter();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`/api/products/${id}`);
                if (!res.ok) {
                    throw new Error("Product not found");
                }
                const data = await res.json();
                setProduct(data.product);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading)
        return (
            <div className="flex justify-center items-center h-64">
                <div className="h-10 w-10 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dashed border-sky-600"></div>;
            </div>
        );

    if (error)
        return (
            <div className="flex justify-center items-center h-screen text-red-500 font-bold">
                {error}
            </div>
        );

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8">
            <button
                onClick={() => router.push("/products")}
                className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full transition"
            >
                &larr; Back to Products
            </button>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white shadow-lg rounded-xl p-6 md:p-10">
                {/* Product Image */}
                <div className="flex-shrink-0">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-80 h-80 object-cover rounded-xl shadow-md"
                    />
                </div>

                {/* Product Info */}
                <div className="flex-1 space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
                    <p className="text-gray-600 text-lg">{product.description}</p>
                    <p className="text-xl font-semibold">
                        Price: <span className="text-green-600">${product.price}</span>
                    </p>
                    <p className="text-gray-700">Category: {product.category}</p>
                    <p className="text-gray-700">
                        Stock:{" "}
                        <span className={product.stock > 0 ? "text-green-600" : "text-red-500"}>
                            {product.stock}
                        </span>
                    </p>

                    <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
