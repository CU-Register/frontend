import { IUserProfile } from 'interfaces/Profile'
import { create } from 'zustand'

interface IUserProfileStore {
  userProfile: IUserProfile | null
  setUserProfile: (userProfile: IUserProfile | null) => void
  // editableOptions:
}

const initialState = {
  userProfile: null,
}

export const useUserProfileStore = create<IUserProfileStore>((set, get) => ({
  ...initialState,
  setUserProfile: (userProfile) => set({ userProfile }),
}))
