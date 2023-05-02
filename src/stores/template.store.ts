import { ITemplate } from 'interfaces/Request'
import { create } from 'zustand'

interface ITemplateStore {
  templates: ITemplate[] | null
  setTemplates: (templates: ITemplate[] | null) => void
}

const initialState = {
  templates: null,
}

export const useTemplateStore = create<ITemplateStore>((set, get) => ({
  ...initialState,
  setTemplates: (templates) => set({ templates }),
}))
