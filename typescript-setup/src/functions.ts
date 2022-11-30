// funciones
// Optionals, Default, Rest Parameters

function add (a: number, b: number): number {
  return a + b
}

add(4, 5)
// add.apply(null, [10, 20]) - llama una función con un contexto especifico
// add.call(null, 10, 20) - ejecuta una función con un contexto especifico y pasa los parametros seguidos
// add.bind(null, 10, 20)() - no llama la misma funcion - crea una function nueva y diferente con this especifico y se pasa los parametros
// llaman a la funcion add

// Formas de usar o invocar las funciones

// name function - debe tener nombre
function greets (name: string) {
  return 'hello ' + name
}
console.log(greets)

// Expression function - tiene dos lados Izq y Derecho
const greets2 = function (name: string) {
  return 'hello ' + name
}
console.log(greets2)

// Arrow function -
const greets3 = (name: string) => {
  return 'hello ' + name
}
console.log(greets3)

//
// eslint-disable-next-line prefer-const
let greets4 = (name: string) => 'hello ' + name
console.log(greets4)

// Con contructor
// eslint-disable-next-line prefer-const
// let greets5 = new Function('name', 'return \'hello \' + name')
// console.log(greets5)

// OPTIONAL Y DEFAULT PARAMETERS - valor por defecto no deberia ser optional
function log (message: string, userId?: string) {
  const time = new Date().toLocaleTimeString()
  console.log(time, message, userId || 'No signed in')
}

log('Page loaded')

// N parametros
// Que hace un reduce
// Toma un arreglo lo transforma
// reduce [A] -> C
// reduce [A] -> C

// map [A] -> [B] Transformo todos los elementos dentro de el
// map [A] -> [string]
function sum (numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0)
}
sum([1, 2, 3]) // 6

function sumVariadic () {
  return Array.from(arguments).reduce((total, n) => total + n, 0)
}
sumVariadic()
// sumVariadic(1)

function sumVariadicAafe (...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0)
}
// Rest o Optional parametros para numero no definido de parametros
sumVariadicAafe(1, 2, 3, 4)

// strictBindCallApply

const z = {
  a () {
    return this
  }
}

z.a() // retorna this una funcion

// function fancy (this: Date) {
//   return ` ${this.getDate()} / ${this.getMonth()} / ${this.getFullYear()}`
// }

// fancy()

// Generators
// Tenemos que retornar un numero

// function createNumbers (): number {
//   let n = 0
//   while (true) {
//     return n++
//   }
// }

// console.log(createNumbers())

function * generatorFib (): IterableIterator<number> {
  let x = 0
  let y = 1
  while (true) {
    yield x;
    [x, y] = [y, x + y]
  }
}

const fibonacci = generatorFib()
console.log(fibonacci.next().value)

// Los generadores producen una secuencia de valores
// Los iteracion nos ayudan a consumir estos valores

const number = {
  * [Symbol.iterator] () {
    for (let n = 1; n <= 10; n++) {
      yield n
    }
  }
}

// for (let a of number) {
// }

// let allNumbers = [...number]

// let [one, two, ..rest] = number desestructurar un iterator

// Call Signatures
// Al igual que los objetos es como un shape - formato

// Short
// type Log = (message: string, userId?: string) => void

// overloaded o sobre carga en funciones
class Reservation {
  constructor () {}
}
// type Reverse = {
//   (from: Date, to: Date, destination: string): Reservation
// }

// const reserve: Reserve = (from, to, destination) => {
//   return new Reservation()
// }

// Sobre carga
// type Reverse = {
//   (from: Date, to: Date, destination: string): Reservation
//   (from: Date, destination: string): Reservation
// }

// let reserve: Reserve = (
// from: Date,
// toOrDestination: Date | string,
// destination?: string
// ) => {
// return new Reservation();
// };
