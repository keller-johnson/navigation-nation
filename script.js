function basicOp(operation, value1, value2) {
  let equation = `${value1} ${operation} ${value2}`;
  return eval(equation);
}

console.log(basicOp("/", 20, 2));
