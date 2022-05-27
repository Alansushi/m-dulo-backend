const promesa = new Promise((resolve, reject)=>{
    resolve ('Un valor cuando todo salga bien')
})

promesa
    .then((unValor)=>{
        console.log('Resultado', unValor)
})
    .catch((unError)=>{
        console.log("El error es:", unError);
    })