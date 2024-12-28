//calcular area y perimetro de figuras planas

var ladoa = 20 //lado a
var ladob = 30 //lado b, para el tringulo es la base
var ladoc = 10 //lado c
var altura = 9 //altura
var radio = 30 //radio circunferencia
var figura = "Triangulo "

//triangulo
let perimetro = ladoa + ladob + ladoc
let areafigura = (ladob * altura)/2
console.log("****"+figura+"*****")
console.log("Lado a: "+ladoa+" Lado b: "+ladob+" Lado c: "+ladoc)
console.log("base: "+ladob+" Altura: "+altura)
console.log("Perimetro: "+perimetro+" Area: "+areafigura)

//Rectangulo
figura="Rectangulo"
perimetro = 2*(ladoa + ladob)
areafigura = (ladoa * ladob)
console.log("****"+figura+"*****")
console.log("Lado a: "+ladoa+" Lado b: "+ladob)
console.log("Perimetro: "+perimetro+" Area: "+areafigura)

//Cuadrado
figura="Cuadrado"
perimetro = 4*(ladoa)
areafigura = (ladoa**2)
console.log("****"+figura+"*****")
console.log("Lado a: "+ladoa)
console.log("Perimetro: "+perimetro+" Area: "+areafigura)

//Circulo
figura="Circulo"
perimetro = 2*Math.PI*radio
areafigura = (Math.PI)*radio**2
console.log("****"+figura+"*****")
console.log("Radio: "+ladoa)
console.log("Perimetro: "+perimetro+" Area: "+areafigura)
//document.querySelector('#header').innerHTML = usuarios

//console.log(usuarios)

