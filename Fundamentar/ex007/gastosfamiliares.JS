// SISTEMA QUE CALCULA AS ENTRADAS E SAIDAS DE UMA FAMILIA

const caixa = {
    receitas: [100, 200, 200, 300, 1000.53],
    despesas: [100, 200, 500, 500]
}

// SOMA AS RECEITAS

let receita = caixa.receitas
let totalReceitas = 0


for(let i = 0; i < receita.length; i++) {
    totalReceitas += receita[i]
}

// SOMA AS DESPESAS
let despesas = caixa.despesas
let totalDespesas = 0


for(let i = 0; i < despesas.length; i++) {
    totalDespesas += despesas[i]
}

// MOSTRA RESULTADO DO CAIXA
if(totalReceitas > totalDespesas) {
    console.log(` Valor é caixa é de R$ ${totalReceitas - totalDespesas}, Saldo positivo !!`)
} else {
    console.log(` Valor é caixa é de R$ ${totalReceitas - totalDespesas}, Saldo negativo !!`)
}

