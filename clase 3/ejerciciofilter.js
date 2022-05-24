// const arreglon = [1,2,5,10,20,15,11,12,7,4,25]


// function mainFiltro (arreglo,callback){
// let newNumbers = []
// let numsFilter = arreglo.filter((number)=>{
//     if (number > 10){
        
//         newNumbers.push(number)
//         return number
//     }
// })
// console.log(numsFilter)
// }
// mainFiltro(arreglo)





// const newFilter = mainFiltro(arreglo,x => x - 10)
// console.log(newFilter)

const heladosComprados = ['chocolate', 'fresa', 'vainilla','vainilla','vainilla', 'chocolate', 'chocolate', 'vainilla']

function cuantificacion (heladosComprados,callback){
    let chocolate=[]
    let fresa = []
    let vainilla = []
    heladosComprados.filter((helado)=>{
        
        if (helado === 'chocolate'){
            chocolate.push(helado)
            
        }
        if (helado === 'vainilla'){
            vainilla.push(helado)
            
        }
        if (helado === 'fresa'){
            fresa.push(helado)
            return helado
        }
    })
        
    
    console.log(chocolate.length)
    console.log(fresa.length)
    console.log(vainilla.length)
    // let filtroHelados = heladosComprados.filter((helado)=>{
    //     if (helado === 'chocolate'){
    //         chocolate.push(helado)
    //         return helado
    //     }
        
    // })
    
}

function filtroSabor (helado){
    if (helado === 'chocolate'){
        chocolate.push(helado)
        
    }
    if (helado === 'vainilla'){
        vainilla.push(helado)
        
    }
    if (helado === 'fresa'){
        fresa.push(helado)
        return null
    }
}

cuantificacion(heladosComprados,filtroSabor)

const arreglo = [1,2,5,10,20,15,11,12,7,4,25]

function filter (array,callback){
    const resultados = [];

    for (let index = 0; index < array.length; index++) {
        const resultado = callback(array[index]);
        resultados.push(resultado)   
    }
    return resultados
}

function filtro (numero){
    if(numero <10){
    return numero 
    }
    else {
        return ''
    }

}
let big = filter(arreglo,filtro)
console.log(big)


function filter2(array,callback){
     const resultados = []

     for (let index = 0; index < array.length; index++) {
         const resultado = callback(array[index]);

         if (resultado){
             resultados.push(array[index])
         }
         
     }
     return resultados
}

const esPar = x => x%2 === 0
const esIMpar = x => x%2 ===1

const numerosPares = filter2 (arreglo,esPar)
console.log('pares', numerosPares)

const numerosImpares = filter2 (arreglo,esIMpar)
console.log('pares', numerosImpares)

