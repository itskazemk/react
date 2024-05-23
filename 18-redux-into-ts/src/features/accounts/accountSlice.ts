export interface InitialStateAccount {
  balance: number;
  loan: number;
  loanPurpose: string;
  isLoading: boolean;
}

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

export default function accountReducer(
  state: InitialStateAccount = initialStateAccount,
  action
) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "account/requestLoan":
      if (state.loan > 0) return { ...state };
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    case "account/isLoading":
      return { ...state, isLoading: true };

    default:
      return state;
  }
}

export function deposit(amount: number, currency: string) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async (dispatch, getState) => {
    // API call
    dispatch({ type: "account/isLoading" });
    const host = "api.frankfurter.app";
    const respose = await fetch(
      `https://${host}/latest?amount=${amount}}&from=${currency}&to=USD`
    );
    const data = await respose.json();
    const converted = data.rates.USD;

    // return action
    dispatch({ type: "account/deposit", payload: converted });
  };
}
export function withdraw(amount: number) {
  return { type: "account/withdraw", payload: amount };
}
export function requestLoan(amount: number, purpose: string) {
  return {
    type: "account/requestLoan",
    payload: { amount: amount, purpose: purpose },
  };
}
export function payLoan() {
  return {
    type: "account/payLoan",
  };
}
