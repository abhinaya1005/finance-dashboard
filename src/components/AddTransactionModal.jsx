import { useState } from "react";
import { useFinance } from "../context/FinanceContext";

const AddTransactionModal = ({ isOpen, onClose }) => {
  const { addTransaction } = useFinance();

  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense",
    date: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      ...form,
      amount: Number(form.amount),
      id: Date.now(), // optional but useful
    };

    console.log("ADDING:", newTransaction);

    addTransaction(newTransaction);

    // reset form (optional but nice UX)
    setForm({
      amount: "",
      category: "",
      type: "expense",
      date: "",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/30">
      <div className="bg-white p-6 rounded w-80 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add Transaction</h2>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">

            <input
              type="number"
              placeholder="Amount"
              required
              value={form.amount}
              onChange={(e) =>
                setForm({ ...form, amount: e.target.value })
              }
              className="border p-2 rounded"
            />

            <input
              type="text"
              placeholder="Category"
              required
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
              className="border p-2 rounded"
            />

            <select
              value={form.type}
              onChange={(e) =>
                setForm({ ...form, type: e.target.value })
              }
              className="border p-2 rounded"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>

            <input
              type="date"
              required
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
              className="border p-2 rounded"
            />

            {/* ✅ CLEAN BUTTON */}
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Add
            </button>

          </div>
        </form>

        <button
          onClick={onClose}
          className="mt-3 text-sm text-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddTransactionModal;