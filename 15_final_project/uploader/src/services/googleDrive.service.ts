import { drive_v3, google } from "googleapis";
import AccountEntity from "../database/typeorm/entities/account.entity";
import { OAuth2Client } from "google-auth-library";
import path from "path";
import FileEntity from "../database/typeorm/entities/file.entity";
import fs from "fs";

export default class GoogleDriveService {
	private oauth2Client: OAuth2Client;
	private drive: drive_v3.Drive;

	constructor(account: AccountEntity) {
		this.oauth2Client = new google.auth.OAuth2(
			account.clientId,
			account.clientSecret,
			account.redirectUri
		);

		this.oauth2Client.setCredentials({ refresh_token: account.refreshToken });

		this.drive = google.drive({
			version: "v3",
			auth: this.oauth2Client,
		});
	}

	async uploadFile(file: FileEntity) {
		try {
			const filePath = path.join(
				__dirname,
				"..",
				"..",
				`uploadsToGoogle/${file.name}`
            );
            console.log(filePath);
			// const response = await this.drive.files.create({
			// 	requestBody: {
			// 		name: file.name,
			// 		mimeType: file.mimeType,
			// 		driveId: this.oauth2Client._clientId,
			// 	},
			// 	media: {
			// 		mimeType: file.mimeType,
			// 		body: fs.createReadStream(filePath),
			// 	},
			// });
			// console.log(response.data);
			// return response.data;
		} catch (error) {
			throw error;
		}
	}

	//  async deleteFile(file: FileEntity) {
	//      try {
	//          const response = this.drive.files.delete({
	//              driveId: file.driveId,
	//          });
	//          console.log(response.data, response.status);
	//      } catch (error) {
	//          console.log(error.message);
	//      }
	//  }
}
