
/*
 desarrollar una solución que permita conocer la respuesta de 6 personas con relación a sus gustos musicales. 
 Con fines administrativos y realizar una rifa entre las personas encuestadas, la emisora desea poder registrar 
 de las personas entrevistadas su nombre, número de identificación (cédula), fecha de nacimiento, 
 correo electrónico, ciudad de residencia, ciudad de origen. Además, se deberá poder almacenar el artista
  y título de hasta 3 canciones favoritas en cada una de las personas que se ingrese, 
  teniendo en cuenta lo anterior, se sugiere que la solución deberá mostrar un menú que permite 
  las siguientes opciones: 
   a. Agregar una persona con los datos que se listan anteriormente.  
   b. Mostrar la información personal de una persona particular por medio de su posición en el vector. 
*/
//1-definir estructura de almacenamiento de datos y base de 5 personas
let audiencia = [
   
    {
            nombre: "Nelson Jimenez",
            identifi: 74374881,
            fechan: "23111979",
            correo: "neljim10@gmail.com",
            ciudadResidencia: "Duitama",
            ciudadOrigen: "Duitama",
            playlist: [
                {
                    artista:"helloween",
                    cancion: "hell was made in heaven"
                },
                {
                    artista:"diomedes",
                    cancion: "camino largo"                    
                },
                {
                    artista:"cava",
                    cancion: "la calle de las sirenas"
                }
            ]
    },
    {
            nombre: "Camila Falla",
            identifi: 1000010001,
            fechan: "23111984",
            correo: "camifall@gmail.com",
            ciudadResidencia: "bogota",
            ciudadOrigen: "Pereira",
            playlist: [
                {
                    artista:"rafael Orozco",
                    cancion: "los sabanales"
                },
                {
                    artista:"diomedes",
                    cancion: "la falla fue uya"                    
                },
                {
                    artista:"oñate",
                    cancion: "señora"
                }
            ]
    },
    {
            nombre: "Yalile",
            identifi: 46456777,
            fechan: "23111982",
            correo: "nyali82@gmail.com",
            ciudadResidencia: "paz del rio",
            ciudadOrigen: "Duitama",
            playlist: [
                {
                    artista:"bumbury",
                    cancion: "odiame"
                },
                {
                    artista:"heroes",
                    cancion: "maldito duende"                    
                },
                {
                    artista:"caifanes",
                    cancion: "la celula que explota"
                }
            ]
    },
    {
            nombre: "Carolina",
            identifi: 4565434,
            fechan: "23111985",
            correo: "carola2@gmail.com",
            ciudadResidencia: "sogamoso",
            ciudadOrigen: "pisba",
            playlist: [
                {
                    artista:"bad bumy",
                    cancion: "mugre 1"
                },
                {
                    artista:"karol G",
                    cancion: "mugre 2"                    
                },
                {
                    artista:"maluma",
                    cancion: "mugre 3"
                }
            ]
    },
    {
            nombre: "Lazaro Beltran",
            identifi: 7349896,
            fechan: "23111978",
            correo: "lazaretas@gmail.com",
            ciudadResidencia: "Bogota DC",
            ciudadOrigen: "Somondoco",
            playlist: [
                {
                    artista:"vicente fernandez",
                    cancion: "si te vas no hay lio"
                },
                {
                    artista:"PedroInfante",
                    cancion: "deja que salga la luna"                    
                },
                {
                    artista:"Jose Alfredo Jimenez",
                    cancion: "El rey"
                }
            ]
    }

    
]

//2-Agregar una persona mas al arreglo para completar las 6
let agregarPersona = {
    nombre: "Nueva persona en la lista",
    identifi: 9999999,
    fechan: "23111979",
    correo: "nueva_en_la_lista@gmail.com",
    ciudadResidencia: "Duitayork",
    ciudadOrigen: "Duitayork",
    playlist: [
        {
            artista:"artista 1",
            cancion: "cancion 1"
        },
        {
            artista:"artista 2",
            cancion: "cancion artista 2"                    
        },
        {
            artista:"artista 3",
            cancion: "cancion artista 3"
        }
    ]
}

audiencia.push(agregarPersona)


//3 visualizar informacion de una persona por medio de su posicion en el vector
let personae = prompt("Digite posicion en el arreglo del encuestado","")
let datosPersona = "Datos encuestado #" 
 if (personae < 0 || personae > 5) {
    console.error("Dato errado, debe estar entre 0 y 5")
 } else {
   
    for (let i = 0; i < audiencia.length; i++) {
        if (i==personae) {

            for (let key in audiencia[i]) {
                if (key=="playlist") {
                    console.log("**** Canciones Preferidas*****")
                
                    for (let key2 in audiencia[i].playlist){
                        console.log(key2,"-",audiencia[i].playlist[key2])
                    }                    

                } else {
                    console.log(key,audiencia[i][key]);
                }
                
            }
            
        }
        
    }

    datosPersona += personae+": "
    datosPersona += audiencia[personae].nombre

    document.querySelector('#header').innerHTML = datosPersona 


 }
