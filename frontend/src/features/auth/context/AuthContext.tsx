"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { loginApi, registerApi } from "../service/auth.api";

interface User {
  id: string;
  name: string;
  email: string;
  authProvider?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("popcorn_token");
    const storedUser = localStorage.getItem("popcorn_user");
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const data = await loginApi(email, password);

    setToken(data.token);
    setUser(data.user);
    localStorage.setItem("popcorn_token", data.token);
    localStorage.setItem("popcorn_user", JSON.stringify(data.user));
    alert("Login successful!");
    router.push("/");
  };

  const register = async (name: string, email: string, password: string) => {
    await registerApi(name, email, password);
    alert("Registration successful!");
    router.push("/login");
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("popcorn_token");
    localStorage.removeItem("popcorn_user");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, isAuthenticated: !!token, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
