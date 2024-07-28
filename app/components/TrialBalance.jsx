import "../styles/TrialBalance.css";
import React from "react";

function TrialBalance({ transactions }) {
  const TBItem = {};

  transactions.forEach((transaction) => {
    const { debitDetail, creditDetail, debitAmount, creditAmount } =
      transaction;

    if (!TBItem[debitDetail]) {
      TBItem[debitDetail] = 0;
    }
    TBItem[debitDetail] += parseFloat(debitAmount);

    if (!TBItem[creditDetail]) {
      TBItem[creditDetail] = 0;
    }
    TBItem[creditDetail] += parseFloat(creditAmount);
  });

  const TBItemEntries = Object.entries(TBItem);

  return (
    <div>
      <ul className="TB-container">
        {TBItemEntries.map(([category, total], index) => (
          <li className="TB-item" key={index}>
            <div>{category}</div>
            <div>{total}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrialBalance;
