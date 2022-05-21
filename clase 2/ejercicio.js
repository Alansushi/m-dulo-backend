const num = [8,5,6,6,1,7,4]

function getMax (num){
    let result = num.reduce((accum,item)=>{
        if (item > accum){
            return accum = item
        }
        return accum
    },0)
    return result
}
let maxNum = getMax(num)
console.log(`El numero mayor del arreglo es ${maxNum}`)

