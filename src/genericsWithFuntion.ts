// Generic Function

const createArrayWithGenerics = <T>(value: T) => {
    return [value]
}


const arrString = createArrayWithGenerics("arman")
const arrNumber = createArrayWithGenerics(222);
const arrobject = createArrayWithGenerics({
    id: 222,
    name: "arman"
})


console.log(arrString)
console.log(arrNumber)
console.log(arrobject)



// genericsFuntionWithTuple 
const genericsFuntionWithTuple = <X, Y>(params1: X, params2: Y) => {
    return [params1, params2]
}


const arrHum = genericsFuntionWithTuple("arman", 22)






const doubleValue = <T>(value: T):[T] => [value]

console.log(doubleValue("Arman"))   // ["Arman", "Arman"]
console.log(doubleValue(10))        // [10, 10]
console.log(doubleValue(true))     // [true, true]





