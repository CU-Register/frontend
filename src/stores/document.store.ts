import { IDocument } from 'interfaces/Document'
import { create } from 'zustand'

interface IDocumentStore {
  holdingDocuments: IDocument[] | null
  historyDocuments: IDocument[] | null
  setHoldingDocuments: (holdingDocuments: IDocument[] | null) => void
  setHistoryDocuments: (historyDocuments: IDocument[] | null) => void
}

const initialState = {
  holdingDocuments: null,
  historyDocuments: null,
}

export const useDocumentStore = create<IDocumentStore>((set, get) => ({
  ...initialState,
  setHoldingDocuments: (holdingDocuments) => set({ holdingDocuments }),
  setHistoryDocuments: (historyDocuments) => set({ historyDocuments }),
}))
