import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/router";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleAuth = async (isSignUp: boolean) => {
    const { data, error } = isSignUp
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password });
    console.log("user?.session?.user?", error?.code);
    if (error?.code) {
      setMessage(error?.message);
    }
    if (!error) router.push("/dashboard");
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Welcome
        </h1>

        <input
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          className="w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {message && (
          <span className="text-red-500 text-center my-3 w-full">
            {message} please confirm your email
          </span>
        )}
        <button
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300"
          onClick={() => handleAuth(false)}
        >
          Login
        </button>

        <button
          className="w-full p-3 bg-green-500 text-white font-semibold rounded-md mt-4 hover:bg-green-600 transition-all duration-300"
          onClick={() => handleAuth(true)}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
