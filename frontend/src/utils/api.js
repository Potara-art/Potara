const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api'

const request = async (url, options = {}) => {
  const response = await fetch(url, {
    credentials: 'include',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      ...options.headers,
    },
    ...options,
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || 'Request failed')
  }

  return data
}

export const get = (endpoint) => {
  return request(`${API_BASE_URL}${endpoint}`)
}

export const post = (endpoint, body) => {
  return request(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(body),
  })
}

export const put = (endpoint, body) => {
  return request(`${API_BASE_URL}${endpoint}`, {
    method: 'PUT',
    body: JSON.stringify(body),
  })
}

export const del = (endpoint) => {
  return request(`${API_BASE_URL}${endpoint}`, {
    method: 'DELETE',
  })
}