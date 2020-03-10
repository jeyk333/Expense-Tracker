import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { Card } from "antd";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <Card>
      <div className="incExp">
        <div>
          <h4>Income</h4>
          <h3>{income}</h3>
        </div>
        <div>
          <h4>Expense</h4>
          <h3>{expense}</h3>
        </div>
      </div>
    </Card>
  );
}

export default IncomeExpenses;
