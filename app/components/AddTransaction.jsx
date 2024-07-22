import { Form, useNavigation, useActionData } from "@remix-run/react";

function AddTransaction() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div>
      <Form method="post" className="content-add">
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
