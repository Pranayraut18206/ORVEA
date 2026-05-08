export default function CartHeader({ totalQty, headerRef }) {
  return (
    <div ref={headerRef} className="py-16 px-6 text-center" style={{ background: "#1c1d0e" }}>
      <h1
        className="text-6xl md:text-7xl font-black text-white leading-none mb-2"
        style={{ fontFamily: "font5", letterSpacing: "-0.03em" }}
      >
        Your Cart
      </h1>
      <p className="text-sm" style={{ color: "#8a8a6a" }}>
        {totalQty === 0
          ? "Your cart is empty."
          : `${totalQty} item${totalQty !== 1 ? "s" : ""} · All chemical-free decaf`}
      </p>
    </div>
  );
}
