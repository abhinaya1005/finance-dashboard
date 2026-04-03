import { useFinance } from "../context/FinanceContext";

const RoleSwitcher = () => {
  const { role, setRole } = useFinance();

  return (
    <div className="flex items-center gap-3 mb-4">
      <label className="font-medium">Role:</label>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border px-3 py-1 rounded"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default RoleSwitcher;