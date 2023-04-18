



let numberUm = Number(prompt ("Olá, escolha um número"));
let numberDois = Number(prompt ("Escolha mais um número"));


let soma = numberUm + numberDois;
let subtração = numberUm - numberDois; 
let multiplicação = numberUm * numberDois ; 
let divisão = numberUm / numberDois ; 
let restoDivisão = numberUm % numberDois ; 


alert ("A SOMA dos números que vocês escolheu é: " + soma);
alert ("A SUBTRAÇÃO dos números que vocês escolheu é: " + subtração);
alert ("A MULTIPLICAÇÃO dos números que vocês escolheu é: " + multiplicação);
alert ("A DIVISÃO dos números que vocês escolheu é: " + divisão);
alert ("O RESTO DA DIVISÃO dos números que vocês escolheu é: " + restoDivisão);


// Converte as entradas em números inteiros
numberUm = parseInt(numberUm);
numberDois = parseInt(numberDois);


// Verifica se os números são iguais
if(numberUm === numberDois) {
    alert ("Os números que você escolheu são iguais.");
} else {
    alert ("Os números que você escolheu são diferentes.");
}

// Verifica se a soma dos números é par ou ímpar
if((numberUm + numberDois) % 2 === 0) {
    alert ("A soma dos números que você escolheu é par.");
} else {
    alert ("A soma dos números que você escolheu é ímpar.");
}