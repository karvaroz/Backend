import { Snake } from "../../../domain/entities/snake.domain";

export default class SnakeEntity implements Snake {
    lives: number;
    score: number;
    length: number;

}