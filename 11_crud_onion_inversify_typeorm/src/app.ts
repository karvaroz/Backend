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
    console.log('[CREATE_USER] ', user)

    const dataAccess = new UserDatabase()
    await dataAccess.createUser(user)
    const users = await dataAccess.readAll()
    console.log('---------------------------------------------------------')
    console.log('[ALL_USER] ', users)
    console.log('---------------------------------------------------------')

    const userLoaded = await dataAccess.readById(5)
    console.log('[READ_USER_BY_ID] ', userLoaded)
    console.log('---------------------------------------------------------')

    if (userLoaded) {
      userLoaded.name = 'Juan'
      dataAccess.updateUser(userLoaded)
      console.log('[UPDATED_USER] ', userLoaded)
    }
    console.log('---------------------------------------------------------')

    dataAccess.deleteUser(6)
    console.log('[DELETED_USER] ', userLoaded)
  }
}

new Test().initializeDb()
