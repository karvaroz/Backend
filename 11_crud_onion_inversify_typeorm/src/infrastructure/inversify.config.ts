import { Container } from 'inversify'

import { USER } from './types'

import UserEntity from '../domain/user.entity'

export const container = new Container()

container.bind(USER).to(UserEntity)
