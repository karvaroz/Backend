import { Container } from "inversify";
import { SnakeRepository } from "../../domain/repository/snake.repository";
import { SnakeService } from "../../services/snake.services";
import { SNAKE, SNAKESERVICE, BOARDSERVICE, BOARD, PLAYERSERVICE, PLAYER } from './types';
import { BoardService } from '../../services/board.services';
import { BoardRepository } from "../../domain/repository/board.repository";
import { PlayerRepository } from "../../domain/repository/player.repository";
import { PlayerService } from "../../services/player.services";
import SnakeDatabase from "../database/snake/snake.database";
import BoardDatabase from "../database/board/board.database";
import PlayerDatabase from "../database/player/player.database";

export const container = new Container();

container.bind<SnakeRepository>(SNAKESERVICE).to(SnakeService);
container.bind<SnakeRepository>(SNAKE).to(SnakeDatabase);

container.bind<BoardRepository>(BOARDSERVICE).to(BoardService);
container.bind<BoardRepository>(BOARD).to(BoardDatabase);

container.bind<PlayerRepository>(PLAYERSERVICE).to(PlayerService);
container.bind<PlayerRepository>(PLAYER).to(PlayerDatabase);
