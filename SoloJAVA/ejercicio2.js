/*
Problema 2:Desarrollar un programa que permita almacenar las edades de un grupo de 10 personas 
en un vector de enteros y luego determine la cantidad de personas que son menores de edad,
mayores de edad, cuántos adultos mayores, la edad más baja, la edad más alta y el promedio 
de edades ingresadas. Para el ejercicio anterior suponga que un adulto mayor debe tener 
una edad igual o superior a 60. Debe validar para cada ingreso que los valores estén en 
un rango entre 1 y 120 años. En caso de error deberá notificar y solicitar un nuevo valor.
*/
//crear funcion que genere numeros aleatorios entre 0 y 120
//realizamos la segunda pruba

var generarNumeroAleatorioEntre = (min,max) => {
   return Math.floor(Math.random()*(max - min+1)+min);
}

//almacenar edades en el arreglo
let i = 1   //contador
let personas = 10
let edades = []
while (i<=10) {
    edades.push(generarNumeroAleatorioEntre(1,120))
    i += 1
}
console.log("Numero de personas: "+edades.length)
console.log(edades)
//ordenar los elementros del arreglo
edades.sort(function(a,b){
    return a-b
})

var menores = edades.filter((Element) => Element < 18);
var mayores = edades.filter((Element) => Element >= 18);
console.log("Los menores: "+menores)
console.log("Los Mayores: "+mayores)
console.log("Edad menor: "+edades[0])
edades.reverse()
console.log("Edad Mayor: "+edades[0])


//calcular promedio
i = 0
let acumulador=0
let edadPromedio=0
while (i<=(edades.length-1)) {
    acumulador +=edades[i]
    i +=1
}
edadPromedio =acumulador/(edades.length+1)
console.log("Edad promedio: "+edadPromedio)




