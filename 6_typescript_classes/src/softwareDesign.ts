// SOLID
// Inversion de dependencia - dependency inversion principle
// Una interfaz que sea reutilizable

// 3 layer architecture: UI - logic - database

// 5 principle solid
// Inversion de dependencias
// Gracias al principio de inversión de dependencias,
//podemos hacer que el código que es el núcleo de nuestra
//aplicación no dependa de los detalles de implementación,
// como pueden ser el framework que utilices, la base de datos,
// cómo te conectes a tu servidor

// A. Las clases de alto nivel no deberían depender de las clases de bajo
// nivel. Ambas deberían depender de las abstracciones.
// B. Las abstracciones no deberían depender de los detalles. Los detalles
// deberían depender de las abstracciones.

// Una clase de más alto nivel, como es la cesta de la compra,
// está dependiendo de otras de bajo nivel, como cuál
// es el mecanismo para almacenar la información o para realizar el
// método de pago.Se encarga de crear instancias
// de esos objetos y después utilizarlas.

class Shopping {}

class ShoppingBasket_ {
	buy(shopping: Shopping) {
		const db = new SaveInDatabase();
		db.save(shopping);
		const creditCard = new CreditCard();
		creditCard.pay(shopping);
	}
}

class SaveInDatabase {
	save(shopping: Shopping) {}
}

class CreditCard_ {
	pay(shopping: Shopping) {}
}

// --------------CORRECTA FORMA APLICANDO PRINCIPIO SOLID------------------

interface PersistenceStore {
	save(shopping: Shopping): string;
}

class saveInDatabase implements PersistenceStore {
	save(shopping: Shopping): string {
		throw new Error("Method not implemented.");
	}
	saveInDatabase(shopping: Shopping) {}
}

interface PaymentMethod {
	pay(shopping: Shopping): void;
}

class CreditCard implements PaymentMethod {
	pay(shopping: Shopping): void {
		throw new Error("Method not implemented.");
	}
}

class ShoppingBasket {

    private persistentStore!: PersistenceStore;
    private paymentMethod!: PaymentMethod;

    buy(shopping: Shopping): void {
        this.persistentStore.save(shopping);
        this.paymentMethod.pay(shopping);
    }
}

class Server implements PersistenceStore {
    save(shopping: Shopping): string {
        throw new Error("Method not implemented.");
    }
    saveInDatabase(shopping: Shopping): void{}
}

class Paypal implements PaymentMethod{
    pay(shopping: Shopping) {
        
    }
}