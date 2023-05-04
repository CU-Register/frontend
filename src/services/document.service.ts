import { IDocument } from 'interfaces/Document'
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

const deleteDraftDocument = async (documentId: string) => {
  const path = `documents/${documentId}`
  const result = (await axiosInstance.delete(path)).data
  return result
}

const getDocumentForm = async (documentId: string) => {
  const path = `documents/${documentId}/form`
  const result: Blob = (await axiosInstance.get(path, { responseType: 'blob' })).data
  return result
}

const documentService = {
  getHoldingDocuments,
  getHistoryDocuments,
  createDocument,
  deleteDraftDocument,
  getDocumentForm,
}
export default documentService
