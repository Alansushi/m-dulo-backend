const { response } = require('express')
const express = require('express')
// const req = require('express/lib/request')
// const res = require('express/lib/response')

const fs = require("fs/promises")



const server = express()
//middleware se agrega para que express transforme datos en json y así los pueda leer

server.use(express.json())

server.get('/koder',(req, res)=>{
    async function leerArchivo(nombre){
        try{
            let contenido = await readFile(nombre, 'utf-8')
            console.log(contenido)
        }catch (error){
            console.log("algo salió mal")
        }
    }
    
    // res.send('Aqui estan todos los koders')
    const respuesta = {
        ok : "Aquí están todos los koders"
    }
    res.json(respuesta)
    res.json(contenido)
})
server.post('/koder',(req,res)=>{
    const respuestaPost = {
        ok: "Aqui puedes crear koders"
    }
    res.json(respuestaPost)

})
server.put('/koder',(req,res)=>{
    const respuestaPost = {
        ok: "Aqui puedes sustituir un koder"
    }
    res.json(respuestaPost)

})

server.get("/koders", async(req,res)=>{
    const archivo = await fs.readFile("koders.json", "utf-8")
    const objeto = JSON.parse(archivo)
    console.log(objeto)
    const koders = objeto.koders

    res.json(koders)
})

server.post("/koders", async(req,res)=>{
    console.log('body:', req.body);
    const koder = req.body

    const archivo = await fs.readFile("koders.json", "utf-8")
    const objeto = JSON.parse(archivo)
    const koders = objeto.koders

    koders.push(koder)
    //Estado de creado en el insomnia
    const nuevoArchivo = JSON.stringify(objeto,null,2)//convertimos el objeto a un string nuevo
    await fs.writeFile("koders.json",nuevoArchivo,'utf-8')
    res.status(201)
    res.json(koders)
})

server.listen(8000,()=>{
    console.log("Servidor ejecutandose")
})

