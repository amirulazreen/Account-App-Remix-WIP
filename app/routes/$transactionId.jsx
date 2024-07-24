import { Link, useLoaderData, json } from "@remix-run/react";
import { getTransactions } from "../data/Transaction";
import GeneralLedgerLink from "../styles/GeneralLedger.css";

export default function NoteDetail() {
  const transaction = useLoaderData();

  return (
    <>
      <div className="transaction">
        <header>
          <ul className="transaction-detail">
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
      </div>
      <nav className="back-button">
        <Link to={"/account"}>Back to app</Link>
      </nav>
    </>
  );
}

export async function loader({ params }) {
  const notes = await getTransactions();
  const noteID = params.transactionId;
  const selectedNote = notes.find((note) => note.id === noteID);

  if (!selectedNote) {
    throw json({ message: "Could not find " + noteID }, { status: 404 });
  }
  return selectedNote;
}

export function links() {
  return [{ rel: "stylesheet", href: GeneralLedgerLink }];
}
