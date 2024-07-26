const { exec } = require('child_process');
const path = require('path');

// Caminho para o script que contém a função scheduleLog
const scriptPath = path.join(__dirname, 'index.js');

// Mensagens esperadas
const expectedOrder = [
    "Mensagem 1", "Mensagem 2", "Mensagem 3", "Mensagem 4", "Mensagem 5",
    "Mensagem 6", "Mensagem 7", "Mensagem 8", "Mensagem 9", "Mensagem 10"
];

describe('Verifica a ordem dos logs', () => {
    let logs = [];

    beforeAll((done) => {
        exec(`node ${scriptPath}`, (error, stdout, stderr) => {
            if (error) {
                return done(error);
            }
            // Captura e divide os logs
            logs = stdout.trim().split('\n');
            done();
        });
    });

    test('Mensagem na posição 1 deve ser "Mensagem 1"', () => {
        expect(logs[0]).toBe(expectedOrder[0]);
    });

    test('Mensagem na posição 2 deve ser "Mensagem 2"', () => {
        expect(logs[1]).toBe(expectedOrder[1]);
    });

    test('Mensagem na posição 3 deve ser "Mensagem 3"', () => {
        expect(logs[2]).toBe(expectedOrder[2]);
    });

    test('Mensagem na posição 4 deve ser "Mensagem 4"', () => {
        expect(logs[3]).toBe(expectedOrder[3]);
    });

    test('Mensagem na posição 5 deve ser "Mensagem 5"', () => {
        expect(logs[4]).toBe(expectedOrder[4]);
    });

    test('Mensagem na posição 6 deve ser "Mensagem 6"', () => {
        expect(logs[5]).toBe(expectedOrder[5]);
    });

    test('Mensagem na posição 7 deve ser "Mensagem 7"', () => {
        expect(logs[6]).toBe(expectedOrder[6]);
    });

    test('Mensagem na posição 8 deve ser "Mensagem 8"', () => {
        expect(logs[7]).toBe(expectedOrder[7]);
    });

    test('Mensagem na posição 9 deve ser "Mensagem 9"', () => {
        expect(logs[8]).toBe(expectedOrder[8]);
    });

    test('Mensagem na posição 10 deve ser "Mensagem 10"', () => {
        expect(logs[9]).toBe(expectedOrder[9]);
    });
});
