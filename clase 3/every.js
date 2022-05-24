const arreglo = [1,2,5,10,20,15,11,12,7,4,25]

function every(array,callback){
    let resultadoOk=[]

    for (let index = 0; index < array.length; index++) {
        const resultado = callback(array[index]);

        if (resultado){
             resultadoOk.push(array[index])
        }
        
    }
    return resultadoOk
}

const mayor5 = x => x > 5 

const menor5 = x => x < 5

const prueba = every (arreglo,mayor5)
console.log(prueba)

const prueba2 = every (arreglo,menor5)
console.log(prueba2)
