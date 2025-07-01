import { useState } from 'react';

function LoginPage() {
  // Estados para inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Estado para mensajes
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState(''); // 'exito' o 'error'

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación: campos vacíos
    if (email.trim() === '' || password.trim() === '') {
      setMensaje('Todos los campos son obligatorios');
      setTipoMensaje('error');
      return;
    }

    // Validación: contraseña mínima de 6 caracteres
    if (password.length < 6) {
      setMensaje('La contraseña debe tener al menos 6 caracteres');
      setTipoMensaje('error');
      return;
    }

    // Validación ficticia de usuario correcto
    if (email === 'usuario@correo.com' && password === '123456') {
      setMensaje('Inicio de sesión exitoso');
      setTipoMensaje('exito');
    } else {
      setMensaje('Email o contraseña incorrectos');
      setTipoMensaje('error');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
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

        <button type="submit" style={styles.button}>Iniciar sesión</button>

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
  );
}

// Estilos inline simples
const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold'
  },
  input: {
    marginBottom: '15px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px',
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  mensaje: {
    marginTop: '15px',
    fontWeight: 'bold',
    textAlign: 'center'
  }
};



export default LoginPage;