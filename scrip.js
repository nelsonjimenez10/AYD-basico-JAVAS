const edad = 19
if (edad<18) {

    //update hader text
    document.querySelector('#header').innerHTML = edad + " Eres MENOR de edad"
    console.log("Eres menor de edad")
    alert("Eres menor de edad, tienes: " + edad)
} else {
    document.querySelector('#header').innerHTML = edad + " Eres MAYOR de edad"
    console.log("Eres mayor de edad")
    alert("Eres MAYOR de edad, tienes: " + edad)
}
