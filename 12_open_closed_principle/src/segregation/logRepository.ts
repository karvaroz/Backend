import User from "./user";

export default class UserRepository<User> {
	public Insert(user: User): void {}

	public Update(user: User): void {}

	public Get(user: User) {
		return new User();
    }
    
	public Delete(id: number): void {}
}