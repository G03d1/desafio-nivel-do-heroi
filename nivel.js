//Variável

const heroi = {
    nome: "Eukesei",
    experiencia: 7000,
};

// Estrutura de decisão if/else if/else, operadores de comparação e exibição da mensagem com o nome do herói e o seu nível de acordo com o XP

if (heroi.experiencia < 1000) {
    console.log("O nível de " + heroi.nome + " é Ferro");
} else if (heroi.experiencia >= 1001 && heroi.experiencia <= 2000) {
    console.log("O nível de " + heroi.nome + " é Bronze")
} else if (heroi.experiencia >= 2001 && heroi.experiencia <= 5000) {
    console.log("O nível de " + heroi.nome + " é Prata")
} else if (heroi.experiencia >= 5001 && heroi.experiencia <= 7000) {
    console.log("O nível de " + heroi.nome + " é Ouro")
} else if (heroi.experiencia >= 7001 && heroi.experiencia <= 8000) {
    console.log("O nível de " + heroi.nome + " é Platina")
} else if (heroi.experiencia >= 8001 && heroi.experiencia <= 9000) {
    console.log("O nível de " + heroi.nome + " é Ascendente")
} else if (heroi.experiencia >= 9001 && heroi.experiencia <= 10000) {
    console.log("O nível de " + heroi.nome + " é Imortal")
} else if (heroi.experiencia >= 10001) {
    console.log("O nível de " + heroi.nome + " é Radiante")
} else {
    console.log("O nível de " + heroi.nome + " é Sem Nível")
}
