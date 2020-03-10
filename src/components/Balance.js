import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Card } from "antd";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Card>
          <h2>My Balance</h2>
          <h1>₹{total}</h1>
        </Card>
      </div>
    </>
  );
}

export default Balance;
