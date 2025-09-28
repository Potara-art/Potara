import { post } from './api.js'

export const login = async (email, password) => {
  return await post('/auth/login', { email, password })
}

export const register = async (username, email, password) => {
  return await post('/auth/register', { username, email, password })
}

export const logout = async () => {
  return await post('/auth/logout')
}