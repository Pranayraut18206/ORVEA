import CartItemRow from "./CartItemRow";

export default function CartItemsList({ items, removeItem, changeQty, listRef, money }) {
  return (
    <div className="flex flex-col gap-3 mb-6">
      {items.map((item, index) => (
        <CartItemRow
          key={item.id}
          ref={(el) => (listRef.current[index] = el)}
          item={item}
          money={money}
          onRemove={() => removeItem(item.id)}
          onQtyChange={changeQty}
        />
      ))}
    </div>
  );
}
