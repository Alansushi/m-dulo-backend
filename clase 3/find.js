const arreglo = [1,2,5,10,20,15,11,12,7,4,25]

function find(array,callback){
    let resultadoOk 

    for (let index = 0; index < array.length; index++) {
        const resultado = callback(array[index]);

        if (resultado){
            return resultadoOk=array[index]
        }
        
    }
    return resultadoOk
}

const menor10 = x => x < 10 
const mayor20= x => x > 20

const prueba = find (arreglo,menor10)
console.log(prueba)

const prueba2 = find (arreglo,mayor20)
console.log(prueba2)