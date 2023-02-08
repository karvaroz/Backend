import { AppDataSource } from "../../DBsource";
import FileEntity from "../entities/file.entity";

const repository = AppDataSource.getMongoRepository(FileEntity);

export class FileRepository {
	async createFile(file: FileEntity): Promise<FileEntity> {
		return await repository.save(file);
	}

	async getAllFiles(): Promise<FileEntity[]> {
		return await repository.find();
	}

	async getFileById(id: string) {
		const result = await repository.findOneBy(id);
		return result;
	}

	async updateFile(file: FileEntity) {
		return await repository.save(file);
	}

	async deleteFile(id: string) {
		return await repository.delete(id);
	}
}
