import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { Tag } from "antd";

function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <Tag
      closable
      className="expenseTags"
      color={transaction.amount < 0 ? "error" : "success"}
      onClose={() => deleteTransaction(transaction.id)}
    >
      {transaction.text} <span>₹{Math.abs(transaction.amount)}</span>
    </Tag>
  );
}

export default Transaction;
