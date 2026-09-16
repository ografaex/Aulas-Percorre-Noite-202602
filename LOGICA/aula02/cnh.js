let idade = "16"  
let nome = "Thiago"

// Para tirar carteira de motorista a pessoa precisa TER 18 ou MAIS anos de idade
// Se você não tem 18 anos não é posssivel tirar habilitação

// Eu enquanto usuário efetivarei validação de idade para saber se possso obter uma Carteira Nacional de Habilitação. 
// Para obter a CNH devo ter idade igual ou superior a 18 anos no ato de validação, caso contrário, espero receber uma mensagem informando que não possuo idade suficiente.

if (idade >= 18) {
    console.log("Você tem 18 anos ou mais,pode tirar CNH");
}

else {
    console.log("Você não tem 18 anos, você não pode tirar CNH");
}
