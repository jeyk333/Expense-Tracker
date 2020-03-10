import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

import { Card } from "antd";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  const { deleteAllTransaction } = useContext(GlobalContext);
  const clearAll = () => {
    deleteAllTransaction();
  };
  return (
    <Card>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Expenses</h3>
        <h3 style={{ cursor: "pointer" }} onClick={clearAll}>
          Clear all
        </h3>
      </div>
      <div>
        {transactions.length > 0
          ? transactions.map(transaction => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))
          : "Please add expenses"}
      </div>
    </Card>
  );
}

export default TransactionList;
