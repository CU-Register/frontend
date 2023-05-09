import { ICreateDocumentResponseDTO, IDocument, IDocumentInfo, IDocumentSummary } from 'interfaces/Document'
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

const getDocumentSummary = async () => {
  const path = '/documents/summary'
  const result: IDocumentSummary = (await axiosInstance.get(path)).data
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
  const result: ICreateDocumentResponseDTO = (await axiosInstance.post(path, { templateType })).data
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

const previewDocument = async (documentId: string, file: Blob) => {
  const path = `documents/${documentId}/preview`
  const result: Blob = (await axiosInstance.postForm(path, { file }, { responseType: 'blob' })).data
  return result
}

const getViewDocument = async (documentId: string) => {
  const path = `documents/${documentId}/view`
  const result: Blob = (await axiosInstance.get(path, { responseType: 'blob' })).data
  return result
}

const forwardDocument = async (documentId: string, targetId: string, file: Blob) => {
  const path = `documents/${documentId}/forward`
  await axiosInstance.putForm(path, { target_id: targetId, file })
}

const documentService = {
  getHoldingDocuments,
  getHistoryDocuments,
  createDocument,
  updateDocument,
  deleteDraftDocument,
  getDocumentInfo,
  getDocumentForm,
  previewDocument,
  getViewDocument,
  forwardDocument,
  getDocumentSummary,
}
export default documentService
