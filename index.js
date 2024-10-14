function determinarClasse(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        return "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        return "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        return "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        return "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        return "Imortal";
    } else if (xp >= 10001) {
        return "Radiante";
    } else {
        return "Desconhecido";
    }
}

// Função para gerar um número aleatório entre min e max (inclusive)
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Variáveis para armazenar o nome e a quantidade de XP do herói
const nomeHeroi = "Sr do Passinho"; // Substitua pelo nome do herói
const xpHeroi = gerarNumeroAleatorio(0, 11000); // Gera um número aleatório de XP entre 0 e 11000

// Determina a classe do herói com base na quantidade de XP
const nivelHeroi = determinarClasse(xpHeroi);

// Exibe a mensagem final
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi} com ${xpHeroi} XP`);
