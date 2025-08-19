import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Pizza = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPizza = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/pizzas/${id}`);
                setPizza(response.data);
            } catch (err) {
                console.error(err);
                setError("No se pudo cargar la pizza");
            } finally {
                setLoading(false);
            }
        };
        getPizza();
    }, [id]);

    if (loading) return <div className="text-center mt-5">Cargando pizza...</div>;
    if (error) return <div className="alert alert-danger text-center mt-5">{error}</div>;

    return (
        <div className="container mt-5">
            <div className="card shadow">
                <img src={pizza.img} className="card-img-top" alt={pizza.name} />
                <div className="card-body">
                    <h2 className="card-title">{pizza.name}</h2>
                    <p className="card-text">{pizza.desc}</p>
                    <h5>Ingredientes:</h5>
                    <ul className="list-group list-group-flush mb-3">
                        {pizza.ingredients.map((i, idx) => <li key={idx} className="list-group-item">{i}</li>)}
                    </ul>
                    <p className="fw-bold fs-4">Precio: ${pizza.price}</p>
                    <button className="btn btn-dark">Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default Pizza;
