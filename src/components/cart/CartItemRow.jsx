import { forwardRef } from "react";

const CartItemRow = forwardRef(function CartItemRow(
  { item, money, onRemove, onQtyChange },
  ref
) {
  return (
    <div
      ref={ref}
      className="flex items-center gap-4 rounded-2xl p-4"
      style={{ background: "#fff", border: "1px solid #e0dcd0" }}
    >
      <div
        className="w-20 h-20 rounded-xl flex-shrink-0 overflow-hidden flex items-center justify-center"
        style={{ background: "#1c1d0e" }}
      >
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-contain p-2"
        />
      </div>

      <div className="flex-1 min-w-0">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-0.5"
          style={{ color: "#8a8a6a" }}
        >
          {item.badge}
        </p>
        <p
          className="text-lg font-black truncate"
          style={{ fontFamily: "font5", color: "#1c1d0e" }}
        >
          {item.name}
        </p>
        <p className="text-xs mt-0.5" style={{ color: "#8a8a6a" }}>
          {item.roast}
        </p>
        <p className="font-bold mt-1.5 text-sm" style={{ color: "#1c1d0e" }}>
          {money(item.price * item.qty)}
          {item.qty > 1 && (
            <span className="font-normal ml-2" style={{ color: "#8a8a6a" }}>
              ({money(item.price)} each)
            </span>
          )}
        </p>
      </div>

      <div className="flex flex-col items-end gap-3 flex-shrink-0">
        <button
          onClick={onRemove}
          className="leading-none transition-colors"
          style={{ color: "#c8c0b4", fontSize: "15px" }}
          onMouseEnter={(e) => (e.target.style.color = "#c04830")}
          onMouseLeave={(e) => (e.target.style.color = "#c8c0b4")}
          aria-label={`Remove ${item.name}`}
        >
          ✕
        </button>

        <div
          className="flex items-center gap-2 rounded-full px-3 py-1.5"
          style={{ background: "#f0ece0" }}
        >
          <button
            onClick={() => onQtyChange(item.id, -1)}
            disabled={item.qty <= 1}
            className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm transition-colors"
            style={{ color: item.qty <= 1 ? "#c8c0b4" : "#1c1d0e" }}
          >
            −
          </button>
          <span
            className="text-sm font-black w-4 text-center"
            style={{ color: "#1c1d0e" }}
          >
            {item.qty}
          </span>
          <button
            onClick={() => onQtyChange(item.id, 1)}
            className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm transition-colors hover:bg-white"
            style={{ color: "#1c1d0e" }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
});

export default CartItemRow;
