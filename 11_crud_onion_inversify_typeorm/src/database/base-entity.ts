import { PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

export abstract class BaseEntity {
	@PrimaryColumn()
	  id!: number

	@CreateDateColumn({
	  name: 'created_at',
	  type: 'timestamp'
	})
	  createAt!: Date

	@UpdateDateColumn({
	  name: 'update_at',
	  type: 'timestamp'
	})
	  updateAt!: Date
}
