// TODO: Implemente a função scheduleLog
// A função scheduleLog deve garantir que as mensagens sejam exibidas na ordem correta

function scheduleLog(number, message) {
    setTimeout(() => {
        console.log(message)
    }, number * 100);
}

// Não altere essa ordem
scheduleLog(1, "Mensagem 1");   // Esperado: exibe a mensagem 1
scheduleLog(4, "Mensagem 4");   // Esperado: exibe a mensagem 4
scheduleLog(2, "Mensagem 2");   // Esperado: exibe a mensagem 2
scheduleLog(3, "Mensagem 3");   // Esperado: exibe a mensagem 3
scheduleLog(5, "Mensagem 5");   // Esperado: exibe a mensagem 5
scheduleLog(7, "Mensagem 7");   // Esperado: exibe a mensagem 7
scheduleLog(9, "Mensagem 9");   // Esperado: exibe a mensagem 9
scheduleLog(8, "Mensagem 8");   // Esperado: exibe a mensagem 8
scheduleLog(10, "Mensagem 10"); // Esperado: exibe a mensagem 10
scheduleLog(6, "Mensagem 6");   // Esperado: exibe a mensagem 6
