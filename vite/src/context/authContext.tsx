import React, { ReactNode, FC, useState, createContext, useContext } from 'react';
import { auth } from '../config/Firabse';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';

interface AuthContextType {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  login: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  setAuth: (isAuth: boolean) => void;
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ setAuth, children }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in the details');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setAuth(true);
      console.log('User successfully logged in');
    } catch (err) {
      console.error('Error during login:', err);
      alert('Login failed. Please try again.');
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setEmail('');
      setPassword('');
      localStorage.clear();
      setAuth(false);
      console.log('User successfully logged out');
    } catch (err) {
      console.error('Error during logout:', err);
      alert('Logout failed. Please try again.');
    }
  };

  return (
    <AuthContext.Provider value={{ email, password, setEmail, setPassword, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
