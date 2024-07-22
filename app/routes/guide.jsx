import TrialBalance from "../components/TrialBalance";
import { useLoaderData } from "@remix-run/react";
import { getStoredNotes } from "../data/Transaction";

export default function Test() {
  const transactions = useLoaderData();
  return <TrialBalance transaction={transactions} />;
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
