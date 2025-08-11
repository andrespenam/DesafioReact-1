import React from "react";
import Navbar1 from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, increment, decrement, removeFromCart, totalPrice } = useCart();

  return (
    <div>
      <Navbar1 />
      <Header />
      <div className="container" style={{ paddingTop: "70px" }}>
        <h3>Detalles del pedido:</h3>

        {cart.length === 0 && <p>El carrito está vacío.</p>}

        {cart.map((pizza) => {
          const subTotal = pizza.price * pizza.quantity;

          return (
            <div
              key={pizza.id}
              className="d-flex align-items-center mb-3 border-bottom pb-2"
            >
              <img
                src={pizza.img}
                alt={pizza.name}
                width={60}
                height={60}
                className="me-3"
              />
              <div className="flex-grow-1">
                <strong>{pizza.name}</strong>
                <div>Precio unitario: ${pizza.price.toFixed(2)}</div>
                <div>Subtotal: ${subTotal.toFixed(2)}</div>
              </div>

              <div className="d-flex align-items-center me-3">
                <button
                  className="btn btn-outline-danger btn-sm me-2"
                  onClick={() => decrement(pizza.id)}
                  disabled={pizza.quantity <= 1}
                >
                  -
                </button>
                <span>{pizza.quantity}</span>
                <button
                  className="btn btn-outline-primary btn-sm ms-2"
                  onClick={() => increment(pizza.id)}
                >
                  +
                </button>
              </div>

              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => removeFromCart(pizza.id)}
              >
                Eliminar
              </button>
            </div>
          );
        })}

        <h5 className="mt-4">Total: ${totalPrice.toFixed(2)}</h5>
        <button className="btn btn-dark mt-2">Pagar</button>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
