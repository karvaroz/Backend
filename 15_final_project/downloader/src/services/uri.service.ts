import { UriRepository } from "../database/repositories/uri.repository";
import UriEntity from "../database/entities/uri.entity";

export class UriService {
	private uriRepository: UriRepository;

	constructor(uriRepository: UriRepository) {
		this.uriRepository = uriRepository;
	}

	async createUri(uri: UriEntity) {
		return await this.uriRepository.createUri(uri);
	}

	async getAllUris() {
		return await this.uriRepository.getAllUris();
	}

	async getUriById(id: string) {
		return await this.uriRepository.getUriById(id);
	}

	async updateUri(id: string, uri: UriEntity) {
		return await this.uriRepository.updateUri(id, uri);
	}

	async deleteUri(id: string) {
		return await this.uriRepository.deleteUri(id);
	}
}
