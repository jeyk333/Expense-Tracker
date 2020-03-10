import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Card } from "antd";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <div className="site-card-wrapper">
        <Card>
          <h1>My Balance</h1>
          <p>${total}</p>
        </Card>
      </div>
    </>
  );
}

export default Balance;
