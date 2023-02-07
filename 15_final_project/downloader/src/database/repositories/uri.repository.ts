import { AppDataSource } from "../DBsource";
import UriEntity from "../entities/uri.entity";

export class UriRepository {
	async createUri(uri: UriEntity): Promise<UriEntity> {
		const repository = AppDataSource.getMongoRepository(UriEntity);
		return await repository.save(uri);
	}

	async getAllUris(): Promise<UriEntity[]> {
		const repository = AppDataSource.getMongoRepository(UriEntity);
		return await repository.find();
	}

	async getUriById(id: string): Promise<UriEntity | undefined> {
		const repository = AppDataSource.getMongoRepository(UriEntity);
		const result = await repository.findOne({
			where: {
				_id: id,
			},
		});
		return result ? result : undefined;
	}

	async updateUri(id: string, uri: UriEntity) {
		const repository = AppDataSource.getMongoRepository(UriEntity);
		return await repository.update(id, uri);
	}

	async deleteUri(id: string) {
		const repository = AppDataSource.getMongoRepository(UriEntity);
		return await repository.delete(id);
	}
}
