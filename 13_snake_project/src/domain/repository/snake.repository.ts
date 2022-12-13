export interface SnakeRepository{
    growSnake(): void;
    moveSnake(): void;
    checkCrash(): Boolean
}