// function TrialBalance() {
//   const items = {
//     transactions: [
//       {
//         description: "Buy Car",
//         debitDetail: "Car",
//         debitAmount: "50000",
//         creditDetail: "Bank",
//         creditAmount: "-50000",
//         id: "2024-07-23T08:25:20.741Z",
//       },
//       {
//         description: "Pay eletric",
//         debitDetail: "Eletric",
//         debitAmount: "200",
//         creditDetail: "Bank",
//         creditAmount: "-200",
//         id: "2024-07-23T08:26:09.872Z",
//       },
//       {
//         description: "Sell Car",
//         debitDetail: "Bank",
//         debitAmount: "40000",
//         creditDetail: "Car",
//         creditAmount: "-40000",
//         id: "2024-07-23T08:26:09.872Z",
//       },
//     ],
//   };

//   const TBItem = {};

//   items.transactions.forEach((transaction) => {
//     const { debitDetail, creditDetail, debitAmount, creditAmount } =
//       transaction;

//     if (!TBItem[debitDetail]) {
//       TBItem[debitDetail] = 0;
//     }
//     TBItem[debitDetail] += parseFloat(debitAmount);

//     if (!TBItem[creditDetail]) {
//       TBItem[creditDetail] = 0;
//     }
//     TBItem[creditDetail] += parseFloat(creditAmount);
//   });

//   console.log(TBItem);

//   const TBItemEntries = Object.entries(TBItem);

//   return (
//     <div>
//       <ul>
//         {TBItemEntries.map(([key, value], index) => (
//           <li key={index}>
//             {key}: {value}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TrialBalance;

import "../styles/TrialBalance.css";
import React from "react";

function TrialBalance() {
  const items = {
    transactions: [
      {
        description: "Buy Car",
        debitDetail: "Car",
        debitAmount: "50000",
        creditDetail: "Bank",
        creditAmount: "-50000",
        id: "2024-07-23T08:25:20.741Z",
      },
      {
        description: "Pay electric",
        debitDetail: "Electric",
        debitAmount: "200",
        creditDetail: "Bank",
        creditAmount: "-200",
        id: "2024-07-23T08:26:09.872Z",
      },
      {
        description: "Sell Car",
        debitDetail: "Bank",
        debitAmount: "40000",
        creditDetail: "Car",
        creditAmount: "-40000",
        id: "2024-07-23T08:26:09.872Z",
      },
    ],
  };

  const TBItem = {};

  items.transactions.forEach((transaction) => {
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
