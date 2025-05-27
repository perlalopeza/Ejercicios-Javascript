

// Ejercicio 1
let arr = ["This", "is", "a", "sentence."];
function printOutString(array) {
    return array.join(" ");
}

const imprimirEjercicio1DOM = () => {
    document.getElementById("ejercicio1").textContent = printOutString(arr);
}
imprimirEjercicio1DOM();


//Ejercicio 2

let numeros = [2, 4, 7, 9];
const doblesConMap = (numeros) => {
    const numerosDobles = numeros.map(num => num * 2);
    return numerosDobles;
}

const imprimirEjercicio2DOM = () => {
    document.getElementById("numerosOriginales").innerText = `Numeros originales: ${numeros}`;
    document.getElementById("numerosDoblados").textContent = "Números doblados: " + doblesConMap(numeros);
}
imprimirEjercicio2DOM();


//Ejercicio 3
let array3 = [6, 5, 8, 9];
const sumaConReduce = (array) => {
    const suma = array.reduce(
        (acomulador, siguienteValor) => acomulador + siguienteValor
    );
    return suma;
}

const ProductoConReduce = (array) => {
    const producto = array.reduce(
        (acomulador, siguienteValor) => acomulador * siguienteValor
    );
    return producto;
}

const imprimirEjercicio3DOM = () => {
    document.getElementById("numeros3").innerText = `Números originales: ${array3}`;
    document.getElementById("numerosSuma").innerText = ` Suma: ` + sumaConReduce(array3);
    document.getElementById("numerosProducto").innerText = `Producto: ` + ProductoConReduce(array3);
}
imprimirEjercicio3DOM();


//Ejercicio 4
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

const loopsConFilterEIclude = (student1, student2) => {
    let cursosComunes = [];
    for (let i = 0; i < student1.length; i++) {
        let curso = student1[i];
        if (student2.includes(curso)) {
            cursosComunes.push(curso);
        }
    }
    return cursosComunes;
}


const imprimirEjercicio4DOM = () => {

    document.getElementById("cursos").innerText = `Cursos en común: ` + loopsConFilterEIclude(student1Courses, student2Courses);
}
imprimirEjercicio4DOM();


//Ejercicio 5
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

const ejercicio5 = (array) => {
    // Write a command that prints out all of the people in the list.
    document.getElementById("caso1").innerText = `Arreglo Inicial: ` + array.join(" - ");
    // Write the command to remove "Dani" from the array.
    let posicion = array.indexOf('Dani');
    array.splice(posicion, 1);
    document.getElementById("caso2").innerText = `Eliminar a Dani: ` + array.join(" - ");
    // Write the command to remove "Juan" from the array.
    let posicion2 = array.indexOf('Juan');
    array.splice(posicion2, 1);
    document.getElementById("caso3").innerText = `Eliminar a Juan: ` + array.join(" - ");
    // Write the command to move "Luis" to the front of the array.
    let posicionLuis = array.indexOf('Luis');
    array.splice(posicionLuis, 1);
    array.unshift('Luis');
    document.getElementById("caso4").innerText = `Mover a Luis al inicio: ` + array.join(" - ");
    // Write the command to add your name to the end of the array.
    array.push('Perla');
    document.getElementById("caso5").innerText = `Añadir mi nombre al final: ` + array.join(" - ");
    // Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
    for (let persona of people) {
        console.log(persona);
        if (persona === "Maria") break;
    }

    // Write the command that gives the indexOf where "Maria" is located.
    let posicionMaria = array.indexOf('Maria');
    document.getElementById("caso6").innerText = `Index de Maria: ${posicionMaria}`;
}
ejercicio5(people);

//Ejercico 6
let input = [50, 6, 28, 35, 100, 12];
function bubble(array) {
    for (let i = 0; i < array.length; i++) {
        for (let p = 0; p < array.length - 1; p++) {
            if (array[p] > array[p + 1]) {
                [array[p], array[p + 1]] = [array[p + 1], array[p]];
            }
        }
    }
    return array.join(" - ");
}

const imprimirEjercicio6DOM = ()=>{
    document.getElementById("desordenado").innerText = `Array desordenado: ${input}`; 
    document.getElementById("bubble").innerText = `Orden con Bubble: ` + bubble(input);
}
imprimirEjercicio6DOM();







