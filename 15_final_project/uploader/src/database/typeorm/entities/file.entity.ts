import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export default class FileEntity {
	@ObjectIdColumn()
	_id!: string;

	@Column({ nullable: false })
	name!: string;

	@Column({ nullable: false })
	size!: string;

	@Column({ nullable: false })
	driveId!: string;

	@Column({ nullable: false })
	status!: string;
}
