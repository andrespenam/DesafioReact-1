import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className=" pizza-404-page notfound-container d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white text-center">
            <div className="pizza-404-content" >
            <h1 className=" pizza-404-title display-1 fw-bold glitch">404</h1>
            <p className="fs-4 pizza-404-message ">¡Oops! Te perdiste como una pizza sin queso 🍕</p>
            
            <img
                src="https://media.giphy.com/media/l3vR85PnGsBwu1PFK/giphy.gif"
                alt="Lost pizza gif"
                className="img-fluid my-4"
                style={{ maxWidth: '300px' }}
            />
             </div>
            <Link to="/" className=" pizza-404-button btn btn-warning btn-lg mt-2">
                Volver al horno 🔥
            </Link>
           
        </div>
    );
};

export default NotFound;
