import { Form, useNavigation, useActionData } from "@remix-run/react";

function AddTransaction() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const data = useActionData();

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
        description: "Pay eletric",
        debitDetail: "Eletric",
        debitAmount: "200",
        creditDetail: "Bank",
        creditAmount: "-200",
        id: "2024-07-23T08:26:09.872Z",
      },
    ],
  };

  const groupedDetails = {
    debitDetails: {},
    creditDetails: {},
  };

  const parseAmount = (amount) => parseFloat(amount.replace(/[^0-9.-]+/g, ""));

  items.transactions.forEach((transaction) => {
    const { debitDetail, creditDetail, debitAmount, creditAmount } =
      transaction;

    if (!groupedDetails.debitDetails[debitDetail]) {
      groupedDetails.debitDetails[debitDetail] = 0;
    }
    groupedDetails.debitDetails[debitDetail] += parseAmount(debitAmount);

    if (!groupedDetails.creditDetails[creditDetail]) {
      groupedDetails.creditDetails[creditDetail] = 0;
    }
    groupedDetails.creditDetails[creditDetail] += parseAmount(creditAmount);
  });

  console.log(groupedDetails);

  return (
    <div>
      <Form method="post" className="content-add">
        {data?.message && <p>{data.message}</p>}
        <h1 className="add-title">New Transaction</h1>
        <label htmlFor="description">Description</label>
        <p>
          <input
            type="text"
            name="description"
            className="description"
            required
          />
        </p>
        <label htmlFor="debitDetail">Debit</label>
        <p>
          <input
            type="text"
            name="debitDetail"
            className="debitDetail"
            required
          />
          <input
            type="number"
            min="1"
            name="debitAmount"
            id="debitAmount"
            required
          />
        </p>
        <label htmlFor="creditDetail">Credit</label>
        <p>
          <input
            type="text"
            name="creditDetail"
            className="creditDetail"
            required
          />
          <input
            type="number"
            max="-1"
            name="creditAmount"
            className="creditAmount"
            required
          />
        </p>
        <div className="button-submit-content">
          <button className="button-submit-text" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Add Transaction"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AddTransaction;
