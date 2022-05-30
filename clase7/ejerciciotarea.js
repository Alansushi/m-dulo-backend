const http = require("http");

//Creamos un servidor usando Create Server

const server = http.createServer((request,response)=>{

    const responseData = {
        message:"Hola mundo",
    }
    
    let url = ("URL:", request.url)
    console.log(url)
   
    let method = ("Método:", request.method)
    console.log(method)
        //imprimimos los headers del metodo
    let headers = request.headers
    console.log(headers)

    if (url === "/hola"){ 
        response.write((JSON.stringify(responseData)))
    }
    
    response.end();
})
//Ponemos al servidor  aescuchar en un puerto

server.listen(8001,()=>{
    console.log("Servidor iniciado en el puerto 8000")
}) 