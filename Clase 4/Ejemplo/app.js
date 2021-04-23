//comentario de una linea
/**
 * comentario
 * multilinea
 */

console.log("Hola mundo!!")


//Numeros
var numero = 1;
console.log(numero)
var decimal = 12.4
console.log(decimal)
console.log(numero + " " + decimal)
console.log(numero, decimal)

//Cadenas
var cadena = "ejemplo de cadena"
console.log(cadena)
var cadena2 = 'ejemplo de cadena 2'
console.log(cadena2)
var cadena3 = `mi edad es ${1 + 2}`
console.log(cadena3)


//Arreglos
var array1 = [1, 2, 3, 4, 5]
console.log(array1)
var array2 = [1, "Jose", 3, "Moran"]
console.log(array2)

//Objetos
var object1 = {
    raza: "Husky",
    tamanio: "mediano",
    edad: "5",
    objeto2: {
        taller: "HTML"
    }
}

var car = {
    motor: "motor",
    color: "color"
}
//Carro car = new Carro("motor","color")

console.log(object1) //imprime el objeto completo
console.log(object1.raza)
console.log(object1.objeto2.taller)

var flag = true
var n = 10
if (flag) {
    console.log("Si funciona")
}

if (n !== 10) {
    console.log(n)
} else {
    console.log("error n si es igual a 10")
}

var i = 10

if (i == 1) {
    console.log("La condicion no deberia ser verdadera")
} else if (i == 2) {
    console.log("La condicion no deberia ser verdadera")
} else if (i == 10) {
    console.log("la condicion si es verdadera")
} else {
    console.log("La condicion no deberia ser verdadera")
}

var k = 10
var j = 15

if (k == 15) {
    //falso
} else if (j == 15) {
    console.log("j si es igual a 15")
}

switch (k) {
    case 1:
        console.log("no es igual a 1")
        break;
    case 15:
        console.log("///////")
    default:
        console.log("default")
}

for (var x = 0; x < 10; x = x + 2) {
    console.log("el valor de x es " + x)
}

for (let t in array1) {
    console.log(t)
}


for (var t of array2) {
    console.log(t)
}
var y = 0

function funcion1() {
    while (y < 14) {
        console.log("El valor de y es " + y)
        y++
    }

}

function funcion2(n) {
    return n * n
}

funcion1()
console.log(funcion2(5))

const funcion3 = () => {
    console.log("nombre")
}
funcion3()
//saldria
