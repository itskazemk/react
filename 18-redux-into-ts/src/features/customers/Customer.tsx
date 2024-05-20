import { useSelector } from "react-redux";
import { InitialStateCustomer } from "./customerSlice";

function Customer() {
  const customer: InitialStateCustomer = useSelector(
    (store: any) => store.customer
  );
  return <h2>👋 Welcome, {customer.fullName}</h2>;
}

export default Customer;
