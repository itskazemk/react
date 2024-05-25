import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(1111111111, error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <h2>Status Code: {error.status}</h2>
      <h3>Status Text: {error.statusText}</h3>
      <h4 style={{ background: "#ff7b7b" }}>{error.data ?? error.message}</h4>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
