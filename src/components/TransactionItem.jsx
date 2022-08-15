import React from "react";

export default function TransactionItem({ transaction }) {
  const { name, amount } = transaction;
  return (
    <li>
      <p className="name">{name}</p>
      <p className="amount">$ {amount}</p>
    </li>
  );
}
