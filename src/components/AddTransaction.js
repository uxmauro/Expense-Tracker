import { React, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  const submitTrans = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      /* Adding a plus sign to amount because it return as a string. Adding the plus sign will return it as a number*/
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={submitTrans}>
        <div className="form-control">
          <label htmlFor="Text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text...."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn"> Add Transaction</button>
      </form>
    </>
  );
};
