import IUserProfile from 'interfaces/Profile'
import { create } from 'zustand'

interface IUserProfileStore {
  profile: IUserProfile | null
  setUserProfile: (profile: IUserProfile | null) => void
}

const initialState = {
  profile: null,
}

export const useUserProfileStore = create<IUserProfileStore>((set, get) => ({
  ...initialState,
  setUserProfile: (profile) => set({ profile }),
}))
