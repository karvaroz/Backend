// todas las interfaces utilizadas en nuestra aplicación estarán en este archivo.

// Este archivo contiene dos interfaces UserInerface y CompanyInteface.
// UserInerface tiene métodos getName y getAge para obtener el nombre
// y la edad de un usuario (empleado) respectivamente.
// CompanyInteface tiene el método getEmployee, que imprime
// nombre y edad en la consola.

export interface UserInterface {
	getName(name: string): string;
	getAge(age: number): number;
}

export interface CompanyInterface {
	getEmployee(): void;
}
