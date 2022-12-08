import { Column, PrimaryColumn, Entity } from 'typeorm'

@Entity()
export default class UserEntity {
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
