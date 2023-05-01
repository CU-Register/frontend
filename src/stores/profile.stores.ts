import { IUserProfile, IUserProfileOption } from 'interfaces/Profile'
import { create } from 'zustand'

interface IProfileStore {
  userProfile: IUserProfile | null
  setUserProfile: (userProfile: IUserProfile | null) => void
  userProfileOption: IUserProfileOption | null
  setUserProfileOption: (userProfileOption: IUserProfileOption | null) => void
  tmpUserProfile: IUserProfile | null
  setTmpUserProfile: (tmpUserProfile: IUserProfile | null) => void
}

const initialState = {
  userProfile: null,
  userProfileOption: null,
  tmpUserProfile: null,
}

export const useProfileStore = create<IProfileStore>((set, get) => ({
  ...initialState,
  setUserProfile: (userProfile) => set({ userProfile }),
  setUserProfileOption: (userProfileOption) => set({ userProfileOption }),
  setTmpUserProfile: (tmpUserProfile) => set({ tmpUserProfile }),
}))
