import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class UriEntity {

	@PrimaryGeneratedColumn("uuid")
	uriId!: string;

	@Column()
	uriDirection!: string;
}
