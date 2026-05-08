import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

export default function Shop() {
  const { shopItems, cartItems, addToCart } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-[#f0ece0]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#8a8a6a] mb-2">Decaf Menu</p>
            <h1 className="text-5xl font-black text-[#1c1d0e]">All available items</h1>
          </div>
          <Link
            to="/cart"
            className="inline-flex items-center justify-center rounded-full bg-[#1c1d0e] px-5 py-3 text-sm font-bold text-[#f0ece0] hover:opacity-80 transition-opacity"
          >
            View Cart
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {shopItems.map((item) => {
            const inCart = cartItems.some((cartItem) => cartItem.id === item.id);
            return (
              <div key={item.id} className="rounded-3xl bg-white p-5 shadow-sm border border-[#e0dcd0]">
                <div className="h-56 mb-5 overflow-hidden rounded-3xl bg-[#1c1d0e] flex items-center justify-center">
                  <img src={item.img} alt={item.name} className="max-h-full object-contain" />
                </div>
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#8a8a6a] mb-2">{item.badge}</p>
                    <h2 className="text-2xl font-black text-[#1c1d0e]">{item.name}</h2>
                  </div>
                  <p className="text-xl font-black text-[#1c1d0e]">${item.price.toFixed(2)}</p>
                </div>
                <p className="text-sm leading-relaxed text-[#5a5a40] mb-6">{item.desc}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="w-full rounded-full bg-[#1c1d0e] px-4 py-3 text-sm font-bold text-[#f0ece0] transition hover:opacity-80"
                >
                  {inCart ? "Add Another" : "Add to Cart"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
