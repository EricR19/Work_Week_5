function isEven(num) {
  if (num % 2 === 0) {
    return `Es par el numero ${num}`;
  } else {
    return `Es impar el numero ${num}`;
  }
}
console.log(isEven(8));

function upperCase(str) {
  str = str.replace(/\s/g, "");
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i).toUpperCase()) {
      return `El texto contiene mayusculas`;
    }
  }
  return `El texto no contiene mayusculas  ${"'" + str + "'"}`;
}
console.log(upperCase("b q b"));
