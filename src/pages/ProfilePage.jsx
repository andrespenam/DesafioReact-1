import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ProfilePage() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const sessionUser = JSON.parse(localStorage.getItem('session'));
        if (!sessionUser) {
            navigate('/login'); // Redirige si no hay sesión
        } else {
            setUser(sessionUser); // Carga datos del usuario
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('session');
        navigate('/login');
    };

    if (!user) return null; // Evita error si redirige antes de mostrar

    return (
        <div>
            
            <Header />  
            <div style={styles.container}>
                <h2>Perfil de Usuario</h2>
                <p><strong>Nombre:</strong> {user.email}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </div>
            <Footer />
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f0f0f0',
        textAlign: 'center'
    },
};

export default ProfilePage;
