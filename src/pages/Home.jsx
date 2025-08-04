import React from 'react'
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
import img1 from '../assets/img/pepe.jpg'
import img2 from '../assets/img/pepe2.jpg'
import img3 from '../assets/img/pizzaesp.jpg'
import { pizzas } from '../util/pizzas'
import Footer from '../components/Footer'
import Navbar1 from '../components/Navbar'  
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Header />

      <main className="container p-4">
        <section className="row gap-5 ">

        {pizzas.map((pizza) => <CardPizza 
        key={pizza.id}
        image={pizza.img}
        title={pizza.name}
        ingredientes={pizza.ingredients}
        price={pizza.price}
        /> )}

        
          {/*<CardPizza
            image = {img3}
            title = "Pizza Napolitana"
            ingredientes = {["Mozzarella, tomates, jamón y orégano"]}
            price = "$5.950"
            />
            <CardPizza
            image = {img1}
            title = "Pizza Española"
            ingredientes = {["Mozzarella, gorgonzola, parmesano, provolone"]}
            price = "$6.950"
            />
            <CardPizza
            image = {img2}
            title = "Pizza Peperonni"
            ingredientes = {["Mozzarella, peperonni y orégano"]}
            price = "$6.950"
            />*/}
        </section>
        <Link to="/pizza" className="text-center" style={{ textDecoration: 'none' }}>
        <button className="more btn btn-dark">Más Pizzas</button>
      </Link>
      </main>

      <Footer />

    </div>
  )
}

export default Home