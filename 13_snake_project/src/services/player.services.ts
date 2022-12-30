import { inject, injectable } from "inversify";
import { Player } from "../domain/entities/player.domain";
import { PlayerRepository } from "../domain/repository/player.repository";
import { PLAYER } from "../infrastructure/inversify/types";

@injectable()
export class PlayerService {
	private playerRepository: PlayerRepository;

	constructor(@inject(PLAYER) playerRepository: PlayerRepository) {
		this.playerRepository = playerRepository;
	}

	async createPlayer(player: Player) {
		return await this.playerRepository.createPlayer(player);
	}

	async getPlayerById(id: number) {
		return await this.playerRepository.getPlayerById(id);
	}

	async updatePlayer(player: Player) {
		return await this.playerRepository.updatePlayer(player);
	}

	async higherScore() {
		return await this.playerRepository.higherScore();
	}
}
