
import { useFinance } from "../context/FinanceContext";
import { PieChart, Pie, Cell } from "recharts";

export default function Charts() {
  const { transactions } = useFinance();

  const data = [
    { name: "Income", value: transactions.filter(t => t.type === "Income").reduce((a,b)=>a+b.amount,0) },
    { name: "Expense", value: transactions.filter(t => t.type === "Expense").reduce((a,b)=>a+b.amount,0) }
  ];

  return (
    <PieChart width={300} height={300}>
      <Pie data={data} dataKey="value">
        <Cell fill="green" />
        <Cell fill="red" />
      </Pie>
    </PieChart>
  );
}
