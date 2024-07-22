import { Link } from "@remix-run/react";

function NoteList({ transactions }) {
  const debit = transactions.map((transaction) =>
    parseInt(transaction.debitAmount)
  );
  const totalDebit = debit.reduce((acc, item) => acc + item, 0).toFixed(2);

  return (
    <>
      {" "}
      <ul id="transaction-list">
        {transactions.map((transaction, index) => (
          <li key={transaction.id} className="transaction">
            <article>
              <header>
                <ul className="transaction-detail">
                  <li>{index + 1}</li>
                  <li>
                    <time dateTime={transaction.id}>
                      {new Date(transaction.id).toLocaleString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </li>
                </ul>
                <h2>{transaction.description}</h2>
              </header>
              <ul className="transaction-detail">
                <li>{transaction.debitDetail}</li>
                <li>
                  {parseFloat(
                    parseFloat(transaction.debitAmount).toFixed(2)
                  ).toLocaleString("en-US")}
                </li>
              </ul>
              <ul className="transaction-detail">
                <li>{transaction.creditDetail}</li>
                <li>
                  {parseFloat(
                    parseFloat(transaction.creditAmount).toFixed(2)
                  ).toLocaleString("en-US")}
                </li>
              </ul>
            </article>
          </li>
        ))}
      </ul>
      <div className="transaction-detail">
        <li>Total {totalDebit}</li>
        <li>{"-" + totalDebit}</li>
      </div>
    </>
  );
}

export default NoteList;
