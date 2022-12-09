import 'reflect-metadata'

import UserEntity from './domain/user.entity'
import { AppDataSource } from './infrastructure/user.dbsource'
import UserDatabase from './infrastructure/user.database'

class Test {
  async initializeDb () {
    await AppDataSource.initialize()

    const user = new UserEntity()
    user.name = 'Camila'
    user.lastName = 'Nose'
    user.email = 'camila@gmail.com'
    user.age = 30
    user.job = 'dancer'
    console.log('[CREATE_USER] ', JSON.stringify(user))

    const dataAccess = new UserDatabase()
    await dataAccess.createUser(user)
    const users = await dataAccess.readAll()
    console.log('---------------------------------------------------------')
    console.log('[ALL_USER] ', JSON.stringify(users))
    console.log('---------------------------------------------------------')

    const userLoaded = await dataAccess.readById(5)
    console.log('[READ_USER_BY_ID] ', JSON.stringify(userLoaded))
    console.log('---------------------------------------------------------')

    if (userLoaded) {
      userLoaded.name = 'Juan'
      dataAccess.updateUser(userLoaded)
      console.log('[UPDATED_USER] ', JSON.stringify(userLoaded))
    }
    console.log('---------------------------------------------------------')

    dataAccess.deleteUser(9)
    console.log('[DELETED_USER] ', JSON.stringify(userLoaded))
  }
}

new Test().initializeDb()
