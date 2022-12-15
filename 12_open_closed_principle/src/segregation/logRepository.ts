import User from "./user";
import EventLog from './eventLog';

export default class LogRepository<EventLog> {
	public Insert(eventLog: EventLog): void {}

	public Update(eventLog: EventLog): void {}

	public Get(eventLog: EventLog) {
		return new EventLog();
	}

	public Delete(id: number): void {}
}