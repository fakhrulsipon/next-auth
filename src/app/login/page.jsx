"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
   <div className="pt-10">
     <div className="max-w-md mx-auto rounded-2xl p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Sign in</h1>

      <button
        onClick={() => signIn("google", { callbackUrl: "/products" })}
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-400 text-white px-4 py-3 hover:opacity-90"
      >
       <FcGoogle /> Continue with Google
      </button>

      <p className="text-center text-sm text-gray-500 mt-4">
        You’ll be redirected to /products after login.
      </p>
    </div>
   </div>
  );
}
