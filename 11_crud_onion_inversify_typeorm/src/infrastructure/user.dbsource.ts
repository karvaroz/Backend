import UserEntity from '../domain/user.entity'
import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqllite',
  synchronize: true,
  logging: false,
  entities: [UserEntity],
  migrations: [],
  subscribers: []
})
