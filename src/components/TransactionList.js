import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  // instead of doing context.transactions
  // distructuring {transactions}

  return (
    <>
      <h3>History</h3>
      {
        //hello
      }
      <ul className="list">
        {transactions.map((transactionz) => (
          <Transaction key={transactionz.id} transactionz={transactionz} />
        ))}
      </ul>
    </>
  );
};
