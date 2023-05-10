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

  return { fetchTemplateForAdmin }
}

export default useAdmin
