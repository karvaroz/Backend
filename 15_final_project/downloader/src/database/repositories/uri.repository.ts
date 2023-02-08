import { AppDataSource } from "../DBsource";
import UriEntity from "../entities/uri.entity";

const repository = AppDataSource.getRepository(UriEntity);

export class UriRepository {
	async createUri(uri: UriEntity): Promise<UriEntity> {
		return await repository.save(uri);
	}

	async getAllUris(): Promise<UriEntity[]> {
		return await repository.find();
	}

	async getUriById(id: string): Promise<UriEntity | undefined> {
		const result = await repository.findOneBy({
			uriId: id,
		});
		return result ? result : undefined;
	}

	async updateUri(id: string, uri: UriEntity) {
		return await repository.update(id, uri);
	}

	async deleteUri(id: string) {
		return await repository.delete(id);
	}
}
