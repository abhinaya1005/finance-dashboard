import { useFinance } from "../context/FinanceContext";
import { useState } from "react";

export default function TransactionsTable() {
  const { transactions } = useFinance();

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // ✅ COMBINED FILTER LOGIC
  const filteredTransactions = transactions.filter((t) => {
    const matchesFilter =
      filter === "all" || t.type === filter;

    const matchesSearch =
      t.category.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      {/* ✅ FILTER + SEARCH */}
      <div className="flex gap-3 mb-3">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input
          type="text"
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      {/* ✅ EMPTY STATE */}
      {filteredTransactions.length === 0 ? (
        <p className="text-gray-500">No transactions found</p>
      ) : (
        <table className="w-full bg-white rounded">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.map((t) => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>{t.category}</td>
                <td>{t.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}