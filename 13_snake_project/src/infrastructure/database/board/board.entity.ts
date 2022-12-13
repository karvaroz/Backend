import { Board } from "../../../domain/entities/board.domain";

export default class BoardEntity implements Board{
    rows: number;
    columns: number;

}