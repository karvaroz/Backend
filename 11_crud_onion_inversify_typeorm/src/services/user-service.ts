import { UserRepository } from '../domain/user.repository'
import { inject, injectable } from 'inversify'
import { USER } from '../infrastructure/types'
import UserEntity from '../infrastructure/user.entity'
// import { container } from '../infrastructure/inversify.config'

@injectable()
export class UserService implements UserRepository {
  private userRepository: UserRepository

  constructor (@inject(USER) userRepository: UserRepository) {
    this.userRepository = userRepository
  }
  //  userService: UserRepository = container.get<UserRepository>(USER)

  async readAll () {
    return await this.userRepository.readAll()
  }

  async readById (id: number) {
    return await this.userRepository.readById(id)
  }

  async createUser (user: UserEntity) {
    return await this.userRepository.createUser(user)
  }

  async updateUser (user: UserEntity) {
    return await this.userRepository.updateUser(user)
  }

  async deleteUser (id: number) {
    return this.userRepository.deleteUser(id)
  }
}
