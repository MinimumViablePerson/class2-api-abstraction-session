import { useEffect, useState } from 'react'
import * as API from './api'
import { Company, Employee } from './types'

import './App.css'

function App () {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [companies, setCompanies] = useState<Company[]>([])

  useEffect(() => {
    API.getResource('employees').then(setEmployees)
    API.getResource('companies').then(setCompanies)
  }, [])

  return (
    <div className='App'>
      <ul>
        {employees.map((employee: any) => (
          <li key={employee.id}>
            <h2>Name: {employee.name}</h2>
            <h3>Email: {employee.email}</h3>
            <h3>Company: {employee.company.name}</h3>
            <button
              onClick={() => {
                API.fire(employee.email).then(() => {
                  API.getResource('employees').then(setEmployees)
                })
              }}
            >
              🦵🏻
            </button>
          </li>
        ))}
      </ul>

      <ul>
        {companies.map(company => (
          <li key={company.id}>
            <h2>Name: {company.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
