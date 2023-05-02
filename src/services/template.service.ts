import { ITemplate } from 'interfaces/Request'
import axiosInstance from 'lib/axios'

const getTemplates = async () => {
  const path = 'templates'
  const result: ITemplate[] = (await axiosInstance.get(path)).data
  return result
}

const templateService = {
  getTemplates,
}

export default templateService
