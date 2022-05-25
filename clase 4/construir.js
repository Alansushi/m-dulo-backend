const muro = {
    construido : false,
    aplanado: false,
    pintado: false,

}

function construir (muro,callback){
    console.log("construyendo...")
    setTimeout(()=>{
        muro.construido = true;
        callback(muro)
    },500)
    
}

function aplanar (muro,callback){
    console.log("aplanando...")
    setTimeout(()=>{
        muro.aplanado = true;
        callback(muro)
    },200)
    
}
    
function pintar (muro,callback){
    console.log("pintando...")
    setTimeout(()=>{
        muro.pintado = true;
        callback(muro)
    },100)
    
}

// const muroConstruido = construir(muro);
// console.log('muro construido: ', muroConstruido)

// const muroAplanado = aplanar(muroConstruido)
// console.log('muro aplanado: ', muroAplanado)

// const muroPintado = pintar (muroAplanado)
// console.log('muro pintado: ', muroPintado)

construir(muro,(muroConstruido)=>{
    aplanar(muroConstruido,(muroAplanado)=>{
        pintar(muroAplanado,(muroPintado)=>{
            console.log("Muro Terminado", muroPintado)
        })
    })
})
