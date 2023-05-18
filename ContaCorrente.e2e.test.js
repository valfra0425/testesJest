const ContaCorrente = require('./ContaCorrente');

describe('testes de integração da classe de ContaCorrente', () => {

    //O beforeEach é algo que é executado antes de cada test (ou it) do jest
    beforeEach(() => {
        n1 = new ContaCorrente(1, 200);
        n2 = new ContaCorrente(2, 2000);
    });

    it('teste do método de transferencia', () => {
        expect(n2.transferir(n1, 200)).toBe(true)
        expect(n1.verificarSaldo()).toBe(400);
        expect(n2.verificarSaldo()).toBe(1800);  
    });

    it('teste da falha do método de transferencia', () => {
        expect(n1.transferir(n2, 300)).toBe(false)
        expect(n1.verificarSaldo()).toBe(200);
        expect(n2.verificarSaldo()).toBe(2000);
    });
});

//como não sabemos se Jorge vai fazer um método de transferencia ou não aqui vai o teste de integração só com a sequência de ações de uma transferencia

describe('testes de integração da classe de ContaCorrente', () => {

    //O beforeEach é algo que é executado antes de cada test (ou it) do jest
    beforeEach(() => {
        n1 = new ContaCorrente(1, 200);
        n2 = new ContaCorrente(2, 2000);
    });

    it('teste fluxo de transferência ', () => {
        expect(n1.sacar(50)).toBe(true);
        expect(n2.depositar(50)).toBe(true);
        expect(n1.verificarSaldo()).toBe(150);
        expect(n2.verificarSaldo()).toBe(2050);
    });

    it('teste da fluxo de uma transferencia com uma falha', () => {
        expect(n1.sacar(500)).toBe(false);
        //já que o erro já aconteceu na primeira parte da transferencia então não vai nem entrar aqui no deposito
        if (n1.sacar(500)){
            // não será executado por causa do erro do saque
            expect(n2.depositar(50)).toBe(true);
        }
        expect(n1.verificarSaldo()).toBe(200);
        expect(n2.verificarSaldo()).toBe(2000);
    });
});