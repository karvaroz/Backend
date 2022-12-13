import { Cell } from "../../../domain/entities/cell.domain";
import { Snake } from "../../../domain/entities/snake.domain";
import { Column, PrimaryColumn, Entity } from "typeorm";

export default class SnakeEntity implements Snake {
	@PrimaryColumn()
    id!: number;
    
	@Column()
    length!: number;
    
	@Column()
    posX!: number;
    
	@Column()
    posY!: number;
    
	@Column()
	head!: Cell;
}