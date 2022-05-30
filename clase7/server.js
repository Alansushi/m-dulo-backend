const http = require("http");

//Creamos un servidor usando Create Server
const server = http.createServer((request,response)=>{

    //Vamos a hacer un request //
    console.log("URL:", request.url)

    //Consultamos el método de la request
    console.log("Método:", request.method)
    //Vamos a responder al cliente

    response.write("Hola desde mi server!");//empezamos y escribímos la respuesta
    response.end();//Terminamos la respuesta y la enviamos
})
//Ponemos al servidor  aescuchar en un puerto

server.listen(8000,()=>{
    console.log("Servidor iniciado en el puerto 8000")
}) 