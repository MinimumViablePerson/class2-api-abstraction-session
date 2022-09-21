export type Employee = {
  id: number
  name: string
  email: string
  role: string
  company: Company
  companyId: number
  interviews: Interview[]
}

export type Company = {
  id: number
  name: String
  employees: Employee[]
}

export type Interview = {
  id: number
  interviewee?: Interviewee
  intervieweeId: number
  interviewer?: Employee
  interviewerId: number
  date: string
}

export type Interviewee = {
  id: number
  name: string
  email: string
  interviews: Interview[]
}

export type HireData = {
  intervieweeEmail: string
  companyName: string
  role: string
}

export type Resource = 'employees' | 'interviewees' | 'companies'
