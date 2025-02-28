import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name } = req.body;
    const { data, error } = await supabase.from("groups").insert({ name });

    if (error) return res.status(500).json(error);
    return res.status(201).json(data);
  }
}
