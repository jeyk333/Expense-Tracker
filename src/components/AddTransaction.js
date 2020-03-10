import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { Button, Input } from "antd";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const transaction = {
      id: Math.random(),
      text: text,
      amount: parseInt(amount)
    };
    addTransaction(transaction);
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <Input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <Input
            prefix="₹"
            suffix="INR"
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <Button type="primary">Add transaction</Button>
      </form>
    </div>
  );
}

export default AddTransaction;
