import "../styles/guide.css";

export default function guide() {
  return (
    <>
      <div className="guide-container">
        <div className="guide-content">
          <h1>Accounting Rules</h1>
          <p>Debit plus Credit must equal 0</p>
          <p>Asset = Liability + Equity</p>
        </div>
        <div className="guide-content">
          <h2>The Building Block</h2>
          <ul>
            <li>General Ledger</li>
            <li>Trial Balance</li>
            <li>Statement of Profit Loss</li>
            <li>Statement of Comprehensive Income</li>
          </ul>
        </div>
      </div>
    </>
  );
}
