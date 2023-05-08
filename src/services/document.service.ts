import { IDocument, IDocumentInfo } from 'interfaces/Document'
import axiosInstance from 'lib/axios'

const getHoldingDocuments = async () => {
  const path = 'documents'
  const result: IDocument[] = (
    await axiosInstance.get(path, {
      params: {
        query: 'holding',
      },
    })
  ).data
  return result
}

const getHistoryDocuments = async () => {
  const path = 'documents'
  const result: IDocument[] = (
    await axiosInstance.get(path, {
      params: {
        query: 'history',
      },
    })
  ).data
  return result
}

const createDocument = async (templateType: string) => {
  const path = 'documents'
  const result = (await axiosInstance.post(path, { templateType })).data
  return result
}

const updateDocument = async (documentId: string, file: Blob) => {
  const path = `documents/${documentId}`
  await axiosInstance.putForm(path, { file })
}

const deleteDraftDocument = async (documentId: string) => {
  const path = `documents/${documentId}`
  const result = (await axiosInstance.delete(path)).data
  return result
}

const getDocumentInfo = async (documentId: string) => {
  const path = `documents/${documentId}/info`
  const result: IDocumentInfo = (await axiosInstance.get(path)).data
  return result
}

const getDocumentForm = async (documentId: string) => {
  const path = `documents/${documentId}/form`
  const result: Blob = (await axiosInstance.get(path, { responseType: 'blob' })).data
  return result
}

// TODO: update this
const getPreviewDocument = async (documentId: string) => {
  const path = `documents/${documentId}/preview`
  const result: Blob = (await axiosInstance.get(path, { responseType: 'blob' })).data
  return result
}

const forwardDocument = async (documentId: string, targetId: string) => {
  const path = `documents/${documentId}/forward`
  await axiosInstance.put(path, { targetId })
}

const documentService = {
  getHoldingDocuments,
  getHistoryDocuments,
  createDocument,
  updateDocument,
  deleteDraftDocument,
  getDocumentInfo,
  getDocumentForm,
  getPreviewDocument,
  forwardDocument,
}
export default documentService
