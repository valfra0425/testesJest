    --Processo de instalação do Jest--

1. faça a instação do jest com: npm install --save-dev jest

2. para que o jest encontre o que quer que você queira testar será necessario exportar a classe/função.

exemplos:

    module.exports = ContaCorrente;

    ou

    module.exports = {
        depositar,
        verificarLogin
    }

3. crie seu arquivo de teste. ele pode ser qualquer coisa que você queira com .test.js no final

4. no package.json você deve adicionar o script de teste como jest.
provavelmente já vai ter um script: com test: dentro, apenas adicione o "jest" no lugar do que tiver lá

exemplo:

    {
        "scripts": {
            "test": "jest"
        }
    }

5. por fim execute o teste com: npm run test.

    --explicação dos arquivos--

--ContaCorrente.js--
O arquivo ContaCorrente.js é uma classe de conta corrente simples com número de conta e saldo como atributos, além disso tem metodos de verificar saldo, saque e deposito. Cada método tem uma verificação bem simples de falha durante o funcionamento, caso ele funcione corretamente ele retorna true, em um contrario, retorna false.
Além disso existe um método de transferencia que recebe uma conta corrente e um valor, a partir disso esse método faz um saque na conta que utilizou o método e faz um deposito na conta informada no parâmetro.

--ContaCorrente.test.js--
Neste arquivo estão os testes unitários da classe ContaCorrente, lá ocorre a verificação de retorno de cada método da classe tanto no sucesso como na falha.

--ContaCorrente.e2e.test.js--
Neste arquivo estão os testes de integração da classe ContaCorrente, lá ele testa o método de transferencia de duas formas, uma chamando ele normalmente e outra chamando o fluxo de exceução de saque e depois deposito.

--ContaCorrente2.js--
É um arquivo quase igual ao ContaCorrente.js só que com algumas alterações para fazer testes

--ContaCorrente2.test.js--
É o arquivo de teste do ContaCorrente2.js, lá ele cobre alguns casos de teste que os outros não estavam cobrindo
