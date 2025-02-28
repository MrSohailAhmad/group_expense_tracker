import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/router";

export default function GroupExpenses() {
  const router = useRouter();
  const { groupId } = router.query;
  const [expenses, setExpenses] = useState<any>([]);

  useEffect(() => {
    if (!groupId) return;
    const fetchExpenses = async () => {
      const { data } = await supabase
        .from("expenses")
        .select("*")
        .eq("group_id", groupId);
      setExpenses(data || []);
    };
    fetchExpenses();
  }, [groupId]);

  return (
    <div>
      <h1>Expenses</h1>
      {expenses.map((expense: any) => (
        <div key={expense.id}>
          {expense.description}: ${expense.amount}
        </div>
      ))}
    </div>
  );
}
