import { Routes, Route } from "react-router-dom";
import Hero from './pages/Hero'
import Navigation from './pages/Navigation'
import Login from './components/Nav-button/Login'
import Cart from './components/Nav-button/Cart'

const App = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}
export default App;