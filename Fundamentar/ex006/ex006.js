// Declarar variavel
//let weight 
// variavel com valor undefined pois foi apenas declara, não a atribuição de valores
//console.log(weight)

/*let name = 'Wagner' // String
let age = 33 // number (integer)
let stars = 33.3 // number (float)
let isSubscribed = true // boolean
*/
let student = {
    //object
    name:'Wagner',
    age:33,
    weight:103,
    isSubscribed: true
}

/*console.log(typeof student)
console.log(`${student.name} de idade ${student.age} anos pesa ${student.weight} kilos`)
*/

let jonh = {
    name:'John',
    age:23,
    weight:93,
    isSubscribed: true
}

let students =[
    student,
    jonh
]

console.log(students[1])