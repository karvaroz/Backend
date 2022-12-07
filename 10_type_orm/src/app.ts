import "reflect-metadata"

import PhotoDataAccess from "./data-access";
import { AppDataSource } from "./data-source";
import Photo from "./entities/photo";

class Test {
	async initializeDB() {
		await AppDataSource.initialize()

		const photo = new Photo()
		photo.name = "123"
		photo.description = "description"
		photo.fileName = "123.jpg";

		const dataAccess = new PhotoDataAccess()
		await dataAccess.create(photo); 

		const photoLoaded = await dataAccess.read(1)
		console.log(photo);

		photo.description = "UPDATED"

		// dataAccess.update(photoLoaded);
		dataAccess.delete(1)
	}
}

new Test().initializeDB();