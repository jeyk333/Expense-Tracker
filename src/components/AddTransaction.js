import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { Button, Input } from "antd";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(null);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    console.log("cool");
    const transaction = {
      id: Math.random(),
      text: text,
      amount: parseInt(amount)
    };
    addTransaction(transaction);
  };

  return (
    <div>
      <h3 className="newTransaction">Add New Expense </h3>
      <div className="form-control">
        <Input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter title..."
        />
      </div>
      <div className="form-control">
        <Input
          prefix="₹"
          suffix="INR"
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder="Enter amount..."
        />
      </div>
      <Button
        onClick={onSubmit}
        type="primary"
        className="button"
        disabled={!(text !== "" && amount !== null)}
      >
        Add
      </Button>
    </div>
  );
}

export default AddTransaction;
