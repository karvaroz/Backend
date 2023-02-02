import { DataSource } from 'typeorm'
export const AppDataSource = new DataSource({
  type: 'mongodb',
  host: '127.0.0.1',
  port: 27017,
  database: 'uploaderDB',
  synchronize: true,
  logging: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  entities: [],
  migrations: [],
  subscribers: []
})
