/*Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar.*/
const isEven = (num) => {
  if (num % 2 === 0) {
    document.getElementById(
      "display-info"
    ).innerHTML = `Es par el numero ${num}`;
  } else {
    document.getElementById(
      "display-info"
    ).innerHTML = `Es impar el numero ${num}`;
  }
};
/*Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/
function upperCase(str) {
  let normal = str;
  let upper = str.toUpperCase().replace(/\s/g, "");
  str = str.replace(/\s/g, "");
  if (str == upper) {
    document.getElementById(
      "display-info"
    ).innerHTML = `El texto contiene solo mayúsculas  ${"'" + normal + "'"}`;
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === str.charAt(i).toUpperCase()) {
        document.getElementById(
          "display-info"
        ).innerHTML = `El texto contiene mayúsculas y minúsculas  ${
          "'" + normal + "'"
        }`;
        break;
      }
      document.getElementById(
        "display-info"
      ).innerHTML = `El texto no contiene mayúsculas  ${"'" + normal + "'"}`;
    }
  }
}
/*Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo:"Yo dono rosas, oro no doy"*/
function palindromo(text) {
  let normalText = text;
  text = text.toLowerCase();
  let arrayString = [];

  let normalizeText = text
    .normalize("NFD")
    .replace(/[\u0300-\u036f-\u002C]/g, "");

  normalizeText = normalizeText.replace(/\s/g, "");
  arrayString = normalizeText.split("");
  let reverseText = arrayString.reverse();

  if (normalizeText == reverseText.toString().replace(/,/g, "")) {
    document.getElementById("display-info").innerHTML = `El texto ( ${
      "" + normalText + ""
    } ) es un palíndromo`;
  } else {
    document.getElementById("display-info").innerHTML = `El texto ( ${
      "" + normalText + ""
    } ) no es un palíndromo`;
  }
}

//#region DOM Elementos Creados

function createElementTittle(titulo) {
  document.getElementById("tittle-1").innerHTML = titulo;
}
function createinfoLabel(info) {
  document.getElementById("info").innerHTML = info;
}

function createButton() {
  let take = document.getElementById("button-info");
  const button = document.createElement("button");
  button.innerHTML = "Obtener Resultado";
  button.setAttribute("class", "set-button");
  button.setAttribute("id", "set-button");
  take.appendChild(button);
  return button;
}
function createInput() {
  let take = document.getElementById("input");
  const input = document.createElement("input");
  input.setAttribute("id", "data");
  take.appendChild(input);
}

function createIsEven() {
  createElementTittle("Números Pares o Impares");
  createinfoLabel("Inserte un número si deseas saber si es par o impar");
  clear();
  createInput();
  let button = createButton();
  button.onclick = function () {
    let data = document.getElementById("data").value;
    isEven(data);
  };
}
function upperCases() {
  createElementTittle("Letras mayúsculas ");
  createinfoLabel(
    "Ingrese una cadena de texto e indicará si contiene o no mayúsculas"
  );

  clear();
  createInput();
  let button = createButton();
  button.onclick = function () {
    let data = document.getElementById("data").value;
    upperCase(data);
  };
}
function palindromoText() {
  createElementTittle("Palabras o Frases Palíndromas");
  createinfoLabel(
    "Ingrese una cadena de texto o frase para saber si es Palíndroma"
  );
  clear();
  createInput();
  let button = createButton();
  button.onclick = function () {
    let data = document.getElementById("data").value;
    palindromo(data);
  };
}
function clear() {
  let btn = document.getElementById("set-button");
  let inp = document.getElementById("data");
  if (btn != null) {
    inp.remove();
    btn.remove();
    document.getElementById("display-info").innerHTML = "";
  }
}
//#endregion
