import fs from "fs/promises";

export async function getTransactions() {
  const rawFileContent = await fs.readFile("transactions.json", {
    encoding: "utf-8",
  });
  const data = JSON.parse(rawFileContent);
  const storedTransactions = data.transactions ?? [];
  return storedTransactions;
}

export function storeTransaction(transactions) {
  return fs.writeFile(
    "transactions.json",
    JSON.stringify({ transactions: transactions || [] })
  );
}
