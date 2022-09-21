import { Employee, HireData, Resource } from './types'

const port = 5678

const baseUrl = `http://localhost:${port}`

function request (url: string, options: RequestInit = {}) {
  options.headers = options.headers || {}
  // @ts-ignore
  options.headers.Authorization = localStorage.token

  return fetch(url, options).then(resp => resp.json())
}

function get (url: string) {
  return request(url)
}

function post (url: string, data: object) {
  return request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

function update (url: string, data: object) {
  return request(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

function destroy (url: string) {
  return request(url, {
    method: 'DELETE'
  })
}

export function getResource (resourceName: Resource) {
  return get(`${baseUrl}/${resourceName}`)
}

export function hire (employeeData: HireData) {
  return post(`${baseUrl}/hire`, employeeData)
}

export function fire (email: string) {
  return destroy(`${baseUrl}/fire/${email}`)
}

export function updateEmployee (employeeData: Employee) {
  return update(`${baseUrl}/employees/${employeeData}`, employeeData)
}
