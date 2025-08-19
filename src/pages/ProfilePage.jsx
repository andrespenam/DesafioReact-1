import Footer from '../components/Footer';
import Header from '../components/Header';

function ProfilePage() {
    
    const fakeUser = { name: "Usuario Demo", email: "demo@pizzeria.com" };

    return (
        <div>
            <Header />
            <div style={styles.container}>
                <h2>Perfil de Usuario</h2>
                <p><strong>Nombre:</strong> {fakeUser.name}</p>
                <p><strong>Email:</strong> {fakeUser.email}</p>
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
