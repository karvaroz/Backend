import { UserEntity } from '../entities/user-entity'

export interface IUserRepository<T> {
  readAllUsers(): Promise<UserEntity[]>;
  readUserById(id: number): Promise<UserEntity>;
  createNewUser(user: UserEntity): Promise<T>;
  deleteUser(id: number): Promise<T>;
  udpdateUser(): Promise<T>;
}

export interface IUser {
  id: number;
  name: string;
  lastName: string
  email: string
  age: number
}
