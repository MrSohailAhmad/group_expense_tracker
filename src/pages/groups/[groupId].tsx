import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
type Expense = {
  id: string;
  description: string;
  amount: number;
  group_id: string;
  created_at?: string; // Optional timestamp
};
export default function GroupExpenses() {
  const router = useRouter();
  const { groupId } = router.query;
  const [expenses, setExpenses] = useState<Expense[] | null>([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  type Expense = {
    id: string;
    description: string;
    amount: number;
    group_id: string;
    created_at?: string; // Optional timestamp
  };

  useEffect(() => {
    async function fetchExpenses() {
      const { data }: any = await supabase
        .from("expenses")
        .select("*")
        .eq("group_id", groupId);
      setExpenses(data || []);
    }
    fetchExpenses();
  }, [groupId]);

  const addExpense = async () => {
    await fetch(`/api/expenses/${groupId}`, {
      method: "POST",
      body: JSON.stringify({ description, amount }),
      headers: { "Content-Type": "application/json" },
    });
    setDescription("");
    setAmount("");
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-[50%] p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
          Group Expenses
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Expense Description"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addExpense}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Expense
          </button>
        </div>
        <ul className="mt-6 space-y-2">
          {expenses?.map((e) => (
            <li
              key={e.id}
              className="p-3 bg-gray-100 rounded-lg flex justify-between"
            >
              <span className="font-medium text-gray-800">{e.description}</span>
              <span className="text-blue-600 font-semibold">${e.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
