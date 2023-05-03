import { IDocument } from 'interfaces/Document'
import axiosInstance from 'lib/axios'

const getHoldingDocuments = async () => {
  const path = 'documents/holding'
  const result: IDocument[] = (await axiosInstance.get(path)).data
  return result
}

const getHistoryDocuments = async () => {
  const path = 'documents/history'
  const result: IDocument[] = (await axiosInstance.get(path)).data
  return result
}

const createDocument = async (templateType: string) => {
  const path = 'documents'
  const result = (await axiosInstance.post(path, { templateType })).data
  return result
}

const deleteDraftDocument = async (documentId: string) => {
  const path = 'documents'
  const result = (await axiosInstance.delete(path, { params: { documentId } })).data
  return result
}

const documentService = {
  getHoldingDocuments,
  getHistoryDocuments,
  createDocument,
  deleteDraftDocument,
}
export default documentService
