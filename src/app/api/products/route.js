// app/api/products/route.js
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb"; // যদি @ alias না থাকে, "../lib/mongodb" লিখো
// import clientPromise from "../../../lib/mongodb"; // <-- alias না থাকলে এই লাইন ব্যবহার করো

export const runtime = "nodejs"; // নিশ্চিত করি Node.js runtime

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, price, description, category, stock, image } = body || {};
    // Basic validation
    if (!name || !price || !description || !category || !stock) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB); // .env.local এ যেটা দিয়েছো

    const doc = {
      name: String(name).trim(),
      price: Number(price),
      description: String(description).trim(),
      category: String(category).trim(),
      stock: Number(stock),
      image: image ? String(image).trim() : "",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("products").insertOne(doc);

    return NextResponse.json(
      { ok: true, id: result.insertedId, message: "Product added" },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST /api/products error:", err);
    return NextResponse.json(
      { ok: false, message: "Server error" },
      { status: 500 }
    );
  }
}

// (ঐচ্ছিক) পরে লিস্ট দেখাতে কাজে লাগবে
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const products = await db
      .collection("products")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ ok: true, products }, { status: 200 });
  } catch (err) {
    console.error("GET /api/products error:", err);
    return NextResponse.json(
      { ok: false, message: "Server error" },
      { status: 500 }
    );
  }
}


