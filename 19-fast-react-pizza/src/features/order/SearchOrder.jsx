import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Order Id #"
        type="text"
        value={query}
        onInput={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-yellow-100 py-2 text-center text-sm transition-all duration-300 placeholder:text-stone-400 focus:w-32 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
