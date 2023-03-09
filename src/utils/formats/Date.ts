import dayjs from 'dayjs'

const dateFormatter = (date: Date) => {
  return dayjs(date).format('DD/MM/YYYY')
}

export { dateFormatter }
