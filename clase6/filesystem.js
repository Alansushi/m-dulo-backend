import { mkdir, readdir, rmdir, write } from 'fs'
import { unlink,readFile,writeFile } from 'fs/promises'


async function crearArchivo (nombre, contenido){
    try{
        await writeFile(nombre, contenido,(error)=>{
        console.log(`Se creó el archivo ${nombre}`)
        })
    }
    catch (error){
      console.log(`Hubo un error: ${error}`)
    }
    
}

// crearArchivo("prueba.txt", "Prueba para ejercicios :D")

async function leerArchivo(nombre){
    try{
        let contenido = await readFile(nombre, 'utf-8')
        console.log(contenido)
    }catch (error){
        console.log("algo salió mal")
    }
}


async function borrarArchivo (nombre){
    try {
        await unlink(nombre);
        console.log(`El archivo ${nombre}  fue eliminado`);
    }catch (error){
        console.error("No se encontró el archivo");
        console.error(error)
    }
}

//función para crear una carpeta//
const path = './views';
const path2 = './lectura';
async function crearCarpeta(path){
    mkdir(path, (err) => {
        if (err) {
            throw err;
        }
        console.log("Directory is created.");
    });
    
}

//función para borrar una carpeta//

async function borrarCarpeta(path){
    rmdir(path,(err)=>{
        if (err){
            throw err;
        }
        console.log("Se borró exitosamente la carpeta")
    })
}

//función para leer una carpeta//
async function leerCarpeta(path2){
    readdir(path2,(err,files)=>{
        if (err){
            throw err;
        }
        console.log(path2)
        files.forEach(file =>{
            console.log(file)
        })
        
       
    })
}


async function test(){
    // await crearArchivo("prueba.txt", "Hola Koders!");
    // await leerArchivo("prueba.txt");
    // await borrarArchivo("prueba.txt")
    // await crearCarpeta(path2)

    // await borrarCarpeta(path)

    await leerCarpeta(path2)

}

test();