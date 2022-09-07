let myH3 = document.getElementById("mySuperH3");

const myButtonStr = `<button class="bg-success text-light">Esto es un boton </button> </br>`;

myH3.innerHTML = myButtonStr;

const cant_elements = prompt("Ingrese la cantidad de repeticiones");

for (let index = 1; index < cant_elements; index++) {
  myH3.innerHTML = myH3.innerHTML + myButtonStr;
}
