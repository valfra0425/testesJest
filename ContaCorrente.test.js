const ContaCorrente = require('./ContaCorrente');

describe('testes unitários da classe conta corrente', () => {

    //O beforeEach é algo que é executado antes de cada test (ou it) do jest
    beforeEach(() => {
        n1 = new ContaCorrente(1, 200);
        n2 = new ContaCorrente(2, 2000);
    });

    it('teste verificação de saldo', () => {
        expect(n1.verificarSaldo()).toBe(200);
        expect(n2.verificarSaldo()).toBe(2000);
    });

    it('teste saque', () => {
        expect(n1.sacar(20)).toBe(true)
        expect(n1.verificarSaldo()).toBe(180);
        expect(n2.sacar(400)).toBe(true)
        expect(n2.verificarSaldo()).toBe(1600);
    });

    it('falha no saque', () => {
        expect(n1.sacar(9000)).toBe(false)
        expect(n1.verificarSaldo()).toBe(200)
        expect(n2.sacar(-10)).toBe(false)
        expect(n2.verificarSaldo()).toBe(2000)
    });

    it('deposito', () => {
        expect(n1.depositar(500)).toBe(true);
        expect(n1.verificarSaldo()).toBe(700);
        expect(n2.depositar(60)).toBe(true);
        expect(n2.verificarSaldo()).toBe(2060);        
    });

    it('falha no deposito', () => {
        expect(n1.depositar(0)).toBe(false);
        expect(n1.verificarSaldo()).toBe(200);
        expect(n2.depositar(-100)).toBe(false);
        expect(n2.verificarSaldo()).toBe(2000);      
    })

});