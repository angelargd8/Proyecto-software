import { useState, useEffect } from 'react';

// Hook useAuth
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Simula la verificación de si el usuario tiene un token válido
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Simula la obtención de los datos del usuario a partir del token
      setUser({ name: 'Usuario', email: 'usuario@ejemplo.com' });
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  // Función para iniciar sesión
  const login = (email, password) => {
    setLoading(true);
    // Aquí iría tu lógica para hacer la solicitud al backend y obtener el token
    const fakeToken = '1234567890'; // Token simulado
    localStorage.setItem('token', fakeToken);
    setUser({ name: 'Usuario', email });
    setIsAuthenticated(true);
    setLoading(false);
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
  };

  return { isAuthenticated, loading, user, login, logout };
};

export default useAuth;
