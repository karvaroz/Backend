import { injectable } from 'inversify'
import UserEntity from './user.entity'
import { UserRepository } from '../domain/user.repository'
import { AppDataSource } from './user.dbsource'

@injectable()
export default class UserDatabase implements UserRepository {
  async readAll () {
    const repository = AppDataSource.getRepository(UserEntity)
    return await repository.find()
  }

  async readById (id: number) {
    const repository = AppDataSource.getRepository(UserEntity)
    return await repository.findOneBy({ id })
  }

  async createUser (user: UserEntity) {
    const repository = AppDataSource.getRepository(UserEntity)
    return await repository.save(user)
  }

  async updateUser (user: UserEntity) {
    const repository = AppDataSource.getRepository(UserEntity)
    return await repository.save(user)
  }

  async deleteUser (id: number) {
    const repository = AppDataSource.getRepository(UserEntity)
    await repository.delete({ id })
  }
}
