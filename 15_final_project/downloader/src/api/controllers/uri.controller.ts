import { Request, Response } from "express";

export class UriController {
	async createUri(req: Request, res: Response) {
		res.status(200).send("createUri request successful");
	}

	async getAllUris(req: Request, res: Response) {
		res.status(200).send("getAllUris request successful");
	}

	async getUriById(req: Request, res: Response) {
		res.status(200).send("getUriById request successful");
	}

	async updateUri(req: Request, res: Response) {
		res.status(200).send("updateUri request successful");
	}

	async deleteUri(req: Request, res: Response) {
		res.status(200).send("deleteUri request successful");
	}
}
