import dayjs from 'dayjs'

const dateFormatter = (date: Date) => {
  return dayjs(date).format('DD/MM/YYYY')
}

const jsonToString = (json: Object) => {
  return JSON.stringify(json)
}

const stringToJson = (string: string) => {
  return JSON.parse(string)
}

export { dateFormatter, jsonToString, stringToJson }
