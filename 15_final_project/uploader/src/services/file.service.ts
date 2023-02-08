import { FileRepository } from "../database/typeorm/repositories/file.repository";
import FileEntity from "../database/typeorm/entities/file.entity";
import GoogleDriveService from "./googleDrive.service";
import { AccountService } from "./account.service";
import AccountEntity from "../database/typeorm/entities/account.entity";
import { FileStatusType } from "../utils/types";
import { RabbitMQService } from "./rabbitmq.service";

export class FileService {
	private fileRepository: FileRepository;
	private accountService: AccountService;
	// private googleDriveService: GoogleDriveService

	constructor() {
		this.fileRepository = new FileRepository();
		// this.googleDriveService = new GoogleDriveService()
		this.accountService = new AccountService();
	}

	async createFile(
		file: FileEntity
	): Promise<{ fileId: string; fileStatus: string }> {
		const fileId = await this.fileRepository.createFile(file);
		console.log(file)
		await this.setUploadToDrive(file);
		const response = { fileId: fileId, fileStatus: file.status };
		new RabbitMQService().sendMsgToQueue(
			"Starts Service",
			"A file has been created"
		);
		return response;
	}

	async getAllFiles() {
		new RabbitMQService().sendMsgToQueue(
			"Starts Service",
			"Signal sent from Updloader - All files has been requested"
		);
		return await this.fileRepository.getAllFiles();
	}

	async getFileById(id: string) {
		const file = await this.fileRepository.getFileById(id);
		if (file) {
			new RabbitMQService().sendMsgToQueue(
				"Starts Service",
				"Signal sent from Updloader - A file has been requested by id"
			);
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
				mimeType: file.mimeType,
			};
			new RabbitMQService().sendMsgToQueue(
				"Starts Service",
				"Signal sent from Updloader - A file has been updated"
			);
			return await this.fileRepository.updateFile(fileInfo);
		}
	}

	async deleteFile(id: string) {
		new RabbitMQService().sendMsgToQueue(
			"Starts Service",
			"Signal sent from Updloader - A file has been deleted"
		);
		return await this.fileRepository.deleteFile(id);
	}

	async setUploadToDrive(file: FileEntity) {
		const googleAccounts = await this.accountService.getAllAccounts();
		if (googleAccounts) {
			googleAccounts.map(async (account) => {
				await this.uploadFileToDrive(account, file);
			});
		}

	}

	async uploadFileToDrive(account: AccountEntity, file: FileEntity) {
		try {
			const driveService = new GoogleDriveService(account);
			const uploadResponse = await driveService.uploadFile(file);
			console.log(uploadResponse);
			new RabbitMQService().sendMsgToQueue(
				"Starts Service",
				"Signal sent from Updloader - A file has been sent to Google Drive"
			);
		} catch (error) {
			throw error;
		}
	}

	// async setDeleteOnDrive(file: FileEntity) {
	// 	const googleAccounts = await this.accountService.getAllAccounts();
	// 	googleAccounts.map(async (account) => {
	// 		await this.deleteFileOnDrive(account, file);
	// 	});
	// 	console.log('Setting Delete file on drive')
	//  }

	// async deleteFileOnDrive(id: string, account: AccountEntity) {
	// 	try {
	// 		const driveService = new GoogleDriveService(account);
	// 		const uploadResponse = await driveService.deleteFileOnDrive(id)
	// 		console.log(uploadResponse);
	// 	} catch (error) {
	// 		throw error
	// 	}
	// }
}
