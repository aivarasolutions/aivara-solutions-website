import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      
      login: async (email: string, password: string) => {
        set({ isLoading: true });
        
        try {
          // In a real implementation, this would be an API call
          // For now, we'll simulate a successful login
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock user data
          const user = {
            id: 'user_' + Math.random().toString(36).substr(2, 9),
            email,
            name: email.split('@')[0],
            createdAt: new Date().toISOString(),
          };
          
          set({ user, isAuthenticated: true, isLoading: false });
        } catch (error) {
          console.error('Login failed:', error);
          set({ isLoading: false });
          throw error;
        }
      },
      
      register: async (name: string, email: string, password: string) => {
        set({ isLoading: true });
        
        try {
          // In a real implementation, this would be an API call
          // For now, we'll simulate a successful registration
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock user data
          const user = {
            id: 'user_' + Math.random().toString(36).substr(2, 9),
            email,
            name,
            createdAt: new Date().toISOString(),
          };
          
          set({ user, isAuthenticated: true, isLoading: false });
        } catch (error) {
          console.error('Registration failed:', error);
          set({ isLoading: false });
          throw error;
        }
      },
      
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
