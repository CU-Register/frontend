import axiosInstance from 'lib/axios'

const getTemplate = async () => {
  const path = 'templates'
  const result = (await axiosInstance.get(path)).data
  console.log('getTemplate result:', result)

  return result
}
