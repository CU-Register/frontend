import { IUser } from 'interfaces/User'
import documentService from 'services/document.service'
import userService from 'services/user.service'
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
      const result = await documentService.createDocument(templateType)
      return result
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

  const fetchDocumentInfo = async (documentId: string) => {
    try {
      const documentInfo = await documentService.getDocumentInfo(documentId)
      return documentInfo
    } catch (error) {
      throw new Error(`fetchDocumentInfo error: ${error}`)
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

  const fetchTargets = async (query: string) => {
    try {
      const targets = await userService.getUsers(query || '')
      documentStore.setTargets(targets)
    } catch (error) {
      throw new Error(`fetchTargets error: ${error}`)
    }
  }
  const updateSelectedTarget = (target: IUser) => {
    documentStore.setSelectedTarget(target)
  }

  return {
    fetchHoldingDocuments,
    fetchHistoryDocuments,
    createDocument,
    deleteDraftDocument,
    fetchDocumentInfo,
    fetchDocumentForm,
    updateDocument,
    fetchPreviewDocument,
    fetchViewDocument,
    forwardDocument,
    fetchTargets,
    updateSelectedTarget,
  }
}

export default useDocument
