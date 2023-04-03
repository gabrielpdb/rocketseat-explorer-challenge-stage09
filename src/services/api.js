import axios from 'axios'

const backendAddress = '192.168.0.105:3331'

export const api = axios.create({ baseURL: `http://${backendAddress}` })
