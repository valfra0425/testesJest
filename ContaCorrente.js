class ContaCorrente {
    constructor(numeroConta, saldoInicial){
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
    }

    depositar(valor){
        if (valor > 0){
            this.saldo += valor;
            return true;
        } else {
            return false;
        }
    }

    sacar(valor){
        if (valor <= 0){
            return false;
        } else if (valor <= this.saldo){
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }

    verificarSaldo(){
        return this.saldo;
    }

    transferir(contaDestino, valor){
        let saque = this.sacar(valor)
        if (saque == 0){
            return false;
        }
        contaDestino.depositar(valor);
        return true;
    }
}

module.exports = ContaCorrente;