import { IUserProfile, IUserProfileOption } from 'interfaces/Profile'
import { create } from 'zustand'

interface IUserProfileStore {
  userProfile: IUserProfile | null
  setUserProfile: (userProfile: IUserProfile | null) => void
  userProfileOption: IUserProfileOption | null
  setUserProfileOption: (userProfileOption: IUserProfileOption | null) => void
}

const initialState = {
  userProfile: null,
  userProfileOption: null,
}

export const useUserProfileStore = create<IUserProfileStore>((set, get) => ({
  ...initialState,
  setUserProfile: (userProfile) => set({ userProfile }),
  setUserProfileOption: (userProfileOption) => set({ userProfileOption }),
}))
