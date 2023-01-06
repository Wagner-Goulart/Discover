/*Existem 3 palavras reservadas para declarar uma variavel
    -var
    -let
    -cons -> const é constante, não permite reatribuir o valor

    Let e Const são as formas mais modernos de se declrar uma variavel
 */

var clima = 'quente' // declarando variavel 
clima = true // reatribuino o valor

console.log(typeof clima) // typeof para ver o tipo de dados atribuido a variavel

/* Scope - > determina a visibilidade da variavel no JS
    - var é global, visivel fora do bloco, acontece o hoisting
    - const e let são locais e só funcionam no bloco em que foram criadas

 */
/*
console.log('_______________VAR_____________________')
    console.log('> existe x antes do bloco ?', x)
{
    var x = 0
}

    console.log('> existe x antes do bloco ?', x)
*/
console.log('_____________CONST E LET_________________')

    {
        let y = 0
        console.log('> existe y antes do bloco ?', y)
    }


/*Nome de variaveis
    JS é case sensitive e aceita caracteres Unicode - caravteres especiais
    
        Não fazer
            iniciar a variavel com numero
            espaço entre as palavras
        
        Ideal
            Nomes que fazem sentido
            Que expliquem a função da variavel
            camelCase
            snake_case
            Escrever em Inglês
    */
    
       