// ARGUMENTOS E PARAMETROS

//é possível declarar funções dentro de variaveis, se não for declarado no nome da função, chama-se de funçao anonima

// parametros da função
/*const sum = function(number1, number2) {
  let total = number1 + number2
   return total // sempre que um função encontra um return ela para e retorno que vem logo a frente
}

// Invoking function
//sum(2,3) // argumentos

let number1  = 20
let number2 = 30 

console.log(`O valor é ${sum(number1, number2)}`)
*/

//function hoisting
//função anonima não sofre hoisting

/*sayMyname ()

function sayMyname() {
    console.log('Wagner')
}
*/

//Arrow Funtions
/*
const sayMyname = () => {
    console.log('Wagner Goulart')
}

sayMyname()
*/

// CALL BACK FUNCTION
//função como parametro de outro função
/*function sayMyname(name) {
    name()
}

sayMyname(
    () => {
        console.log ('Callback, função dentro de função')
    }
)
*/
// Função construtora ou function constructor
//  EXPRESSÃO NEW
// CRIAR UM NOVO OBJETO
//  THIS KEYWORD

// Statement
function Person (name) {
    this.name = name
    this.bebendo = function() {
        return this.name + ' está bebendo'
    }
}
const wagner = new Person ('Wagner')
const goulart = new Person ('Goulart')
console.log(wagner.bebendo())
