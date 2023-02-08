import { FileRepository } from "../database/typeorm/repositories/file.repository";
import FileEntity from "../database/typeorm/entities/file.entity";

export class FileService {
	private fileRepository: FileRepository;

	constructor() {
		this.fileRepository = new FileRepository();
	}

	async createFile(file: FileEntity) {
		return await this.fileRepository.createFile(file);
	}

	async getAllFiles() {
		return await this.fileRepository.getAllFiles();
	}

	async getFileById(id: string) {
		return await this.fileRepository.getFileById(id);
	}

	async updateFile(id: string, file: FileEntity) {
		return await this.fileRepository.updateFile(id, file);
	}

	async deleteFile(id: string) {
		return await this.fileRepository.deleteFile(id);
	}
}
