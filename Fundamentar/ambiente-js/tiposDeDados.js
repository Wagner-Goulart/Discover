

//string -> conjunto de caracteres
console.log('_________Strings__________')
console.log ("String utilizando aspas duplas") // "" aspas duplas
console.log('String com aspas simples') // '' aspas simples
console.log(`String com template Strings 

- Crase`) // `` template strings - crase - permite quebrar linhas sem quebrar o código

console.log(`Também permite o uso de interpolações como 1+1 é igual a ${1+1}`) // template strings permite o uso de interpolações através do ${}

/*
Number - > numeros
    Inteiros = 10
    reais ou float = 10.5 com virgula
    NaN = Not a Number
    Infitiny = Infinito
*/
console.log('_________Number___________')
console.log(33) // numero real
console.log(33.3) // reais ou float - que utilizam ponto e virgula
console.log (20+20) // possível utilizar expressçoes
console.log(20 /"a") // NaN
console.log(Infinity) // infinito

// Boolean -> somente 2 valores verdadeiro ou falso - true or false
console.log('___________Boolean________')
console.log(true)
console.log(false)

/*
    Undefined -> Indefinido

    Null 
        *Nulo
        *objeto que não possui nada dentr
        *diferente de undefined
 */
console.log('________Undefined / NULL_________')
console.log(undefined)
console.log(null)

/*
    Object
        - Objeto
        - Propiedades // atributos
        - Funcionalidade // métodos

        {propiedade: "Valor"} // sintaxe de declaração
 */

console.log('________Object_______')
console.log({
    name:"Wagner",
    lastName:"Goulart",
    age:33,
    // método é um função dentro de um objeto
    andar: function walk() {
        console.log('andou')
    }
})

/* Array (vetores)
    - Uma lista
    - Agrupamente de dados

    ['Wagner', 36, 'carro'] // sintaxe de declaração 
 */

console.log('__________Array________')
console.log(['Wagner', 36, 'estudando'])