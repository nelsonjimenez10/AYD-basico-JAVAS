/*
ejercicio 3: Escriba un programa que lea dos vectores de números enteros ordenados ascendentemente 
y luego produzca la lista ordenada de la mezcla de los dos, por ejemplo, si los dos arreglos 
tienen los números 1 3 6 9 17 y 2 4 10 17, respectivamente, la lista de números en la pantalla 
debe ser 1 2 3 4 6 9 10 17 17.  
Limite los vectores a un tamaño de 5 y debe validar en cada ingreso que realmente se estén 
ingresando los datos de forma ascendente.
*/
/*
Solucion: para hacer mas practico el ejercicio seva a utilizar una funcion que genere numeros aleatorios entre 0 y 100
para llenar los vectores
*/ 

var generarNumeroAleatorioEntre = (min,max) => {                
   return Math.floor(Math.random()*(max - min+1)+min);
}

//almacenar datos  en los arreglos
let arreglo1 = []
let arreglo2 = []
let arregloTotal = []
let i = 1   //contador
let personas = 10
let edades = []
while (i<=5) {
    arreglo1.push(generarNumeroAleatorioEntre(0,100))   //genera aleatorio entre 0 y 100
    arreglo1.sort(function (a,b) {                      //garantiza entrada ordenada a cada arreglo
        return a-b
    })
    console.log(arreglo1)
    arreglo2.push(generarNumeroAleatorioEntre(0,100))
    arreglo2.sort(function (a,b) {
        return a-b
    })
    console.log(arreglo2)
    i += 1
}

arregloTotal = arreglo1.concat(arreglo2)            //concatenar arreglos
arregloTotal.sort(function (a,b) {                  //ordenar arreglo salida
    return a-b
})
console.log(arreglo1)
console.log(arreglo2)
console.log(arregloTotal)





