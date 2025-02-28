import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";
type Group = {
  id: string; // Assuming it's a UUID or string ID
  name: string;
  user_id: string; // ID of the user who created the group
  created_at?: string; // Optional timestamp
};

export default function Dashboard() {
  const [groups, setGroups] = useState<Group[] | null>([]);
  const router = useRouter();
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    const fetchGroups = async () => {
      // Get the authenticated user
      const { data: userData, error } = await supabase.auth.getUser();
      if (error || !userData?.user) {
        router.push("/"); // Redirect to login if not authenticated
        return;
      }
      // Fetch additional user details from the "users" table
      const { data: user } = await supabase.auth.getSession();

      console.log("session", user?.session?.user?.user_metadata?.email);
      if (!user?.session?.user?.user_metadata?.email) {
        router.push("/");
      }
      setUser(user?.session?.user?.user_metadata || {});

      const { data }: any = await supabase.from("groups").select("*");
      setGroups(data || []);
    };
    fetchGroups();
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-[50%] flex flex-col gap-2 mt-10 p-6 bg-white shadow-lg rounded-xl">
        <span>{user?.email}</span>
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Your Groups
        </h1>
        <div className="space-y-4 flex flex-col gap-3">
          {groups?.map((group) => (
            <div
              key={group.id}
              onClick={() => router.push(`/groups/${group.id}`)}
              className="p-4 bg-gray-100 rounded-lg shadow-sm cursor-pointer hover:bg-blue-100 transition border border-gray-300"
            >
              <p className="text-lg font-medium text-gray-800">{group.name}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => router.push("/groups")}
          className="mt-3 p-2 bg-green-400 cursor-pointer"
        >
          Create new Group
        </button>
      </div>
    </div>
  );
}
