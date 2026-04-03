import SummaryCards from "./components/SummaryCards";
import Charts from "./components/Charts";
import TransactionsTable from "./components/TransactionsTable";
import RoleSwitcher from "./components/RoleSwitcher";
import AddTransactionModal from "./components/AddTransactionModal";
import { useState } from "react";
import { useFinance } from "./context/FinanceContext";

function App() {
  const { role } = useFinance(); // ✅ INSIDE component
  const [open, setOpen] = useState(false); // ✅ INSIDE

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-4">
        Finance Dashboard 🚀
      </h1>

      <RoleSwitcher />

      {/* ✅ BUTTON */}
      {role === "admin" && (
        <button
          onClick={() => {
            console.log("OPEN MODAL");
            setOpen(true);
          }}
          className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        >
          + Add Transaction
        </button>
      )}

      <SummaryCards />

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <Charts />
        <TransactionsTable />
      </div>

      {/* ✅ MODAL */}
      <AddTransactionModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

export default App;