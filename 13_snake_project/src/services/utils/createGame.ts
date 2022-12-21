// import { inject, injectable } from "inversify";

// import { Board } from "../../domain/entities/board.domain";
// import { Food } from "../../domain/entities/food.domain";
// import { Game } from "../../domain/entities/game.domain";
// import { Player } from "../../domain/entities/player.domain";
// import { Snake } from "../../domain/entities/snake.domain";

// import { BoardRepository } from "../../domain/repository/board.repository";
// import { FoodRepository } from "../../domain/repository/food.repository";
// import { PlayerRepository } from "../../domain/repository/player.repository";
// import { SnakeRepository } from "../../domain/repository/snake.repository";
// import {
// 	BOARD,
// 	FOOD,
// 	PLAYER,
// 	SNAKE,
// } from "../../infrastructure/inversify/types";

// import GenerateRandomNumber from "./generateRandomNumber";

// const generateNumber = new GenerateRandomNumber().randomNumber;

// @injectable()
// export default class CreateGameFunction {
// 	private boardRepository: BoardRepository;
// 	private foodRepository: FoodRepository;
// 	private snakeRepository: SnakeRepository;
// 	private playerRepository: PlayerRepository;

// 	constructor(
// 		@inject(BOARD) boardRepository: BoardRepository,
// 		@inject(FOOD) foodRepository: FoodRepository,
// 		@inject(SNAKE) snakeRepository: SnakeRepository,
// 		@inject(PLAYER) playerRepository: PlayerRepository
// 	) {
// 		this.snakeRepository = snakeRepository;
// 		this.playerRepository = playerRepository;
// 		this.boardRepository = boardRepository;
// 		this.foodRepository = foodRepository;
// 	}
// 	async generateGame(size: number): Promise<Game> {
// 		const board = await this.boardRepository.createBoard(new Board(1, size));
// 		const snake = await this.snakeRepository.createSnake(
// 			new Snake(1, 1, generateNumber(10), generateNumber(7), "UP")
// 		);
// 		const food = await this.foodRepository.generateFood(
// 			new Food(1, generateNumber(5), generateNumber(7))
// 		);
// 		const player = await this.playerRepository.createPlayer(
// 			new Player(1, "name", 0)
// 		);

//         const game = new Game(
//             1,
//             snake.snakeId,
//             food.idFood,
//             board.boardId,
//             player.playerId,
//             "Ready to start"
//         );
// 		return game
// 	}
// }
