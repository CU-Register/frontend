import documentService from 'services/document.service'
import { useDocumentStore } from 'stores/document.store'

const useDocument = () => {
  const documentStore = useDocumentStore()

  const fetchHoldingDocuments = async () => {
    try {
      const holdingDocuments = await documentService.getHoldingDocuments()
      documentStore.setHoldingDocuments(holdingDocuments)
    } catch (error) {
      throw new Error(`fetchHoldingDocuments error: ${error}`)
    }
  }

  const fetchHistoryDocuments = async () => {
    try {
      const historyDocuments = await documentService.getHistoryDocuments()
      documentStore.setHistoryDocuments(historyDocuments)
    } catch (error) {
      throw new Error(`fetchHistoryDocuments error: ${error}`)
    }
  }

  const createDocument = async (templateType: string) => {
    try {
      await documentService.createDocument(templateType)
    } catch (error) {
      throw new Error(`createDocument error: ${error}`)
    }
  }

  const deleteDraftDocument = async (documentId: string) => {
    try {
      await documentService.deleteDraftDocument(documentId)
    } catch (error) {
      throw new Error(`deleteDraftDocument error: ${error}`)
    }
  }

  const fetchDocumentForm = async (documentId: string) => {
    try {
      const documentForm = await documentService.getDocumentForm(documentId)
      return documentForm
    } catch (error) {
      throw new Error(`fetchDocumentForm error: ${error}`)
    }
  }

  const fetchPreviewDocument = async (documentId: string, file: Blob) => {
    try {
      const documentPreview = await documentService.previewDocument(documentId, file)
      return documentPreview
    } catch (error) {
      throw new Error(`previewDocument error: ${error}`)
    }
  }

  const updateDocument = async (documentId: string, file: Blob) => {
    try {
      await documentService.updateDocument(documentId, file)
    } catch (error) {
      throw new Error(`updateDocument error: ${error}`)
    }
  }

  const fetchViewDocument = async (documentId: string) => {
    try {
      const documentView = await documentService.getViewDocument(documentId)
      return documentView
    } catch (error) {
      throw new Error(`fetchViewDocument error: ${error}`)
    }
  }

  const forwardDocument = async (documentId: string, targetId: string, file: Blob) => {
    try {
      await documentService.forwardDocument(documentId, targetId, file)
    } catch (error) {
      throw new Error(`forwardDocument error: ${error}`)
    }
  }

  return {
    fetchHoldingDocuments,
    fetchHistoryDocuments,
    createDocument,
    deleteDraftDocument,
    fetchDocumentForm,
    updateDocument,
    fetchPreviewDocument,
    fetchViewDocument,
    forwardDocument,
  }
}

export default useDocument
