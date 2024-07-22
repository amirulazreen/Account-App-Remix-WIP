import AddTransaction from "../components/AddTransaction";
import AddTransactionLink from "../styles/AddTransaction.css";
import GeneralLedgerLink from "../styles/GeneralLedger.css";
import GeneralLedger from "../components/GeneralLedger";
import { getStoredNotes, storeNotes } from "../data/Transaction";
import { redirect, useLoaderData } from "@remix-run/react";

export default function account() {
  const transactions = useLoaderData();
  return (
    <>
      <AddTransaction />
      <GeneralLedger transactions={transactions} />
    </>
  );
}

export function links() {
  return [
    { rel: "stylesheet", href: AddTransactionLink },
    { rel: "stylesheet", href: GeneralLedgerLink },
  ];
}

export async function loader() {
  const transactions = await getStoredNotes();
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
  const noteData = Object.fromEntries(formData);

  const debit = parseInt(noteData.debitAmount);
  const credit = parseInt(noteData.creditAmount);

  if (debit + credit !== 0) {
    return { message: "debit plus credit amount must equal 0" };
  }

  noteData.id = new Date().toISOString();
  const existingNote = await getStoredNotes();
  const updatedNotes = existingNote.concat(noteData);
  await storeNotes(updatedNotes);
  return redirect("/account");
}
