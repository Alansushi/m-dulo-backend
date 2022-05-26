function retirarDinero(cantidad){
    return new Promise ((resolve, reject)=>{
        console.log('procesando su petición')
        console.log(`La cantidad a retirar es:' ${cantidad}`)

        if (cantidad < 100){
            reject ("solo puedo darte más de $100");
        }

        resolve(`$${cantidad}.00`)
    })
}

const promesa2000= retirarDinero(2000)

promesa2000.then((dinero)=>{
    console.log("El cajero me dió: ",dinero)
}).catch((error)=>{
    console.log("El cajero falló, el error es", error)
})