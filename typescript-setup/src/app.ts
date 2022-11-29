/* eslint-disable no-undef-init */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req: any, res: any) => {
// res.send('Hello World!')
// })

// app.listen(port, () => {
// console.log(`Example app listening on port ${port}`)
// })

// Booleano
const falso: boolean = false;
console.log(falso);

// BigInt
// const big: bigint = 100n;
// console.log(big);

// Number
const numero: number = 6;
console.log(numero);

// String
const color: string = 'blue';
console.log(color);

// Array
const list: number[] = [1, 2, 3];
const list2: Array<number> = [1, 2, 4];
console.log(list, list2);

//  Tuple
let x: [string, number];

// Unknown
let notSure: unknown = 4;
let u: undefined = undefined;
let n: null = null;

// Any type
const a: any = 123;
console.log(a);

// tipos de literales: cadenas, números y booleanos
// al usar tipos literales, puede permitir un valor
// exacto que debe tener una cadena,
// un número o un valor booleano.

// Cuando declara una variable a través de var o let,
// le está diciendo al compilador que existe la posibilidad
// de que esta variable cambie su contenido.
// Por el contrario, usar const para declarar una variable
// informará a TypeScript que este objeto nunca cambiará.

// Union type
let mixedData: ['hola', 1993, true];

// object

const user: object = {
  name: 'Daniel',
  age: 26
};
// Alias
type Person = {
 name: string;
 age?: number;
};

// Las uniones de tipo son una forma de declarar que un
// objeto podría ser de más de un tipo.
type stringOrNumber = string | number;

// Si una unión es una operación OR, entonces una intersección
// es una operación AND. Las intersecciones de tipo son cuando
// dos tipos se cruzan para crear un nuevo tipo. Esto permite
// la composición del tipo.

// Symbol - Unique symbol
// Array
let arr = [1, 2, 3];

// Array de una union de tipos de strings y numbers
let union = [1, 'Hola'];

// const se puede modificar mas no asignar
let f = [];
f.push(1);

let g: number[] = [];

// Se recomienda no mesclar los tipos en los arreglos
// para evitar complicaciones

function buildArray (): (number | string)[] {
  let a = [];
  a.push(1);
  a.push('test');
  return a;
}

let myArray = buildArray();
// myArray.push(true)

// Subtipo de array que se llama tuple
// Son array sellados Es mas cerrado
// Donde solo se pueden colocar ciertos tipos de datos definidos
// Y las cantidad de valores de la tupla tambien
let tupleType: [number] = [1];

// Readonly / no se puede tocar ni modificar / inmutable
// Algo intocable se utiliza const, no se puede moficar
const as: readonly number[] = [1, 2, 3, 4, 5];
// formas de declarar un readonly
type b = readonly string[];
type i = ReadonlyArray<string>;
type c = Readonly<string[]>;

// null => algo que no tiene valor, ausencia de valor
// undefined => no esta definido,
// void => No se retorna nada pero termina, no tiene un return
// never => Nunca retorna nada, nunca termina de ejecutarse

// Enums - No existen en JS pero si en TypeScript
// Informacion que se mantiene constante
// Siempre empiezan con mayusculas Nombres o Keys
// Automaticamente infiere un numero
enum lenguaje {
 English = 0,
 Spanish = 1,
 French = 2,
 Russian = 3,
}

let myLanguage = lenguaje.English
// Los enums se pueden dividir

const enum Flippable{
  Burger,
  Cup,
  Table
}

function flip (f: Flippable) {
  return 'flipped!'
}
// type literal - es un valor especifico ya es el valor mismo de la variable
flip(500) // Esto deberia dar error
// Unknown cuando no se sabe el tipo de dato - Alternativa a any
// Symbol - es un valor readonly ya no se puede cambiar
// Symbol - No se puede alterar solo puede ser comparado consigo mismo
// Unique simbol no se le puede cambiar mientras el simbol si
// Unique simbol no se puede comparar con otros unique simbol
// Tupla array de string, string, number
// Diferencia entre tupla y array
// Una tupla puede ir cualquier tipo de dato

// Type literal
let e: true = true
// Objeto con esa template, ese es su shape
let br = {
  c: {
    d: 'f'
  }
}

let is: 3 = 3 // Literal de 3
// is = 4

let j = [1, 2, 3]
j.push(5)
// j.push("6")

// let k: never = 4

let l: unknown = 4
let m = 1 * 2
