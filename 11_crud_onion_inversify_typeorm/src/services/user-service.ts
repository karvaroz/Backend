import { UserRepository } from '../domain/user.repository'
import { inject } from 'inversify'
import { USER } from '../infrastructure/types'
import UserEntity from '../domain/user.entity'

export class UserService {
  private userRepository: UserRepository

  constructor (@inject(USER) userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async readAll (): Promise<UserEntity[] | null> {
    return await this.userRepository.readAll()
  }

  async readById (id: number): Promise<UserEntity | null> {
    return await this.userRepository.readById(id)
  }

  async createUser (user: UserEntity): Promise<UserEntity | null> {
    return await this.userRepository.createUser(user)
  }

  async updateUser (user: UserEntity): Promise<UserEntity | null> {
    return await this.userRepository.updateUser(user)
  }

  async deleteUser (id: number): Promise<void> {
    return this.userRepository.deleteUser(id)
  }
}
