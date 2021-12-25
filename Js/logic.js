/*Write the code of a function that is passed an integer as a parameter and returns a text string that indicates whether the number is odd or even.*/
const isEven = (num) => {
    if (num % 2 === 0) {
        document.getElementById(
            "display-info"
        ).innerHTML = `The number is even ${num}`;
    } else {
        document.getElementById(
            "display-info"
        ).innerHTML = `The number is odd ${num}`;
    }
};
/*Define a function that returns information about a text string passed to it as an argument. From the string passed to it, the function determines whether that string is made up of only uppercase letters, only lowercase letters, or a mixture of both.*/
function upperCase(str) {
    let normal = str;
    let upper = str.toUpperCase().replace(/\s/g, "");
    str = str.replace(/\s/g, "");
    if (str == upper) {
        document.getElementById(
            "display-info"
        ).innerHTML = `The text contains only Uppercase  ${"'" + normal + "'"}`;
    } else {
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) === str.charAt(i).toUpperCase()) {
                document.getElementById(
                    "display-info"
                ).innerHTML = `The text contains Uppercase and Lowercase  ${
          "'" + normal + "'"
        }`;
                break;
            }
            document.getElementById(
                "display-info"
            ).innerHTML = `The text contains only Lowercase  ${"'" + normal + "'"}`;
        }
    }
}
/*Define a function that determines if the text string that is passed as a parameter is a palindrome, that is, if it is read in the same way from the left and from the right.*/
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
        document.getElementById("display-info").innerHTML = `The text ( ${
      "" + normalText + ""
    } ) is a palindrome`;
    } else {
        document.getElementById("display-info").innerHTML = `The text ( ${
      "" + normalText + ""
    } ) is not a palindrome`;
    }
}

//#region DOM Elements

function createElementTittle(titulo) {
    document.getElementById("tittle-1").innerHTML = titulo;
}

function createinfoLabel(info) {
    document.getElementById("info").innerHTML = info;
}

function createButton() {
    let take = document.getElementById("button-info");
    const button = document.createElement("button");
    button.innerHTML = "Get Result";
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
    createElementTittle("Even and odd numbers");
    createinfoLabel("Insert a number to know if is even or odd");
    clear();
    createInput();
    let button = createButton();
    button.onclick = function() {
        let data = document.getElementById("data").value;
        isEven(data);
    };
}

function upperCases() {
    createElementTittle("Uppercase and Lowercase");
    createinfoLabel(
        "Enter a text string and it will indicate if it contains uppercase or lowercase letters or both"
    );

    clear();
    createInput();
    let button = createButton();
    button.onclick = function() {
        let data = document.getElementById("data").value;
        upperCase(data);
    };
}

function palindromoText() {
    createElementTittle("Palindromic words or phrases");
    createinfoLabel(
        "Enter a word or phrase to know if is Palindromic"
    );
    clear();
    createInput();
    let button = createButton();
    button.onclick = function() {
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