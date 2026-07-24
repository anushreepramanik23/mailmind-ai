import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  login,
  register,
  logout,
  getCurrentUser,
} from "../services/auth.services";

type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};

type LoginInput = {
  email: string;
  password: string;
};

type RegisterInput = {
  name: string;
  email: string;
  password: string;
};

interface AuthContextType {
  user: User | null;
  loading: boolean;

  loginUser(
    data: LoginInput
  ): Promise<void>;

  registerUser(
    data: RegisterInput
  ): Promise<void>;

  logoutUser(): Promise<void>;
}

const AuthContext =
  createContext<AuthContextType>(
    {} as AuthContextType
  );

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    try {
      const data =
        await getCurrentUser();

      if (data) {
        setUser(data);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  async function loginUser(
    data: LoginInput
  ) {
    const res = await login(data);
    setUser(res.user);
  }

  async function registerUser(
    data: RegisterInput
  ) {
    const res = await register(data);
    setUser(res.user);
  }

  async function logoutUser() {
    await logout();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        loginUser,
        registerUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}