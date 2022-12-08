import { Column, Entity } from 'typeorm'
import { BaseEntity } from '../database/base-entity'

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
 @Column()
   name!: string

 @Column()
   lastName!: string

 @Column()
   email!: string

  @Column()
    age!: number
}
