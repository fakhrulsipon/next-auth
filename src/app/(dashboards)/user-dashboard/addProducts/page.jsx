"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
    FaTag,
    FaDollarSign,
    FaBoxes,
    FaLayerGroup,
    FaImage,
    FaAlignLeft,
} from "react-icons/fa";

const AddProductUI = () => {
    const router = useRouter();
    const [form, setForm] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
        stock: "",
        image: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null); // { type: 'success' | 'error', text: string }
    const [redirect, setRedirect] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setLoading(true);

        try {
            const payload = {
                ...form,
                price: Number(form.price),
                stock: Number(form.stock),
            };

            const res = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data?.message || "Failed to add product");
                return;
            }
            toast.success("✅ Product added successfully!");

            setForm({
                name: "",
                price: "",
                description: "",
                category: "",
                stock: "",
                image: "",
            });
            setRedirect(true);
        } catch (err) {
            console.error(err);
            toast.error("Failed to add product");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (redirect) {
            router.push("/products");
        }
    }, [redirect, router]);

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-3xl rounded-3xl lg:p-10 transform transition duration-500">
                <h1 className="md:text-3xl text-2xl font-semibold mb-6 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                    Add New Product
                </h1>

                {/* Message */}
                {message && (
                    <div
                        className={`mb-6 rounded-xl border p-3 text-sm ${message.type === "success"
                            ? "bg-green-50 border-green-200 text-green-700"
                            : "bg-red-50 border-red-200 text-red-700"
                            }`}
                    >
                        {message.text}
                    </div>
                )}

                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    {/* Product Name */}
                    <div className="flex flex-col">
                        <label className="flex items-center gap-2 font-semibold text-gray-700 mb-2">
                            <FaTag className="text-blue-500" /> Product Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter product name"
                            value={form.name}
                            onChange={handleChange}
                            className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 placeholder-gray-400"
                            required
                        />
                    </div>

                    {/* Price */}
                    <div className="flex flex-col">
                        <label className="flex items-center gap-2 font-semibold text-gray-700 mb-2">
                            <FaDollarSign className="text-green-500" /> Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Enter price"
                            value={form.price}
                            onChange={handleChange}
                            className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 placeholder-gray-400"
                            required
                            min="0"
                            step="0.01"
                        />
                    </div>

                    {/* Category */}
                    <div className="flex flex-col">
                        <label className="flex items-center gap-2 font-semibold text-gray-700 mb-2">
                            <FaLayerGroup className="text-purple-500" /> Category
                        </label>
                        <input
                            type="text"
                            name="category"
                            placeholder="Enter category"
                            value={form.category}
                            onChange={handleChange}
                            className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 placeholder-gray-400"
                            required
                        />
                    </div>

                    {/* Stock */}
                    <div className="flex flex-col">
                        <label className="flex items-center gap-2 font-semibold text-gray-700 mb-2">
                            <FaBoxes className="text-orange-500" /> Stock Quantity
                        </label>
                        <input
                            type="number"
                            name="stock"
                            placeholder="Enter stock quantity"
                            value={form.stock}
                            onChange={handleChange}
                            className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 placeholder-gray-400"
                            required
                            min="0"
                            step="1"
                        />
                    </div>

                    {/* Image URL */}
                    <div className="flex flex-col">
                        <label className="flex items-center gap-2 font-semibold text-gray-700 mb-2">
                            <FaImage className="text-pink-500" /> Image URL
                        </label>
                        <input
                            type="text"
                            name="image"
                            placeholder="Enter image URL"
                            value={form.image}
                            onChange={handleChange}
                            className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 placeholder-gray-400"
                        />
                    </div>

                    {/* Description */}
                    <div className="flex flex-col">
                        <label className="flex items-center gap-2 font-semibold text-gray-700 mb-2">
                            <FaAlignLeft className="text-blue-700" /> Product Description
                        </label>
                        <textarea
                            name="description"
                            placeholder="Enter product description"
                            value={form.description}
                            onChange={handleChange}
                            className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 placeholder-gray-400"
                            rows={5}
                            required
                        />
                    </div>

                    <div className="flex justify-center items-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`bg-gradient-to-r w-40 from-blue-500 to-purple-600 text-white p-4 rounded-xl font-bold shadow-lg transition-all duration-300 transform ${loading
                                ? "opacity-60 cursor-not-allowed"
                                : "hover:from-purple-600 hover:to-pink-500"
                                }`}
                        >
                            {loading ? "Adding..." : "Add Product"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductUI;
