// Declaração de variáveis
const limiteMaximo = 10;  // Nota máxima permitida
const limiteMinimo = 0;   // Nota mínima permitida
let nota = 10;             // Nota obtida pelo estudante
let avaliacao;            // Variável para armazenar o resultado da avaliação

// Verifica se a nota está dentro do intervalo permitido
if (nota < limiteMinimo || nota > limiteMaximo) {
    console.log(`Erro: A nota deve estar entre ${limiteMinimo} e ${limiteMaximo}.`);
} else {
    // Classifica o estudante com base na nota
    if (nota < 6) {
        avaliacao = "Insuficiente";
    } else if (nota < 7) {
        avaliacao = "Regular";
    } else if (nota < 9) {
        avaliacao = "Bom";
    } else {
        avaliacao = "Excelente";
    }

    // Exibe o resultado
    console.log(`Nota: ${nota}`);
    console.log(`Avaliação: ${avaliacao}`);
}