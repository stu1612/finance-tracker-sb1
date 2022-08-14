// files
import useAuthContext from "../hooks/useAuthContext";
import TransactionForm from "../components/TransactionForm";

export default function Home() {
  const { user } = useAuthContext();
  return (
    <div className="container">
      <div className="content">Transaction list</div>
      <div className="sidebar">
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
