import { Routes, Route } from "react-router-dom";
import Hero from './pages/Hero'
import Navigation from './pages/Navigation'
import Login from './components/Nav-button/Login'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import Checkout from './pages/Checkout'
import { CartProvider } from './context/CartContext'

const App = () => {
  return (
    <CartProvider>
      <Navigation />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </CartProvider>
  )
}
export default App;