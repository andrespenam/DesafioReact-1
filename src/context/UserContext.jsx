import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || null);
  const [name, setName] = useState(localStorage.getItem("name") || null);

  // Guardar token/email/nombre en localStorage
  const saveSession = (token, email, name) => {
    setToken(token);
    setEmail(email);
    setName(name);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("name", name);
  };

  // Eliminar sesión
  const logout = () => {
    setToken(null);
    setEmail(null);
    setName(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
  };

  // Login
  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Error en login");

      const data = await res.json();
      saveSession(data.token, data.email, data.name || "");
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  // Register con nombre completo
  const register = async (name, email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) throw new Error("Error en registro");

      const data = await res.json();
      saveSession(data.token, data.email, data.name || name);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  // Obtener perfil
  const getProfile = async () => {
    if (!token) return null;
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Error al obtener perfil");

      const data = await res.json();
      setEmail(data.email);
      setName(data.name);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    if (token) {
      getProfile();
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{ token, email, name, login, register, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
