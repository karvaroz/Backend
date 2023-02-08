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
		const file = await this.fileRepository.getFileById(id);
		if (file) {
			return file;
		}
	}

	async updateFile(id: string, file: FileEntity) {
		const fileToUpdate = await this.fileRepository.getFileById(id);
		if (fileToUpdate) {
			const fileInfo: FileEntity = {
				_id: fileToUpdate._id,
				name: file.name,
				size: file.size,
				driveId: file.driveId,
				status: file.status,
			};
			return await this.fileRepository.updateFile(fileInfo);
		}
	}

	async deleteFile(id: string) {
		return await this.fileRepository.deleteFile(id);
	}
}
