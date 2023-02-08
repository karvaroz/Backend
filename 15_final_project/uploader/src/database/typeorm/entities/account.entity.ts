import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export default class AccountEntity {
	@ObjectIdColumn()
	_id!: string;

	@Column({ nullable: false })
	clientId!: string;

	@Column({ nullable: false })
	clientSecret!: string;

	@Column({ nullable: false })
	redirectUri!: string;

	@Column({ nullable: false })
	refreshToken!: string;
}
