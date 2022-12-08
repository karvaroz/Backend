import 'reflect-metadata'

import UserEntity from './domain/user.entity'
import { AppDataSource } from './infrastructure/user.dbsource'
import UserDatabase from './infrastructure/user.database'

class Test {
  async initializeDb () {
    await AppDataSource.initialize()

    const user = new UserEntity()
    user.name = 'Juanes'
    user.lastName = 'Nose'
    user.email = 'juanes@gmail.com'
    user.age = 20
    user.job = 'singer'

    const dataAccess = new UserDatabase()
    await dataAccess.createUser(user)

    const userLoaded = await dataAccess.readById(1)

    if (userLoaded) {
      userLoaded.age = 30
      dataAccess.updateUser(userLoaded)
    }

     dataAccess.deleteUser(1)
  }
}

new Test().initializeDb()
