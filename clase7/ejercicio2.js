const http = require("http");

//Creamos un servidor usando Create Server
const server = http.createServer((request,response)=>{

    //Vamos a hacer un request //
    let url = ("URL:", request.url)
    console.log(url)
    //Consultamos el método de la request
    let method = ("Método:", request.method)
    console.log(method)

    if (url === "/koders"){
        response.write("Aqui estan todos los koders y ya")
    }
    else if (url ==="/koder"){
        response.write("Aqui hay un solo koder")
    }else {
        response.write("No se que hacer, ayuda")
    

    }


    
    response.end();//Terminamos la respuesta y la enviamos
})
//Ponemos al servidor  aescuchar en un puerto

server.listen(8000,()=>{
    console.log("Servidor iniciado en el puerto 8000")
}) 