import { useSelector } from "react-redux";
import { InitialStateAccount } from "./accountSlice";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const account: InitialStateAccount = useSelector(
    (state: any) => state.account
  );
  return (
    <>
      <div className="balance">{formatCurrency(account.balance)}</div>
      {account.loan > 0 ? (
        <div style={{ position: "absolute", top: "1px", right: "2px" }}>
          {account.loan}-{account.loanPurpose}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default BalanceDisplay;
