import User from "./user";

interface Notify {
	notify(user: User, message: string): void;
}
