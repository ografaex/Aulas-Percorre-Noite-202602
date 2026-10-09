let nome = Rafael
let soma = 5 + 5
let i = 0

// Exibição dos valores armazenado das variaveis
console.log(nome);
console.log(soma);

// Estrutura de decisão
if (soma > 5) {
    console.log("A soma é maior que 5");
}

else {
    console.log("A soma é maior que 5");
}

// Laços de repetição
for (let i = 0; i < 10; i ++) {
console.log("O valor de i é:" + i);
}

// Função se refere a uma lógica que é repetida mais de uma vez, mas diferente de um laço de repetição a função é para ser invocada quando um programador escolher, independente de um contador
function somador(a, b) {
    return a + b
}

// A função pode ser invocada para passar valor a uma variavel, como no exemplo abaixo. Observe que a e b da criação da função foram substituidas pelos valores a ser somados, assim como nas variaveis da matematica
let total = somador(5 + 4)
console.log(total);

let total2 = somador(6 + 7)
console.log(total2);

// A função tambem pode ser invocada dentro de outras funções ou metodos, como no exemplo abaixo, onde invocamos a função somador dentro do console.log
console.log(somador(15, 25));