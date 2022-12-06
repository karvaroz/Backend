// este archivo contiene nuestro código para mostrar el nombre y la edad del usuario.


// Aquí tenemos dos clases Empresa y Empleado implementando UserInerface y CompanyInteface respectivamente.
// @injectable() es un decorador, esta es una forma de decirle al compilador que queremos inyectar esta clase como una dependencia.
// @inject(USER) employee:UserInerface significa que estamos inyectando una variable de empleado de tipo UserInerface.
// Ahora, podemos usar todos los métodos de UserInerface dentro de la clase Company.

import { inject, injectable } from "inversify";
import { CompanyInterface, UserInterface } from "./interface";
import { USER } from "./types";

@injectable()
class Employee implements UserInterface {
	public getName(name: string): string {
		return name;
	}

	public getAge(age: number): number {
		return age;
	}
}

@injectable()
class Company implements CompanyInterface {
	public employee: UserInterface;

	constructor(@inject(USER) employee: UserInterface) {
		this.employee = employee;
	}

    public getEmployee(): string {
        return this.employee.getName("Juan") + " has " + this.employee.getAge(25);
	}
}

export { Employee, Company };
