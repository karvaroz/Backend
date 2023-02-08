import { DataSource } from 'typeorm'
import AccountEntity from './typeorm/entities/account.entity';
import FileEntity from './typeorm/entities/file.entity';

export const AppDataSource = new DataSource({
  type: 'mongodb',
  host: '127.0.0.1',
  port: 27017,
  database: 'UploaderDB',
  synchronize: true,
  logging: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  entities: [AccountEntity, FileEntity],
  migrations: [],
  subscribers: []
})
