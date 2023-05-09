import { create } from 'zustand'

interface IAuthStore {
  accessToken: string | null
  setAccessToken: (accessToken: string | null) => void
}

const initialState = {
  accessToken: null,
}

export const useAuthStore = create<IAuthStore>((set, get) => ({
  ...initialState,
  setAccessToken: (accessToken) => set({ accessToken }),
}))
