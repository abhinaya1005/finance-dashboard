import { createContext, useContext, useState } from "react";
import { mockTransactions } from "../data/mockData";

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(mockTransactions);

  // ✅ SINGLE correct function
  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [
      ...prev,
      {
        id: Date.now(),
        amount: Number(newTransaction.amount),
        category: newTransaction.category,
        type: newTransaction.type,
        date: newTransaction.date,
      },
    ]);
  };

  // 🔥 Role state
  const [role, setRole] = useState("viewer");

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        setTransactions,
        role,
        setRole,
        addTransaction,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => useContext(FinanceContext);