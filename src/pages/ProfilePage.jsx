import Footer from "../components/Footer";
import Header from "../components/Header";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function ProfilePage() {
    const { name, email, logout } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        Swal.fire({
            icon: "question",
            title: "¿Cerrar sesión?",
            text: "Tu sesión se cerrará",
            showCancelButton: true,
            confirmButtonColor: "#d32f2f",
            cancelButtonColor: "#1976d2",
            confirmButtonText: "Sí, salir",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                logout();
                Swal.fire("Sesión cerrada", "Has salido correctamente 🍕", "success");
                navigate("/loginPage");
            }
        });
    };

    return (
        <div>
            <Header />
            <div style={styles.container}>
                <h2>Perfil de Usuario</h2>
                <p>
                    <strong>Nombre:</strong> {name || "No disponible"}
                </p>
                <p>
                    <strong>Email:</strong> {email || "No disponible"}
                </p>

                <button style={styles.button} onClick={handleLogout}>
                    Cerrar sesión
                </button>
            </div>
            <Footer />
        </div>
    );
}

const styles = {
    container: {
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
    },
    button: {
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "#d32f2f",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold",
    },
};

export default ProfilePage;
