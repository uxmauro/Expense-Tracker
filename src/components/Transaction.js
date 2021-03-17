import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transactionz }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transactionz.amount < 0 ? "-" : "+";
  return (
    <li className={transactionz.amount < 0 ? "minus" : "plus"}>
      {transactionz.text}
      <span>
        {/* Math.abs = makes it into an absolute number which will make it positive*/}
        {sign} ${Math.abs(transactionz.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transactionz.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
