alert(`Boas vindas ao Jogo do "Número Secreto"`);
let numeroMaximo = 50;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1; 

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`);
    if (chute == numeroSecreto) {
        break; 
    } else {
        if(chute > numeroSecreto) {
            alert(`o número secreto é menor que ${chute}.`);

        } else {
            alert(`O número secreto é maior que ${chute}.`);
        }
        tentativas++;
    }
}

if (numeroSecreto == numeroSecreto) {
    reiniciar.textContent = "Parabéns por acertar o número secreto. Para jogar novamente reinicie a página."
} 


let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);