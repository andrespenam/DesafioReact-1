import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Pizza from './components/Pizza';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import { useState } from 'react';
import { pizzaCart } from './util/pizzas';
import Navbar1 from './components/Navbar';
import NotFound from './views/NotFound';

function App() {
  const [cart, setCart] = useState(pizzaCart);
  const location = useLocation();

  const cambiarCantidad = (id, delta) => {
    const nuevoCarrito = cart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + delta } : pizza
      )
      .filter((pizza) => pizza.count > 0);
    setCart(nuevoCarrito);
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);


  const rutasConNavbar = ['/', '/register', '/loginPage', '/profile', '/cart', '/pizza'];
  const mostrarNavbar = rutasConNavbar.includes(location.pathname);

  return (
    <>
      <div>
        {mostrarNavbar && <Navbar1 total={total} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<Cart cart={cart} cambiarCantidad={cambiarCantidad} total={total} />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;



