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

export interface IAdminTemplate extends ITemplate {
  fileId: string
  updatedBy: string | null
  createdBy: string | null
}

export interface ICreateTemplateRequestDTO extends Omit<ITemplate, 'createdAt' | 'updatedAt'> {
  fileId: string
}

export interface IUploadPDFFileResponseDTO {
  fileId: string
}
