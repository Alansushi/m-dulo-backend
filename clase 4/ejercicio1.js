const fs = require ('fs')

function crearArchivo (nombre, contenido){
    fs.writeFile(nombre, contenido,(err)=>{
        if (err){
            console.error('Algo salió mal', err)
        }
        else {
            console.log('Se creó el archivo:')
        } 
    })
}

crearArchivo("hola.txt", "Prueba para ejercicios :D")

function leerArchivo(nombre){
    fs.readFile(nombre,'utf8',(err,data)=>{
        if (err){
            console.error('Algo salió mal', err)
        }
        else {
            console.log('El contenido es: ',data)
        } 
    })
   
}
leerArchivo("hola.txt")

function borrarArchivo (nombre){
    fs.unlink(nombre,(err,data)=>{
        if (err){
            console.error('Algo salió mal', err)
        }
        else {
            console.log('Archivo',nombre, 'eliminado')
        } 
    })
}

// borrarArchivo("hola.txt")