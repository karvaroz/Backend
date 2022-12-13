import { Container } from "inversify";
import { SnakeRepository } from "../../domain/repository/snake.repository";
import { SnakeService } from "../../services/snake.services";
import { SNAKE, SNAKESERVICE } from "./types";

export const container = new Container();

container.bind<SnakeRepository>(SNAKESERVICE).to(SnakeService);
container.bind<SnakeRepository>(SNAKE).to(SnakeService);
