import TransactionForm from "../components/TransactionForm";

export default function Home() {
  return (
    <div className="container">
      <div className="content">Transaction list</div>
      <div className="sidebar">
        <TransactionForm />
      </div>
    </div>
  );
}
