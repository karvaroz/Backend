import { AppDataSource } from "../../DBsource";
import FileEntity from "../entities/file.entity";

export class FileRepository {
	async createFile(file: FileEntity): Promise<FileEntity> {
		const repository = AppDataSource.getMongoRepository(FileEntity);
		return await repository.save(file);
	}

	async getAllFiles(): Promise<FileEntity[]> {
		const repository = AppDataSource.getMongoRepository(FileEntity);
		return await repository.find();
	}

	async getFileById(id: string): Promise<FileEntity | undefined> {
		const repository = AppDataSource.getMongoRepository(FileEntity);
		const result = await repository.findOne({
			where: {
				_id: id,
			},
		});
		return result ? result : undefined;
	}

	async updateFile(id: string, file: FileEntity) {
		const repository = AppDataSource.getMongoRepository(FileEntity);
		return await repository.update(id, file);
	}

	async deleteFile(id: string) {
		const repository = AppDataSource.getMongoRepository(FileEntity);
		return await repository.delete(id);
	}
}
