const isEven = num => {
    if (num % 2 === 0) {
        return `Es par el numero ${num}`;
    } else {
        return `Es impar el numero ${num}`;
    }
}
console.log(isEven(1));

function upperCase(str) {
    str = str.replace(/\s/g, "");
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === str.charAt(i).toUpperCase()) {
            return `El texto contiene mayusculas`;
        }
    }
    return `El texto no contiene mayusculas  ${"'" + str + "'"}`;
}
console.log(upperCase("ñ"));

function palindromo(text) {
    text = text.toLowerCase();
    let arrayString = [];
    let normalText = text;
    let normalizeText = normalText
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    normalizeText = normalizeText.replace(/\s/g, "");
    arrayString = normalizeText.split('');
    console.log(arrayString);
    let reverseText = arrayString.reverse();

    if (normalizeText == reverseText.toString().replace(/,/g, "")) {
        console.log('si');
    } else {
        console.log('No');
    }
}

palindromo("Aman a Panamá");