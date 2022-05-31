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
    
   
    if (method === "GET" && url === "/hola"){
        response.setHeader('Content-type','application/json' )
        response.write((JSON.stringify(responseData)))
        response.end()
    }else if (method === "POST" && url === "/koders"){
        response.statusCode = 201;
        response.write("Aquí puedes crear koders")
        response.end();
    }else{
        response.statusCode = 404;
        response.write("Ruta no encontrada")
        response.end();
    }
})


server.listen(8001,()=>{
    console.log("Servidor iniciado en el puerto 8001")
}) 


    //imprimimos los headers del metodo
    
// let headers = request.headers
// console.log(headers)
