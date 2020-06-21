import axios from 'axios'

axios.defaults.baseURL = 'https://crud-api-no.herokuapp.com/'
// axios.defaults.baseURL = 'http://localhost:4000/'

axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

axios.interceptors.request.use(
  (config) => {
    return { ...config, headers: { 'Content-Type': 'application/json' } }
  },

  (error) => {
    const { status } = error.response

    if (status === 401) {
    }
    return Promise.reject(error)
  }
)

const api = axios

export default api
