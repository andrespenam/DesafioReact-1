import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { pizzaCart } from "../util/pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const cambiarCantidad = (id, delta) => {
    const nuevoCarrito = cart
      .map(pizza => {
        if (pizza.id === id) {
          return { ...pizza, count: pizza.count + delta };
        }
        return pizza;
      })
      .filter(pizza => pizza.count > 0);
    setCart(nuevoCarrito);
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <div className="container mt-5">
      <h3>Detalles del pedido:</h3>
      {cart.map((pizza) => (
        <div key={pizza.id} className="d-flex align-items-center mb-3 border-bottom pb-2">
          <img src={pizza.img} alt={pizza.name} width={60} height={60} className="me-3" />
          <div className="flex-grow-1">
            <strong>{pizza.name}</strong>
          </div>
          <div className="me-3">${pizza.price}</div>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-danger btn-sm me-2"
              onClick={() => cambiarCantidad(pizza.id, -1)}
            >
              -
            </button>
            <span>{pizza.count}</span>
            <button
              className="btn btn-outline-primary btn-sm ms-2"
              onClick={() => cambiarCantidad(pizza.id, 1)}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <h5 className="mt-4">Total: ${total.toLocaleString()}</h5>
      <button className="btn btn-dark mt-2">Pagar</button>
    </div>
  );
};

export default Cart;
