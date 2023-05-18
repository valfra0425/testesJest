class ContaCorrente2 {
    constructor(numeroConta, saldoInicial){
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
    }

    depositar(valor){
        if (valor > 0){
            this.saldo += valor;
            return true;
        } else {
            throw new Error('erro no deposito');
        }
    }

    sacar(valor){
        if (valor <= 0){
            throw new Error('erro no saque');
        } else if (valor <= this.saldo){
            this.saldo -= valor;
            return true;
        } else {
            throw new Error('erro no saque');
        }
    }

    verificarSaldo(){
        return this.saldo;
    }

    transferir(contaDestino, valor){
        this.sacar(valor)
        contaDestino.depositar(valor);
        return true;
    }
}

module.exports = ContaCorrente2;