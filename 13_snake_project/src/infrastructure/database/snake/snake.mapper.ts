import { Snake } from "../../../domain/entities/snake.domain";
import SnakeEntity from "../snake/snake.entity";

export class snakeMapper {
	static snakeToEntity(snake: SnakeEntity) {
		const createSnakeEntity: Snake = new Snake();
		createSnakeEntity.snakeId = snake.snakeId;
		createSnakeEntity.snakeLength = snake.snakeLength;
		createSnakeEntity.snakePosition = snake.snakePosition;
		createSnakeEntity.snakeDirection = snake.snakeDirection;
		return createSnakeEntity;
	}
}
