import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/router";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const router = useRouter();
  if (req.method === "POST") {
    const { name, created_by } = req.body;

    console.log("!user?.session?.user?", req.body);
    const { data, error } = await supabase
      .from("groups")
      .insert({ name: name, created_by });

    if (error) return res.status(500).json(error);
    return res.status(201).json(data);
  }
}
