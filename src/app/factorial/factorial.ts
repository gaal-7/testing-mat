export function factorial(x: number): number {
  if (x < 0 || x > 15) {
    return 0;
  } else if (x === 0 || x === 1) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 2; i <= x; i++) {
      factorial *= i;
    }
    return factorial;
  }
}
