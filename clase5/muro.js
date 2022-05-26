function construir (muro ){
    console.log("construyendo...")

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            muro.construido = true;
            if(muro.construido !== true){
                reject(new Error("No se pudo construir el muro"))
            }
            resolve(muro);

        },500)
    })
}
function aplanar (muro){
    console.log("aplanando...")

    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            muro.aplanado = true;
            if(muro.construido !== true || muro.aplanado !== true){
                reject(new Error( "No se pudo aplanar el muro"))
            }
            resolve(muro)
        },200)
    })
    
    
}
    
function pintar (muro){
    console.log("pintando...")

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            muro.pintado = true;
             if (
                muro.construido !== true ||
                muro.aplanado !== true ||
                muro.pintado !== true){
                    reject (new Error("No se pudo pintar el muro"))
                }
            resolve(muro)
        },100)
    })
    
    
}

const muro = {
    construido: false,
    aplanado: false,
    pintado: false,
}
const promesaConstruir = construir(muro);

// promesaConstruir.then((muroConstruido)=>{
//     console.log("Muro actualmente construido: ",muroConstruido)
//     return aplanar(muroConstruido)
// })
//     .then((muroAplanado)=>{
//         console.log("Muro actualmente:", muroAplanado)
//         return pintar(muroAplanado)
//     })
//     .then((muroPintado)=>{
//         console.log("Muro actualmente:", muroPintado)

//         console.log("Terminamos el muro")
//     })


async function ordenarConstrucción(){
    await construir(muro);
    await aplanar(muro); 
    await pintar(muro);

    console.log("Se terminó el muro!", muro)

}

ordenarConstrucción()