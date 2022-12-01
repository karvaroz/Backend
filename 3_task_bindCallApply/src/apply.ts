// Apply - Incova la funcion y los argumentos se reciben en forma de lista

type User = {
	username: string;
	pass: string;
};

export let users: Array<User> = [
	{
		username: "Pepe",
		pass: "pass123",
	},
];

export function login(username: string, pass: string) {
	for (let i = 0; i < users.length; i++) {
		if (users[i].username === username && users[i].pass === pass) {
			return "Usuario autenticado";
		} else if (users[i].username === username && users[i].pass !== pass) {
			return "Contraseña incorrecta";
		} else if (users[i].username !== username && users[i].pass === pass) {
			return "Verifica tu usuario";
		}
		return "Usuario no autenticado, intenta nuevamente o registrate";
	}
}

