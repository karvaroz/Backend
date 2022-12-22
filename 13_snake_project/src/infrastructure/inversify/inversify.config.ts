import { Container } from "inversify";
import { SNAKE, SNAKESERVICE, BOARDSERVICE, BOARD, PLAYERSERVICE, PLAYER, GAMESERVICE, GAME, FOOD, FOODSERVICE, SNAKEBODYSERVICE, SNAKEBODY } from './types';

import { BoardRepository } from "../../domain/repository/board.repository";
import { PlayerRepository } from "../../domain/repository/player.repository";
import { SnakeRepository } from "../../domain/repository/snake.repository";
import { SnakeBodyRepository } from "../../domain/repository/snakebody.repository";
import { GameRepository } from "../../domain/repository/game.repository";
import { FoodRepository } from "../../domain/repository/food.repository";

import { BoardService } from "../../services/board.services";
import { PlayerService } from "../../services/player.services";
import { GameService } from "../../services/game.services";
import { SnakeService } from "../../services/snake.services";
import { SnakeBodyService } from "../../services/snakeBody.services";
import { FoodService } from "../../services/food.services";

import SnakeDatabase from "../database/snake/snake.database";
import BoardDatabase from "../database/board/board.database";
import PlayerDatabase from "../database/player/player.database";
import GameDatabase from "../database/game/game.database";
import FoodDatabase from "../database/food/food.database";
import SnakeBodyDatabase from "../database/snakeBody/snakeBody.database";


export const container = new Container();

container.bind<SnakeRepository>(SNAKESERVICE).to(SnakeService);
container.bind<SnakeRepository>(SNAKE).to(SnakeDatabase);

container.bind<SnakeBodyRepository>(SNAKEBODYSERVICE).to(SnakeBodyService);
container.bind<SnakeBodyRepository>(SNAKEBODY).to(SnakeBodyDatabase);

container.bind<BoardRepository>(BOARDSERVICE).to(BoardService);
container.bind<BoardRepository>(BOARD).to(BoardDatabase);

container.bind<PlayerRepository>(PLAYERSERVICE).to(PlayerService);
container.bind<PlayerRepository>(PLAYER).to(PlayerDatabase);

container.bind<GameRepository>(GAMESERVICE).to(GameService);
container.bind<GameRepository>(GAME).to(GameDatabase);

container.bind<FoodRepository>(FOODSERVICE).to(FoodService);
container.bind<FoodRepository>(FOOD).to(FoodDatabase);
