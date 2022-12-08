import { injectable } from 'inversify'
import { DeleteResult } from 'typeorm'
import { AppDataSource } from '../database/db-source'
import { UserEntity } from '../entities/user-entity'

@injectable()
export default class UserService<UserEntity> {
  async readAllUsers (): Promise<UserEntity[]> {
    const repository = AppDataSource.getRepository(UserEntity)
    return await repository.find()
  }

  async readUserById (id: number) {
    const repository = AppDataSource.getRepository(UserEntity)
    return await repository.findOneBy({ id });
  }

  async createNewUser (user: UserEntity) {
    const repository = AppDataSource.getRepository(UserEntity)
    return await repository.save(user)
  }

  async deleteUser (id: number): Promise<DeleteResult> {
    const repository = AppDataSource.getRepository(UserEntity)
    return await repository.delete(id)
  }

  async udpdateUser (user: UserEntity) {
    const repository = AppDataSource.getRepository(UserEntity)
    return await repository.save(user)
  }
}
