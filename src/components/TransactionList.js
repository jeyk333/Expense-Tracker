import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

import { Card } from "antd";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  return (
    <Card>
      <h3>Expenses</h3>
      <div>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </Card>
  );
}

export default TransactionList;
