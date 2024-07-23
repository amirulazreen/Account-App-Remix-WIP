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
            <Link to={"/" + transaction.id}>
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
                  <li>{parseFloat(transaction.debitAmount).toFixed(2)}</li>
                </ul>
                <ul className="transaction-detail">
                  <li>{transaction.creditDetail}</li>
                  <li>{parseFloat(transaction.creditAmount).toFixed(2)}</li>
                </ul>
              </article>
            </Link>
          </li>
        ))}
      </ul>
      <div className="total">
        <h1>Total Debit || Credit</h1>
        <h1>RM {totalDebit}</h1>
      </div>
    </>
  );
}

export default NoteList;
