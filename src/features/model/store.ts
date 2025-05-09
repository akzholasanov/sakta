import { create } from 'zustand';

interface State {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

export const useStore = create<State>(set => ({
  isAuthenticated: false,
  setIsAuthenticated: value => set({ isAuthenticated: value }),
}));
