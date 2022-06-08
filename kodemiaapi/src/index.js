require("dotenv").config() 
//Imprtamos paquetes con require
const express = require("express")
const { get } = require("express/lib/response")
const mongoose = require("mongoose")

const Koder = require('./models/koder.model')
//inicializamos constantes con la configuración
const PORT = process.env.PORT
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_NAME= process.env.DB_NAME
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

const app = express()

app.use(express.json());


app.post("/koders",async(req,res)=>{
    mongoose.connect(URL)
    .then(async(connection)=>{
        console.log('Estamos conectados a nuestra base datos!')
        const newKoder = new Koder({
            nombre: 'Iván',
            genero: 'masculino',
            edad: 29
        })
    await Koder.create(newKoder)
        

    })
    .catch((error)=>{
        console.log("No nos conectamos a la base de Datos")
        console.error(error)
    })
})

app.get("/koders",async (req,res)=>{
    const edad =  Number(req.query.edad)
    const count = Number(req.query.count)

    console.log(edad)

    const query ={
        $or: [{edad: edad}]
    }
    const koders = await Koder.find(query)
    console.log(koders)

    res.json(koders)
})


mongoose
    .connect(URL)
    .then(()=>{
        console.log("Estamos conectados a la base de datos")
        app.listen(PORT,()=>{
            console.log("Server ejecutandose en el puerto:", PORT)
        })
    })
    .catch((error)=>{
        console.error("Hubo un error:",error)
    })

