import { createStore } from "redux";

interface initialState {
  balance: number;
  loan: number;
  loanPurpose: string;
}

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(
  state: initialState = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "account/requestLoan":
      if (state.loan > 0) return { ...state };
      // TODO
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({ type: "account/deposit", payload: 500 });

console.log(store.getState());
store.dispatch({ type: "account/withdraw", payload: 200 });
console.log(store.getState());
store.dispatch({
  type: "account/requestLoan",
  payload: { amount: 1000, purpose: "buy a car" },
});
console.log(store.getState());
