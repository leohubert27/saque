"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var Valor = Number(prompt("Digite o valor a ser sacado: "));
function ConferirSaque(Valor) {
    if (Valor % 10 !== 0) {
        return "Valor inválido. Insira um valor múltiplo de 10.";
    }
}
// Verifica se o valor é válido antes de continuar
var resultadoVerificacao = ConferirSaque(Valor);
if (resultadoVerificacao) {
    console.log(resultadoVerificacao);
}
else {
    var Total = Valor;
    var Cedulas = 100;
    var TotalCedulas = 0;
    while (Total > 0) {
        if (Total >= Cedulas) {
            Total -= Cedulas;
            TotalCedulas++;
        }
        else {
            if (TotalCedulas > 0) {
                console.log("Total de ".concat(TotalCedulas, " c\u00E9dulas de R$ ").concat(Cedulas));
            }
            // Atualiza o valor das cédulas conforme necessário
            if (Cedulas === 100) {
                Cedulas = 50;
            }
            else if (Cedulas === 50) {
                Cedulas = 10;
            }
            TotalCedulas = 0; // Reseta o contador de cédulas
        }
    }
    if (TotalCedulas > 0) {
        console.log("Total de ".concat(TotalCedulas, " c\u00E9dulas de R$ ").concat(Cedulas));
    }
}
