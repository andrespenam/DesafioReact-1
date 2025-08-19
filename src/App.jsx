
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './components/Cart';
import Pizza from './components/Pizza';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import Navbar1 from './components/Navbar';
import NotFound from './views/NotFound';
import { CartProvider } from './context/CartContext';
import { useUser } from './context/UserContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const location = useLocation();
  const { token } = useUser();

  const rutasConNavbar = ['/', '/register', '/loginPage', '/profile', '/cart', '/pizza'];
  const mostrarNavbar = rutasConNavbar.some(ruta => location.pathname.startsWith(ruta));

  return (
    <CartProvider>
      {mostrarNavbar && <Navbar1 />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />

        <Route path="/loginPage" element={token ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="/register" element={token ? <Navigate to="/" /> : <RegisterPage />} />

        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
