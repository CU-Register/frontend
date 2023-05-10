import { IAdminTemplate, ICreateTemplateRequestDTO, IUploadPDFFileResponseDTO } from 'interfaces/Template'
import axiosInstance from 'lib/axios'

const getTemplateForAdmin = async () => {
  const path = 'admin/templates'
  const result: IAdminTemplate[] = (await axiosInstance.get(path)).data
  return result
}

const createTemplate = async (createTemplateDTO: ICreateTemplateRequestDTO) => {
  const path = 'admin/templates'
  await axiosInstance.post(path, { ...createTemplateDTO })
}

const uploadPDFFile = async (file: Blob) => {
  const path = 'admin/templates/file'
  const result: IUploadPDFFileResponseDTO = (await axiosInstance.post(path, file)).data
  return result
}

const adminService = {
  getTemplateForAdmin,
  createTemplate,
  uploadPDFFile,
}

export default adminService
