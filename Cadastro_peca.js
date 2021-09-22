let readlineSync = require('readline-sync');
var nome_peca;
var pesoPeca;
var capacidade=10;

nome_peca = readlineSync.question("Digite nome da peça: ");
pesoPeca = readlineSync.question("Digite o peso da peça: ");

if(pesoPeca > 100){
    if(capacidade > 10){
        console.log("Não Cadastrar!! Capacidade Máxima Atingida");
    }else if(nome_peca.length < 3){
        console.log("Não cadastrar!! Nome Inválido!!!");
    }else{
        console.log("Peça Cadastrada com sucesso!!!");
    }
}else{
    console.log("Não Cadastrar!! Peso insuficiente!!!");
}

