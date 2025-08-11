import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Pizza from './components/Pizza';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import Navbar1 from './components/Navbar';
import NotFound from './views/NotFound';
import { CartProvider } from './context/CartContext';

function App() {
  const location = useLocation();

  const rutasConNavbar = ['/', '/register', '/loginPage', '/profile', '/cart', '/pizza'];
  const mostrarNavbar = rutasConNavbar.includes(location.pathname);

  return (
    <CartProvider>
      {mostrarNavbar && <Navbar1 />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
