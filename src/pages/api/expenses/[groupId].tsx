import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../lib/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { groupId } = req.query;

  if (req.method === "GET") {
    const { data, error } = await supabase
      .from("expenses")
      .select("*")
      .eq("group_id", groupId);
    if (error) return res.status(400).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const { description, amount, user_id } = req.body;

    console.log("user_id", user_id);
    const { data, error } = await supabase
      .from("expenses")
      .insert([{ description, amount, user_id, group_id: groupId }]);
    if (error) return res.status(400).json({ error: error.message });
    return res.status(201).json(data);
  }
}
