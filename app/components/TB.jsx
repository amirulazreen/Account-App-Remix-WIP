function TrialBalance({ transaction }) {
  const TBItem = {};

  items.transactions.forEach((transaction) => {
    const { debitDetail, creditDetail, debitAmount, creditAmount } =
      transaction;

    if (!TBItem[debitDetail]) {
      TBItem[debitDetail] = 0;
    }
    TBItem[debitDetail] += parseInt(debitAmount);

    if (!TBItem[creditDetail]) {
      TBItem[creditDetail] = 0;
    }
    TBItem[creditDetail] += parseInt(creditAmount);
  });

  return (
    <>
      <div>
        <ul>
          {TBItem.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TB;
