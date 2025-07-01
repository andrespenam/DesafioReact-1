import { useState } from 'react';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState(''); // 'exito' o 'error'

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos vacíos
    if (!email || !password || !confirmarPassword) {
      setMensaje('Todos los campos son obligatorios');
      setTipoMensaje('error');
      return;
    }

    // Validación de longitud de contraseña
    if (password.length < 6) {
      setMensaje('La contraseña debe tener al menos 6 caracteres');
      setTipoMensaje('error');
      return;
    }

    // Validación de coincidencia de contraseñas
    if (password !== confirmarPassword) {
      setMensaje('Las contraseñas no coinciden');
      setTipoMensaje('error');
      return;
    }

    // Si pasa todas las validaciones
    setMensaje('Registro exitoso');
    setTipoMensaje('exito');

    // (Opcional: aquí podrías enviar los datos a una API)

    // Limpiar campos
    setEmail('');
    setPassword('');
    setConfirmarPassword('');
  };

  return (
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
  );
}

// Estilos simples con CSS en JS
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