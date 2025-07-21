import { createContext, type ReactNode, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
const AuthContext = createContext<unknown>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState(() => localStorage.getItem("token")); // Lazy initialization of token
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error("Invalid");
        logout();
      }
    }
  }, [token]);

  const login = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const isAuth = !!user;
  const isAdmin = user?.role === "admin";

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, isAdmin, isAuth }}
    >
      {children}{" "}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

/**
 * based on the provided code snippet, the AuthProvider component is designed to manage authentication state in a React application. It uses localStorage to persist the authentication token and decodes it to extract user information. The component provides methods for logging in and logging out, as well as flags to check if a user is authenticated or if they have admin privileges.
 */
