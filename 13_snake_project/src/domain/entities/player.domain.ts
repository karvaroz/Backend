export class Player {
	playerId!: number;
	name!: string;
	score!: number;

	constructor(playerId: number, name: string, score: number) {
		this.playerId = playerId;
		this.name = name;
		this.score = score;
	}
}
