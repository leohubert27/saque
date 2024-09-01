import PromptSync = require("prompt-sync");
const prompt = PromptSync();

const Valor = Number(prompt("Digite o valor a ser sacado: "));

function ConferirSaque(Valor: number): string | undefined {
    if (Valor % 10 !== 0) {
        return "Valor inválido. Insira um valor múltiplo de 10.";
    }
}

// Verifica se o valor é válido antes de continuar
const resultadoVerificacao = ConferirSaque(Valor);
if (resultadoVerificacao) {
    console.log(resultadoVerificacao);
} else {
    let Total = Valor;
    let Cedulas = 100;
    let TotalCedulas = 0;

    while (Total > 0) {
        if (Total >= Cedulas) {
            Total -= Cedulas;
            TotalCedulas++;
        } else {
            if (TotalCedulas > 0) {
                console.log(`Total de ${TotalCedulas} cédulas de R$ ${Cedulas}`);
            }

            // Atualiza o valor das cédulas conforme necessário
            if (Cedulas === 100) {
                Cedulas = 50;
            } else if (Cedulas === 50) {
                Cedulas = 10;
            }

            TotalCedulas = 0; // Reseta o contador de cédulas
        }
    }

    if (TotalCedulas > 0) {
        console.log(`Total de ${TotalCedulas} cédulas de R$ ${Cedulas}`);
    }
}
