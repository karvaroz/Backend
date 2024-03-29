import { Request, Response } from "express";
import { FileService } from "../../services/file.service";
import { ResponseMsg } from "../../utils/response";

const fileService = new FileService();

export class FileController {
	async createFile(req: Request, res: Response) {
		try {
			const file = await fileService.createFile(req.body);
			const response = new ResponseMsg(201, "file created successfully", file);
			res.status(response.responseCode).json(response);
		} catch (error) {
			const response = new ResponseMsg(500, "Could not create the file");
			res.status(response.responseCode).json(response);
		}
	}

	async getAllFiles(req: Request, res: Response) {
		try {
			const files = await fileService.getAllFiles();
			const response = new ResponseMsg(200, "Got files successfully", files);
			res.status(response.responseCode).json(response);
		} catch (error) {
			const response = new ResponseMsg(500, "Could not get files");
			res.status(response.responseCode).json(response);
		}
	}

	async getFileById(req: Request, res: Response) {
		const file = await fileService.getFileById(req.params.id);
		if (file) {
			const file = await fileService.getFileById(req.params.id);
			const response = new ResponseMsg(
				200,
				"Got file by id successfully",
				file
			);
			return res.status(response.responseCode).json(response);
		}
		const response = new ResponseMsg(500, "Could not get file");
		return res.status(response.responseCode).json(response);
	}

	async updateFile(req: Request, res: Response) {
		const file = await fileService.getFileById(req.params.id);
		if (file) {
			const fileToUpdate = await fileService.updateFile(
				req.params.id,
				req.body
			);
			const response = new ResponseMsg(
				200,
				"File updated successfully",
				fileToUpdate
			);
			return res.status(response.responseCode).json(response);
		}
		const response = new ResponseMsg(500, "Could not update the file");
		return res.status(response.responseCode).json(response);
	}

	async deleteFile(req: Request, res: Response) {
		try {
			await fileService.deleteFile(req.params.id);
			const response = new ResponseMsg(200, "File deleted successfully");
			res.status(response.responseCode).json(response);
		} catch (error) {
			const response = new ResponseMsg(500, "Could not delete the file");
			res.status(response.responseCode).json(response);
		}
	}
}
