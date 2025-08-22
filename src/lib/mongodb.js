import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("❌ MONGODB_URI missing in .env.local");

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // dev: global cache করে রাখি যাতে HMR-এ বারবার নতুন কানেকশন না হয়
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // prod: একবার কানেক্ট করে নিই
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
