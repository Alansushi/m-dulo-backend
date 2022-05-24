const arreglo = [1,2,5,10,20]

function map (array,callback){
    const resultados = [];

    for (let index = 0; index < array.length; index++) {
        const resultado = callback(array[index]);
        resultados.push(resultado)   
    }
    return resultados
}

function negativo (numero){
    if(numero <10){
    return numero 
    }

}
 let big = map(arreglo,negativo)
 console.log(big)

 const otrosResultados = map(arreglo, x => x+10)
 console.log(otrosResultados)