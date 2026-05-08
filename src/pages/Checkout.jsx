import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";
import { money } from "../utils/format";

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shippingFee = subtotal >= 45 || cartItems.length === 0 ? 0 : 5.99;
  const tax = subtotal * 0.07;
  const total = subtotal + shippingFee + tax;

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    if (!cartItems.length) {
      navigate("/shop");
      return;
    }
    alert("Order placed! Thank you for shopping with wimp.");
    navigate("/");
  };

  return (
    <div style={{ background: "#f5efe2", minHeight: "100vh" }}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8a8a6a] mb-2">Checkout</p>
          <h1 className="text-5xl font-black text-[#1c1d0e]">Finish your order</h1>
          <p className="text-sm mt-3 text-[#5a5a40] max-w-2xl mx-auto">
            Review your cart, enter your shipping details, and place your order with a calm beige checkout experience.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-3xl bg-white p-10 text-center" style={{ border: "1px solid #e0d4bf" }}>
            <p className="text-6xl mb-5">🛒</p>
            <h2 className="text-3xl font-black text-[#1c1d0e] mb-3">Your cart is empty</h2>
            <p className="text-sm text-[#8a8a6a] mb-8">Add something from the menu before checking out.</p>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-full bg-[#1c1d0e] px-6 py-3 text-sm font-bold text-[#f0ece0] hover:opacity-90 transition-opacity"
            >
              Browse the Menu
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_0.9fr] gap-8">
            <form
              onSubmit={handlePlaceOrder}
              className="rounded-3xl bg-white p-8 shadow-sm"
              style={{ border: "1px solid #e0d4bf" }}
            >
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.33em] text-[#8a8a6a] mb-4">Shipping details</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder="Full name"
                    className="rounded-3xl border border-[#e0d4bf] bg-[#f7f1e7] px-4 py-3 text-sm text-[#1c1d0e] outline-none"
                  />
                  <input
                    value={form.email}
                    onChange={handleChange("email")}
                    placeholder="Email address"
                    className="rounded-3xl border border-[#e0d4bf] bg-[#f7f1e7] px-4 py-3 text-sm text-[#1c1d0e] outline-none"
                  />
                  <input
                    value={form.address}
                    onChange={handleChange("address")}
                    placeholder="Street address"
                    className="md:col-span-2 rounded-3xl border border-[#e0d4bf] bg-[#f7f1e7] px-4 py-3 text-sm text-[#1c1d0e] outline-none"
                  />
                  <input
                    value={form.city}
                    onChange={handleChange("city")}
                    placeholder="City"
                    className="rounded-3xl border border-[#e0d4bf] bg-[#f7f1e7] px-4 py-3 text-sm text-[#1c1d0e] outline-none"
                  />
                  <input
                    value={form.postalCode}
                    onChange={handleChange("postalCode")}
                    placeholder="Postal code"
                    className="rounded-3xl border border-[#e0d4bf] bg-[#f7f1e7] px-4 py-3 text-sm text-[#1c1d0e] outline-none"
                  />
                  <input
                    value={form.country}
                    onChange={handleChange("country")}
                    placeholder="Country"
                    className="rounded-3xl border border-[#e0d4bf] bg-[#f7f1e7] px-4 py-3 text-sm text-[#1c1d0e] outline-none"
                  />
                </div>
              </div>

              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.33em] text-[#8a8a6a] mb-4">Payment</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    value={form.cardName}
                    onChange={handleChange("cardName")}
                    placeholder="Cardholder name"
                    className="rounded-3xl border border-[#e0d4bf] bg-[#f7f1e7] px-4 py-3 text-sm text-[#1c1d0e] outline-none"
                  />
                  <input
                    value={form.cardNumber}
                    onChange={handleChange("cardNumber")}
                    placeholder="Card number"
                    className="rounded-3xl border border-[#e0d4bf] bg-[#f7f1e7] px-4 py-3 text-sm text-[#1c1d0e] outline-none"
                  />
                  <input
                    value={form.expiry}
                    onChange={handleChange("expiry")}
                    placeholder="Expiry MM/YY"
                    className="rounded-3xl border border-[#e0d4bf] bg-[#f7f1e7] px-4 py-3 text-sm text-[#1c1d0e] outline-none"
                  />
                  <input
                    value={form.cvc}
                    onChange={handleChange("cvc")}
                    placeholder="CVC"
                    className="rounded-3xl border border-[#e0d4bf] bg-[#f7f1e7] px-4 py-3 text-sm text-[#1c1d0e] outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#1c1d0e] px-6 py-4 text-sm font-bold text-[#f0ece0] hover:opacity-90 transition-opacity"
              >
                Place order
              </button>
            </form>

            <aside className="rounded-3xl bg-white p-8 shadow-sm" style={{ border: "1px solid #e0d4bf" }}>
              <p className="text-sm uppercase tracking-[0.33em] text-[#8a8a6a] mb-4">Order summary</p>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 rounded-3xl bg-[#f7f1e7] p-4">
                    <img src={item.img} alt={item.name} className="h-16 w-16 rounded-3xl object-contain" />
                    <div className="flex-1 min-w-0">
                      <p className="font-black text-[#1c1d0e]">{item.name}</p>
                      <p className="text-xs text-[#8a8a6a]">{item.qty} × {money(item.price)}</p>
                    </div>
                    <p className="font-black text-[#1c1d0e]">{money(item.price * item.qty)}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3 text-sm text-[#1c1d0e]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{money(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shippingFee === 0 ? "Free" : money(shippingFee)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated tax</span>
                  <span>{money(tax)}</span>
                </div>
              </div>
              <div className="mt-6 border-t border-[#e0d4bf] pt-6">
                <div className="flex justify-between items-center text-base font-black text-[#1c1d0e]">
                  <span>Total</span>
                  <span>{money(total)}</span>
                </div>
                <p className="text-xs text-[#8a8a6a] mt-3">You will be redirected to the confirmation page after placing your order.</p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
