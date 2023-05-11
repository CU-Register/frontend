import { ICreateTemplateRequestDTO } from 'interfaces/Template'
import adminService from 'services/admin.service'
const useAdmin = () => {
  const fetchTemplateForAdmin = async () => {
    try {
      const adminTemplate = await adminService.getTemplateForAdmin()
      return adminTemplate
    } catch (error) {
      throw new Error(`fetchTemplateForAdmin error: ${error}`)
    }
  }
  const createNewTemplate = async (file: File, createTemplateDTO: ICreateTemplateRequestDTO) => {
    try {
      const { fileId } = await adminService.uploadPDFFile(file)
      await adminService.createTemplate({ ...createTemplateDTO, fileId })
    } catch (error) {
      throw new Error(`createNewTemplate error: ${error}`)
    }
  }

  return { fetchTemplateForAdmin, createNewTemplate }
}

export default useAdmin
