
import { useFinance } from "../context/FinanceContext";

export default function SummaryCards() {
  const { transactions } = useFinance();

  const income = transactions.filter(t => t.type === "Income").reduce((a, b) => a + b.amount, 0);
  const expense = transactions.filter(t => t.type === "Expense").reduce((a, b) => a + b.amount, 0);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-green-200 p-4 rounded">Income: ₹{income}</div>
      <div className="bg-red-200 p-4 rounded">Expense: ₹{expense}</div>
    </div>
  );
}
