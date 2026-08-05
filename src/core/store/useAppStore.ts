import { create } from 'zustand';

interface AppState {
  apiKey: string | null;
  setApiKey: (key: string | null) => void;
  isGuest: boolean;
  setGuestMode: (isGuest: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  apiKey: null,
  setApiKey: (key) => set({ apiKey: key }),
  isGuest: true,
  setGuestMode: (isGuest) => set({ isGuest }),
}));
