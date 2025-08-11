import React from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { pizzas } from '../util/pizzas';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 

function Home() {
  const { addToCart } = useCart(); 

  return (
    <div>
      <Header />

      <main className="container p-4">
        <section className="row gap-5 ">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              image={pizza.img}
              title={pizza.name}
              ingredientes={pizza.ingredients}
              price={pizza.price}
              onAdd={() => addToCart(pizza)} 
            />
          ))}
        </section>

        <Link to="/pizza" className="text-center" style={{ textDecoration: 'none' }}>
          <button className="more btn btn-dark">Más Pizzas</button>
        </Link>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
