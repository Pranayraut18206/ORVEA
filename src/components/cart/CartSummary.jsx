import { Link } from "react-router-dom";

export default function CartSummary({
  subtotal,
  discountPct,
  discount,
  shipping,
  shipPct,
  toFreeShip,
  total,
  money,
  onProceed,
}) {
  return (
    <div className="w-full lg:w-80 shrink-0 lg:sticky" style={{ top: "88px" }}>
      <div className="rounded-2xl overflow-hidden" style={{ background: "#fff", border: "1px solid #e0dcd0" }}>
        <div className="px-6 py-5" style={{ borderBottom: "1px solid #e0dcd0" }}>
          <p className="font-black text-base" style={{ fontFamily: "font5", color: "#1c1d0e" }}>
            Order Summary
          </p>
        </div>

        <div className="px-6 py-5">
          <div className="flex justify-between text-sm mb-2" style={{ color: "#5a5a40" }}>
            <span>Subtotal</span>
            <span>{money(subtotal)}</span>
          </div>

          {discountPct > 0 && (
            <div className="flex justify-between text-sm mb-2 font-medium" style={{ color: "#3a6a30" }}>
              <span>Discount ({discountPct}%)</span>
              <span>−{money(discount)}</span>
            </div>
          )}

          <div className="flex justify-between text-sm mb-5" style={{ color: "#5a5a40" }}>
            <span>Shipping</span>
            <span
              style={{
                color: shipping === 0 ? "#3a6a30" : "#1c1d0e",
                fontWeight: shipping === 0 ? "600" : "400",
              }}
            >
              {shipping === 0 ? "Free 🎉" : money(shipping)}
            </span>
          </div>

          <div className="rounded-full overflow-hidden mb-2" style={{ height: "4px", background: "#f0ece0" }}>
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${shipPct}%`, background: shipPct >= 100 ? "#4a7c59" : "#1c1d0e" }}
            />
          </div>
          <p className="text-xs text-center mb-5" style={{ color: shipPct >= 100 ? "#3a6a30" : "#8a8a6a" }}>
            {shipPct >= 100
              ? "You've unlocked free shipping!"
              : `Add ${money(toFreeShip)} more for free shipping`}
          </p>

          <div
            className="flex justify-between font-black text-lg pt-4 mb-5"
            style={{
              borderTop: "1px solid #e0dcd0",
              color: "#1c1d0e",
              fontFamily: "font5",
            }}
          >
            <span>Total</span>
            <span>{money(total)}</span>
          </div>

          <button
            onClick={onProceed}
            className="w-full py-4 rounded-full font-bold text-sm tracking-wide hover:opacity-80 transition-opacity mb-2"
            style={{ background: "#1c1d0e", color: "#f0ece0" }}
          >
            Proceed to Checkout →
          </button>

          <p className="text-center text-xs" style={{ color: "#8a8a6a" }}>
            🔒 Secure checkout · Ships in 1–2 days
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 px-5 pb-5">
          {[
            ["💧", "Swiss Water"],
            ["♻️", "Eco Packaging"],
            ["🚚", "Ships 1–2 days"],
            ["💰", "30-day returns"],
          ].map(([icon, label]) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium"
              style={{ background: "#f0ece0", color: "#5a5a40" }}
            >
              <span>{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <Link
        to="/shop"
        className="block text-center text-sm mt-4 transition-opacity hover:opacity-60"
        style={{
          color: "#8a8a6a",
          textDecoration: "underline",
          textUnderlineOffset: "3px",
        }}
      >
        ← Continue Shopping
      </Link>
    </div>
  );
}
