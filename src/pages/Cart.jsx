
    // src/pages/Cart.jsx
// Drop this into your ORVEA project at: src/pages/Cart.jsx
//
// Stack already in your repo:
//   react-router-dom v7  →  Link, useNavigate
//   gsap v3              →  entrance animations
//   tailwindcss v4       →  utility classes
//
// Wire it up in your router (App.jsx):
//   import Cart from "./pages/Cart";
//   <Route path="/cart" element={<Cart />} />

import { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import CartContext from "../context/CartContext";
import { UPSELL_ITEMS } from "../data/products";
import { money } from "../utils/format";
import CartHeader from "../components/cart/CartHeader";
import CartEmptyState from "../components/cart/CartEmptyState";
import CartItemsList from "../components/cart/CartItemsList";
import CartPromoForm from "../components/cart/CartPromoForm";
import CartUpsells from "../components/cart/CartUpsells";
import CartSummary from "../components/cart/CartSummary";

// ─── THEME (matches your existing site) ───────────────────────────────────
// bg-dark    : #1c1d0e   dark olive green  → navbars, hero headers, product thumbs
// bg-light   : #f0ece0   warm cream        → page background, cards
// bg-surface : #252611   slightly lighter olive → sections, promo areas
// text-muted : #8a8a6a   olive grey        → subtitles, labels
// text-faint : #3a3b1e   very dark olive   → footer text
// accent     : #4a7c59   muted green       → success, free-shipping indicator

// ─── DEMO DATA (replace with your CartContext / global state) ──────────────
const UPSELLS = UPSELL_ITEMS;

const PROMO_CODES = { WIMP: 10, DECAF10: 10, CHILL: 15 };
const FREE_SHIPPING_AT = 45;
const SHIPPING_FEE = 5.99;

// ══════════════════════════════════════════════════════════════════════════════
export default function Cart() {
  const navigate = useNavigate();
  const { cartItems, addToCart, removeItem, changeQty } = useContext(CartContext);
  const items = cartItems;
  const [promoInput, setPromoInput] = useState("");
  const [promoMsg, setPromoMsg]     = useState(null); // { ok, text }
  const [discountPct, setDiscountPct] = useState(0);

  // animation refs
  const pageRef    = useRef(null);
  const headRef    = useRef(null);
  const listRef    = useRef([]);
  const sideRef    = useRef(null);

  // ── GSAP entrance ────────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headRef.current, {
        y: 40, opacity: 0, duration: 0.7, ease: "power3.out",
      });
      gsap.from(listRef.current.filter(Boolean), {
        y: 28, opacity: 0, duration: 0.55, ease: "power2.out",
        stagger: 0.1, delay: 0.2,
      });
      gsap.from(sideRef.current, {
        y: 20, opacity: 0, duration: 0.55, ease: "power2.out", delay: 0.35,
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  // ── cart helpers ──────────────────────────────────────────────────────────
  function addUpsell(u) {
    addToCart({ ...u, badge: u.badge || "Popular" });
  }

  function handlePromo() {
    const code = promoInput.trim().toUpperCase();
    if (!code) {
      setPromoMsg({ ok: false, text: "Enter a promo code first." });
      return;
    }
    if (PROMO_CODES[code]) {
      setDiscountPct(PROMO_CODES[code]);
      setPromoMsg({ ok: true, text: `${code} applied — ${PROMO_CODES[code]}% off! 🎉` });
    } else {
      setPromoMsg({ ok: false, text: `"${code}" isn't valid. Try CHILL for 15% off!` });
    }
  }

  // ── derived values ────────────────────────────────────────────────────────
  const subtotal      = items.reduce((s, i) => s + i.price * i.qty, 0);
  const discount      = subtotal * (discountPct / 100);
  const afterDiscount = subtotal - discount;
  const shipping      = afterDiscount >= FREE_SHIPPING_AT || items.length === 0 ? 0 : SHIPPING_FEE;
  const total         = afterDiscount + shipping;
  const shipPct       = Math.min((afterDiscount / FREE_SHIPPING_AT) * 100, 100);
  const toFreeShip    = Math.max(FREE_SHIPPING_AT - afterDiscount, 0);
  const totalQty      = items.reduce((s, i) => s + i.qty, 0);

  const visibleUpsells = UPSELLS.filter(u => !items.find(i => i.id === u.id));

  // ══════════════════════════════════════════════════════════════════════════
  return (
    <div ref={pageRef} style={{ background: "#f0ece0", minHeight: "100vh" }}>

      {/* ── NAVBAR ─────────────────────────────────────────────────────── */}
      <CartHeader headerRef={headRef} totalQty={totalQty} />

      <div className="max-w-5xl mx-auto px-4 py-12">
        {items.length === 0 ? (
          <CartEmptyState />
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 min-w-0">
              <CartItemsList
                items={items}
                removeItem={removeItem}
                changeQty={changeQty}
                listRef={listRef}
                money={money}
              />

              <CartPromoForm
                promoInput={promoInput}
                promoMsg={promoMsg}
                setPromoInput={setPromoInput}
                handlePromo={handlePromo}
              />

              <CartUpsells
                visibleUpsells={visibleUpsells}
                addUpsell={addUpsell}
                money={money}
              />
            </div>

            <CartSummary
              subtotal={subtotal}
              discountPct={discountPct}
              discount={discount}
              shipping={shipping}
              shipPct={shipPct}
              toFreeShip={toFreeShip}
              total={total}
              money={money}
              onProceed={() => navigate("/checkout")}
            />
          </div>
        )}
      </div>

      {/* ── FOOTER STRIP (matches the rest of your site) ───────────────── */}
      <footer
        className="mt-16 py-8 px-6"
        style={{ background: "#1c1d0e" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="font-black text-white"
            style={{ fontFamily: "Georgia,serif" }}
          >
            wimp
          </p>
          <p className="text-xs italic text-center" style={{ color: "#3a3b1e" }}>
            "It's not the size of the dog in the fight…" — Mark Twain
          </p>
          <p className="text-xs" style={{ color: "#3a3b1e" }}>
            © 2026 wimp Coffee Co.
          </p>
        </div>
      </footer>

    </div>
  );
}

