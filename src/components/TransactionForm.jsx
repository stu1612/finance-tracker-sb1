// npm
import { useState } from "react";

// files
import InputField from "./InputField";
import form from "../data/transactionForm.json";

export default function TransactionForm() {
  // local state
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  // methods
  function handleSubmit(event) {
    event.preventDefault();
    console.log({ name, amount });
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
