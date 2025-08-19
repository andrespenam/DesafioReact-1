import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Footer from '../components/Footer';
import Navbar1 from '../components/Navbar';
import Header from '../components/Header';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');
  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!email || !password || !confirmarPassword) {
      setMensaje('Todos los campos son obligatorios');
      setTipoMensaje('error');
      return;
    }

    if (password.length < 6) {
      setMensaje('La contraseña debe tener al menos 6 caracteres');
      setTipoMensaje('error');
      return;
    }

    if (password !== confirmarPassword) {
      setMensaje('Las contraseñas no coinciden');
      setTipoMensaje('error');
      return;
    }

  
    const users = JSON.parse(localStorage.getItem('users')) || [];

    
    const existe = users.find(user => user.email === email);
    if (existe) {
      setMensaje('Este correo ya está registrado');
      setTipoMensaje('error');
      return;
    }

    
    const nuevoUsuario = { email, password };
    users.push(nuevoUsuario);
    localStorage.setItem('users', JSON.stringify(users));

    setMensaje('Registro exitoso');
    setTipoMensaje('exito');

    
    setEmail('');
    setPassword('');
    setConfirmarPassword('');

    
    setTimeout(() => {
      navigate('/loginPage');
    }, 1500);
  };

  return (
    <div>
      
      <Header />
      <div style={styles.container}>
        <h2 style={styles.title}>Registro</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Confirmar Contraseña:</label>
          <input
            type="password"
            value={confirmarPassword}
            onChange={(e) => setConfirmarPassword(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>Registrarse</button>

          {mensaje && (
            <p style={{
              ...styles.mensaje,
              color: tipoMensaje === 'exito' ? 'green' : 'red'
            }}>
              {mensaje}
            </p>
          )}
        </form>
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
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f1f1f1',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: '15px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    backgroundColor: '#2e7d32',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  mensaje: {
    marginTop: '15px',
    textAlign: 'center',
    fontWeight: 'bold',
  }
};

export default RegisterPage;
