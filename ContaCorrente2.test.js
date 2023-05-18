const ContaCorrente2 = require('./ContaCorrente2');

describe('testes unitarios da ContaCorrente2', () => {
// aqui farei alguns testes diferentes para cobrir mais casos de teste
// sinceramente não sei se vão cair eles :) na real acho que a maioria não
// a explicação de cada teste feito aqui pode ser encontrada na documentação do jest https://jestjs.io/pt-BR/docs/using-matchers

    //O beforeEach é algo que é executado antes de cada test (ou it) do jest
    beforeEach(() => {
        n1 = new ContaCorrente2(1, 200);
        n2 = new ContaCorrente2(2, 2000);
    });

    it('teste de verificão do valor de um objeto', () => {
        expect(n1).toEqual({numeroConta: 1, saldo: 200});
    });

    it('teste usando o .not para verificar que não é alguma coisa', () => {
        expect(n1).not.toEqual(n2);
    });

    it('teste de valores boleanos e outros', () => {
        let a = null;
        let b = undefined;
        let c = true;
        let d = false;
        expect(a).toBeNull();
        expect(b).toBeUndefined();
        expect(c).toBeTruthy();
        expect(d).toBeFalsy();
    });

    it('testa o lançamento de um erro', () => {
        // verifica que lançou um erro
        // esse exemplo aqui tá diferente da documentação, é o jeito que eu fiz quando testava o mapif, não sei fazer do jeito que tava lá, só comparando com o objeto erro que foi retornado
        try{
            n1.sacar(5000);
        } catch(error){
            expect(error).toEqual(new Error('erro no saque'));
        }
    });
});