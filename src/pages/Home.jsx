// files
import useAuthContext from "../hooks/useAuthContext";
import TransactionForm from "../components/TransactionForm";
import useCollection from "../hooks/useCollection";
import TransactionItem from "../components/TransactionItem";

export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("transactions");

  const TransactionList =
    documents &&
    documents.map((transaction) => (
      <TransactionItem transaction={transaction} key={transaction.id} />
    ));

  return (
    <div className="container">
      <div className="content">
        {error && <p>{error}</p>}
        {!documents && <p>Waiting for transaction</p>}
        <ul className="transactions">{TransactionList}</ul>
      </div>
      <div className="sidebar">
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
