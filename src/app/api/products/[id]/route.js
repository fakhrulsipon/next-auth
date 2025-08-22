import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export const runtime = "nodejs";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) });

    if (!product) {
      return NextResponse.json({ ok: false, message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ ok: true, product }, { status: 200 });
  } catch (err) {
    console.error("GET /api/products/[id] error:", err);
    return NextResponse.json({ ok: false, message: "Server error" }, { status: 500 });
  }
}
