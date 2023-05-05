import documentService from 'services/document.service'
import { useDocumentStore } from 'stores/document.store'

const useDocument = () => {
  const documentStore = useDocumentStore()

  const fetchHoldingDocuments = async () => {
    try {
      const holdingDocuments = await documentService.getHoldingDocuments()
      documentStore.setHoldingDocuments(holdingDocuments)
    } catch {
      console.error('fetchHoldingDocuments error')
    }
  }

  const fetchHistoryDocuments = async () => {
    try {
      const historyDocuments = await documentService.getHistoryDocuments()
      documentStore.setHistoryDocuments(historyDocuments)
    } catch {
      console.error('fetchHistoryDocuments error')
    }
  }

  const createDocument = async (templateType: string) => {
    try {
      await documentService.createDocument(templateType)
    } catch {
      console.error('createDocument error')
    }
  }

  const deleteDraftDocument = async (documentId: string) => {
    try {
      await documentService.deleteDraftDocument(documentId)
    } catch {
      console.error('deleteDraftDocument error')
    }
  }

  const fetchDocumentForm = async (documentId: string) => {
    try {
      const documentForm = await documentService.getDocumentForm(documentId)
      return documentForm
    } catch {
      console.error('fetchDocumentForm error')
    }
  }

  return { fetchHoldingDocuments, fetchHistoryDocuments, createDocument, deleteDraftDocument, fetchDocumentForm }
}

export default useDocument