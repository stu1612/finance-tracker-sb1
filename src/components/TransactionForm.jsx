// npm
import { useState } from "react";

// files
import useCollection from "../hooks/useCollection";
import InputField from "./InputField";
import form from "../data/transactionForm.json";

export default function TransactionForm({ uid }) {
  // local state
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const { addDocument, response } = useCollection("transactions");

  // methods
  function handleSubmit(event) {
    event.preventDefault();
    addDocument({ uid, name, amount });
  }

  return (
    <>
      <h1>Add a transaction</h1>
      <form onSubmit={handleSubmit}>
        <InputField setup={form.name} state={[name, setName]} />
        <InputField setup={form.amount} state={[amount, setAmount]} />
        <button>Add transaction</button>
      </form>
    </>
  );
}
