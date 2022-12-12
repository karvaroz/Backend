import { Column, PrimaryColumn, Entity } from 'typeorm'
import { User } from '../domain/user.domain'

@Entity()
export default class UserEntity implements User {
  @PrimaryColumn()
    id!: number

  @Column()
    name!: string

  @Column()
    lastName!: string

  @Column()
    age!: number

  @Column()
    email!: string

  @Column()
    job!: string
}
