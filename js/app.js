const myDoc = document;

console.log(myDoc);

let myH1 = myDoc.getElementsByTagName("h1");

let myH3 = myDoc.getElementById("mySuperH3");

console.log(myH1);
console.log(myH3);

myH3.innerText = "EStoy modificando el texto dentro del H3";

const myButtonStr = "<button>Esto es un boton </button> </br>";

myH3.innerHTML = myButtonStr;

// While, do...while... for

const cant_elements = 15;

for (let index = 0; index < cant_elements; index++) {
    myH3.innerHTML = myH3.innerHTML + myButtonStr;
}

/*
const myObj = {
    "atributo" : "valor"
}

const myObjeto2 = {
    atributo: "valor",
    atributo2: "otro vaalor"
}*/