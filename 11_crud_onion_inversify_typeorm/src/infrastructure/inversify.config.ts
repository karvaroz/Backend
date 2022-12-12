import { Container } from 'inversify'
import { USER, USERSERVICE } from './types'
import { UserRepository } from '../domain/user.repository'
import { UserService } from '../services/user-service'
import UserDatabase from './user.database'

export const container = new Container()

container.bind<UserRepository>(USERSERVICE).to(UserService)
container.bind<UserRepository>(USER).to(UserDatabase)
