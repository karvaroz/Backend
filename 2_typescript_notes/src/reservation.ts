class Reservation {
	public to: Date;
	public destination: string;

	constructor(private from: Date) {}

	setTo(date: Date) {
		this.to = date;
	}

	setDestinantion(destination: string) {
		this.destination = destination;
	}
}

type Reserve = {
	(from: Date, to: Date, destination: string): Reservation;
	(from: Date, destination: string): Reservation;
};

const reserve: Reserve = (
	from: Date,
	toOrDestination: Date | string,
	destination?: string
) => {
	const reservation = new Reservation(from);

	if (toOrDestination instanceof Date && destination) {
		reservation.setTo(toOrDestination);
		reservation.setDestinantion(destination);
	} else if (toOrDestination) {
		reservation.setDestinantion(toOrDestination);
	}

	return reservation;
};

console.log(reserve(new Date(), new Date(), "HERO"));
console.log(reserve(new Date(), "HERO"));
