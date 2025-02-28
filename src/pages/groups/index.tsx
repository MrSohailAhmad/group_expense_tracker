import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/router";

export default function NewGroup() {
  const [name, setName] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleCreateGroup = async () => {
    setLoading(true);
    const response = await supabase.from("groups").insert({ name: name });
    console.log("response", response);
    if (response.status === 201) {
      setLoading(true);
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Create Group
        </h1>
        <input
          type="text"
          placeholder="Group Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleCreateGroup}
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Creating group..." : " Create Group"}
        </button>
      </div>
    </div>
  );
}
