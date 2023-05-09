import { IDocument, IDocumentSummary } from 'interfaces/Document'
import { IUser } from 'interfaces/User'
import { create } from 'zustand'

interface IDocumentStore {
  holdingDocuments: IDocument[] | null
  historyDocuments: IDocument[] | null
  targets: IUser[] | null
  selectedTarget: IUser | null
  summaryDocuments: IDocumentSummary | null
  setHoldingDocuments: (holdingDocuments: IDocument[] | null) => void
  setHistoryDocuments: (historyDocuments: IDocument[] | null) => void
  setSummaryDocuments: (summaryDocuments: IDocumentSummary | null) => void
  setTargets: (targets: IUser[] | null) => void
  setSelectedTarget: (selectedTarget: IUser | null) => void
}

const initialState = {
  holdingDocuments: null,
  historyDocuments: null,
  targets: null,
  selectedTarget: null,
  summaryDocuments: null,
}

export const useDocumentStore = create<IDocumentStore>((set, get) => ({
  ...initialState,
  setHoldingDocuments: (holdingDocuments) => set({ holdingDocuments }),
  setHistoryDocuments: (historyDocuments) => set({ historyDocuments }),
  setTargets: (targets) => set({ targets }),
  setSelectedTarget: (selectedTarget) => set({ selectedTarget }),
  setSummaryDocuments: (summaryDocuments) => set({ summaryDocuments }),
}))
