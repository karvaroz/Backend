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
