import React from "react";
import Navbar1 from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Cart = () => {
  const { cart, increment, decrement, removeFromCart, totalPrice } = useCart();
  const { token } = useUser();

  return (
    <div>
      <Navbar1 />
      <Header />
      <div className="container" style={{ paddingTop: "70px" }}>
        <h3>Detalles del pedido:</h3>
        {cart.length === 0 && <p>El carrito está vacío.</p>}

        {cart.map(p => (
          <div key={p.id} className="d-flex align-items-center mb-3 border-bottom pb-2">
            <img src={p.img} alt={p.name} width={60} height={60} className="me-3" />
            <div className="flex-grow-1">
              <strong>{p.name}</strong>
              <div>Precio unitario: ${p.price.toFixed(2)}</div>
              <div>Subtotal: ${(p.price*p.quantity).toFixed(2)}</div>
            </div>
            <div className="d-flex align-items-center me-3">
              <button className="btn btn-outline-danger btn-sm me-2" onClick={() => decrement(p.id)} disabled={p.quantity<=1}>-</button>
              <span>{p.quantity}</span>
              <button className="btn btn-outline-primary btn-sm ms-2" onClick={() => increment(p.id)}>+</button>
            </div>
            <button className="btn btn-outline-secondary btn-sm" onClick={() => removeFromCart(p.id)}>Eliminar</button>
          </div>
        ))}

        <h5 className="mt-4">Total: ${totalPrice.toFixed(2)}</h5>
        <button className="btn btn-dark mt-2" disabled={!token}>Pagar</button>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
