import { Link } from "react-router-dom";

export default function CartEmptyState() {
  return (
    <div className="text-center py-24">
      <p className="text-6xl mb-6">☕</p>
      <h2
        className="text-4xl font-black mb-3"
        style={{ fontFamily: "font5", color: "#1c1d0e" }}
      >
        Nothing here yet.
      </h2>
      <p className="text-sm mb-8" style={{ color: "#8a8a6a" }}>
        Let's fix that.
      </p>
      <Link
        to="/shop"
        className="inline-block font-bold px-10 py-4 rounded-full hover:opacity-80 transition-opacity"
        style={{ background: "#1c1d0e", color: "#f0ece0" }}
      >
        Browse the Menu →
      </Link>
    </div>
  );
}
