interface ITemplateDetail {
  th: string
  en: string
}
export interface ITemplate {
  templateType: string
  title: ITemplateDetail
  description: ITemplateDetail
  isLocked: boolean
  createdAt: Date
  updatedAt: Date | null
}
