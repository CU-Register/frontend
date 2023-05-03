import templateService from 'services/template.service'
import { useTemplateStore } from 'stores/template.store'

const useTemplate = () => {
  const templateStore = useTemplateStore()

  const fetchTemplates = async () => {
    try {
      const templates = await templateService.getTemplates()
      templateStore.setTemplates(templates)
    } catch {
      console.error('fetchTemplates error')
    }
  }

  return { fetchTemplates }
}
export default useTemplate
