import axiosInstance from 'lib/axios'

const getTemplateForAdmin = async () => {
  const path = 'admin/templates'
  const result = (await axiosInstance.get(path)).data
  return result
}

const adminService = {
  getTemplateForAdmin,
}

export default adminService
