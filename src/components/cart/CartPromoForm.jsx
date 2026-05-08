export default function CartPromoForm({ promoInput, promoMsg, setPromoInput, handlePromo }) {
  return (
    <>
      <div
        className="rounded-2xl p-4 mb-1.5"
        style={{ background: "#fff", border: "1px solid #e0dcd0" }}
      >
        <div className="flex gap-3 items-center">
          <span style={{ color: "#8a8a6a", fontSize: "15px" }}>🏷</span>
          <input
            type="text"
            placeholder="PROMO CODE"
            value={promoInput}
            onChange={(e) => setPromoInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handlePromo()}
            disabled={promoMsg?.ok}
            className="flex-1 bg-transparent outline-none text-sm"
            style={{
              color: "#1c1d0e",
              letterSpacing: promoInput ? "0.08em" : "0",
              fontFamily: "inherit",
            }}
          />
          {!promoMsg?.ok ? (
            <button
              onClick={handlePromo}
              className="text-xs font-bold px-4 py-2 rounded-xl hover:opacity-80 transition-opacity"
              style={{ background: "#1c1d0e", color: "#f0ece0" }}
            >
              Apply
            </button>
          ) : (
            <span
              className="text-xs font-bold px-3 py-1.5 rounded-xl"
              style={{ background: "#e8f3e5", color: "#3a6a30" }}
            >
              ✓ Applied
            </span>
          )}
        </div>
      </div>

      {promoMsg && (
        <p className="text-xs px-1 mb-8" style={{ color: promoMsg.ok ? "#3a6a30" : "#c04830" }}>
          {promoMsg.text}
        </p>
      )}
    </>
  );
}
