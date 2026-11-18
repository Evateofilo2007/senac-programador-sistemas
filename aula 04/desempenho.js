// Programa: Classificação de desempenho do aluno 
// Lê a nota no teminal (Node.js) e exibe o resultado

// Importa o módulo reaquire('readline');
const readline = require('readline');
// Cria a interface de entrada e saida (terminal)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Solicita a nota ao usuário
rl.question('Informe a nota do aluno (0 a 10): ' ,(resposta) => {
 
    // Validação da nota
    if (isNaN(nota) || nota < 0 || nota >10) {
    console.log(`Nota individual! Digite um valor entre 0 e 10.`);
} else if (nota>= 9.0) {
        console.log(`Nota: ${nota.toFixed(1)} - Resultado: Excelente`);
} else if (nota>= 7.0) {
        console.log(`nota: ${nota.toxFixed(1)} -Resultado: Bom`);
} else if (`nota: ${nota.toFixed(1)}-Resultado: Regular`);
        rl.close(); // Encerra a leitura no terminal
      });
      



        

