export default function Stats({ items }) {
  const quantity = items.reduce((acc, item) => acc + item.quantity, 0);

  const packedItems = items
    .filter((item) => item.packed === true)
    .reduce((acc, item) => acc + item.quantity, 0);

  return (
    <footer className="stats">
      <em>
        You have {quantity} items on your list, and you already packed
        {packedItems} ({(packedItems / quantity) * 100}%)
      </em>
    </footer>
  );
}
