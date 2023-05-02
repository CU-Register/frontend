import { create } from 'zustand'

interface IDocumentStore {}

const initialState = {}

export const useTemplateStore = create<IDocumentStore>((set, get) => ({
  ...initialState,
}))
