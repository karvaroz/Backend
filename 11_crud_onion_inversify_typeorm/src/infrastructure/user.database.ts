import UserEntity from '../domain/user.entity'
import { AppDataSource } from './user.dbsource'

export default class UserDatabase {
  async readAll (): Promise<UserEntity[] | null> {
    const repository = AppDataSource.getRepository(UserEntity)
    return await repository.find()
  }

  async readById (id: number): Promise<UserEntity | null> {
    const repository = AppDataSource.getRepository(UserEntity)
    return await repository.findOneBy({ id })
  }

  async createUser (user: UserEntity): Promise<UserEntity | null> {
    const repository = AppDataSource.getRepository(UserEntity)
    return await repository.save(user)
  }

  async updateUser (user: UserEntity): Promise<UserEntity | null> {
    const repository = AppDataSource.getRepository(UserEntity)
    return await repository.save(user)
  }

  async deleteUser (id: number): Promise<void> {
    const repository = AppDataSource.getRepository(UserEntity)
    await repository.delete({ id })
  }
}
