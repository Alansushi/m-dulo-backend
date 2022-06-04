const mongoose = require("mongoose");
const DB_USER = 'alanguerrerog'
const DB_PASSWORD = 'JNfX55zoQNsBW3BV'
const DB_HOST = 'cluster0.aweaow5.mongodb.net'
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`

mongoose.connect(URL)
    .then((connection)=>{
        console.log('Estamos conectados a nuestra base datos!')

    })
    .catch((error)=>{
        console.log("No nos conectamos a la base de Datos")
        console.error(error)
    })