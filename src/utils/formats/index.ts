import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

const dateFormatter = (date: Date | string) => {
  return dayjs(date).format('DD/MM/YYYY')
}

const getTimeFromDate = (date: Date | string) => {
  return dayjs(date).format('LT')
}

const formatDateTimeFromDate = (date: Date | string) => {
  return dayjs(date).format('DD/MM/YYYY, LT')
}

const jsonToString = (json: Object) => {
  return JSON.stringify(json)
}

const stringToJson = (string: string) => {
  return JSON.parse(string)
}

const fullNameFormatter = (firstName?: string | null, lastName?: string | null) => {
  if (!firstName || !lastName) return '-'
  return `${firstName} ${lastName}`
}

const fullNameFormatterWithoutPlaceholder = (firstName?: string | null, lastName?: string | null) => {
  if (!firstName || !lastName) return ''
  return `${firstName} ${lastName}`
}
export {
  dateFormatter,
  getTimeFromDate,
  formatDateTimeFromDate,
  jsonToString,
  stringToJson,
  fullNameFormatter,
  fullNameFormatterWithoutPlaceholder,
}
