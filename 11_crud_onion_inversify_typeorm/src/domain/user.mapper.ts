import UserEntity from './user.entity'

export class UserMapper implements UserEntity {
  id: number
  name: string
  lastName: string
  age: number
  email: string
  job: string

  constructor (
    id: number,
    name: string,
    lastName: string,
    age: number,
    email: string,
    job: string
  ) {
    this.id = id
    this.name = name
    this.lastName = lastName
    this.age = age
    this.email = email
    this.job = job
  }
}
