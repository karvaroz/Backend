export default class createTimer {
	timerExecuteAction(action: () => void, interval: number, stop?: number) {
		let timesToExecute: number = 0;
		const intervalId = setInterval(action, interval);
		if (timesToExecute <= stop) {
			return timesToExecute++;
		}
		return clearInterval(intervalId);
	}
}
