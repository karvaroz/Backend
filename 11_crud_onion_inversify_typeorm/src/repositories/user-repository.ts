import { AppDataSource } from '../database/db-source'
import { UserEntity } from '../entities/user-entity'

export default class UserRepository {
  async ReadUserById (id: number) {
    const repository = AppDataSource.getRepository(UserEntity)
    return await repository.findOneBy({ id })
  }

  async CreateNewUser (user: UserEntity) {
    const repository = AppDataSource.getRepository(UserEntity)
    await repository.save(user)
  }

  async update (user: UserEntity) {
    const repository = AppDataSource.getRepository(UserEntity)
    await repository.save(user)
  }

  async delete (id: number) {
    const repository = AppDataSource.getRepository(UserEntity)
    return await repository.delete({ id })
  }
}
