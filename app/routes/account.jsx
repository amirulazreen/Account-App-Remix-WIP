import AddTransaction from "../components/AddTransaction";
import "../styles/AddTransaction.css";
import "../styles/GeneralLedger.css";
import GeneralLedger from "../components/GeneralLedger";
import { getTransactions, storeTransaction } from "../data/Transaction";
import {
  redirect,
  useLoaderData,
  Link,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";

console.log("haha");

export default function account() {
  const transactions = useLoaderData();
  return (
    <>
      <AddTransaction />
      <GeneralLedger transactions={transactions} />
    </>
  );
}

export async function loader() {
  const transactions = await getTransactions();
  if (!transactions || transactions.length === 0) {
    throw json(
      { message: "Could not find any transaction" },
      {
        status: 404,
        statusText: "Not Found",
      }
    );
  }
  return transactions;
}

export async function action({ request }) {
  const formData = await request.formData();
  const transactionData = Object.fromEntries(formData);

  const debit = parseInt(transactionData.debitAmount);
  const credit = parseInt(transactionData.creditAmount);

  if (debit + credit !== 0) {
    return { message: "debit plus credit amount must equal 0" };
  }

  transactionData.id = new Date().toISOString();
  const existingNote = await getTransactions();
  const updatedTransactions = existingNote.concat(transactionData);
  await storeTransaction(updatedTransactions);
  return redirect("/account");
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <main>
        <NewNote />
        <p className="info-message">{error.data.message}</p>
      </main>
    );
  } else if (error instanceof Error) {
    return (
      <main className="error">
        <h1>Cannot fetch data from server</h1>
        <p>
          <Link to={"/"}>Back to safety</Link>
        </p>
      </main>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
