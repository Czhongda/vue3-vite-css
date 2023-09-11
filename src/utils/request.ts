import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_URL
const service = axios.create({
  baseURL,
  timeout: 5000
})

export default service