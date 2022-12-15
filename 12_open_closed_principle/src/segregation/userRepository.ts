import User from "./user";

export class UserRepository implements IRepository<User>{
    Insert(entity: User): void {
        throw new Error("Method not implemented.");
    }
    Update(entity: User): void {
        throw new Error("Method not implemented.");
    }
    Get(id: number): User {
        throw new Error("Method not implemented.");
    }
    Delete(id: number): void {
        throw new Error("Method not implemented.");
    }

}