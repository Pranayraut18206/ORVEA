export default function CartUpsells({ visibleUpsells, addUpsell, money }) {
  if (visibleUpsells.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <p
        className="text-xs font-bold uppercase tracking-widest mb-3"
        style={{ color: "#8a8a6a" }}
      >
        You might also like
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {visibleUpsells.map((u) => (
          <div
            key={u.id}
            className="flex items-center gap-3 rounded-xl p-3 cursor-pointer transition-colors"
            style={{ background: "#fff", border: "1px solid #e0dcd0" }}
            onClick={() => addUpsell(u)}
          >
            <div
              className="w-10 h-10 rounded-lg shrink-0 overflow-hidden flex items-center justify-center"
              style={{ background: "#1c1d0e" }}
            >
              <img
                src={u.img}
                alt={u.name}
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="text-sm font-black truncate"
                style={{ fontFamily: "Georgia,serif", color: "#1c1d0e" }}
              >
                {u.name}
              </p>
              <p className="text-xs" style={{ color: "#8a8a6a" }}>
                {money(u.price)}
              </p>
            </div>
            <button
              className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-lg shrink-0 transition-opacity hover:opacity-70"
              style={{ background: "#f0ece0", color: "#1c1d0e" }}
              aria-label={`Add ${u.name}`}
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
