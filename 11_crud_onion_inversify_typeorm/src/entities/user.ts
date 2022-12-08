import { UserInterface } from '../interfaces/user-interface'

export class UserEntity implements UserInterface {
  public name: string
  public lastName: string
  public age: number

  public constructor (name: string, lastName: string, age: number) {
    this.name = name
    this.lastName = lastName
    this.age = age
  }
}
