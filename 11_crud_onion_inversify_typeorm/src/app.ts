import 'reflect-metadata'
import { container } from './infrastructure/inversify.config'
import { UserRepository } from './domain/user.repository'
// import { UserService } from './services/user-service'
import { AppDataSource } from './infrastructure/user.dbsource'
// import { UserService } from './services/user-service'
import { USERSERVICE } from './infrastructure/types'

class Run {
  async init () {
    const USERS = container.get<UserRepository>(USERSERVICE)
    await AppDataSource.initialize()
    // console.log(USERS.deleteUser(15))

    console.log(USERS.createUser({
      name: 'johntest',
      lastName: 'johntest',
      age: 1,
      email: 'johntest@gmail.com',
      job: 'johntest',
      id: 0
    }))
  }
}

new Run().init()

// class Test {
//   async initializeDb () {

//     const user = new UserEntity()
//     user.name = 'JUANES'
//     user.lastName = 'Nose'
//     user.email = 'camila@gmail.com'
//     user.age = 30
//     user.job = 'dancer'
//     console.log('[CREATE_USER] ', user)

//     const dataAccess = new UserDatabase()
//     await dataAccess.createUser(user)
//     const users = await dataAccess.readAll()
//     console.log('---------------------------------------------------------')
//     console.log('[ALL_USER] ', users)
//     console.log('---------------------------------------------------------')

//     const userLoaded = await dataAccess.readById(7)
//     console.log('[READ_USER_BY_ID] ', userLoaded)
//     console.log('---------------------------------------------------------')

//     if (userLoaded) {
//       userLoaded.name = 'JHON'
//       dataAccess.updateUser(userLoaded)
//       console.log('[UPDATED_USER] ', userLoaded)
//     }
//     console.log('---------------------------------------------------------')

//     dataAccess.deleteUser(14)
//     console.log('[DELETED_USER] ', userLoaded)
//   }
// }
