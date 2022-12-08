import { Container } from 'inversify'
import { TYPES } from './types'
import { UserEntity } from '../entities/user-entity'
import { IUser } from '../interfaces/interfaces'

const myContainer = new Container()

myContainer.bind<IUser>(TYPES.User).to(UserEntity)

export { myContainer }
