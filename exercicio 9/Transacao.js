import { Conta } from '../exercicio 9/Conta.js'

class Transacao {
    conta = new Conta
    valorDaTransacao = 100
    idDeTransacao = 1
    contaTransferencia = 'Fulano'
    data = new Date

    transferencia() {
        this.idDeTransacao = this.idDeTransacao + 1
        this.conta.saldo = this.conta.saldo - this.valorDaTransacao

        console.log(this.idDeTransacao)
        console.log(this.conta.saldo)
        console.log(this.contaTransferencia)
        console.log(this.data)
    }
    deposito() {
        this.conta.saldo = this.conta.saldo + this.valorDaTransacao
        console.log(this.conta.saldo)
    }
}

const transacao = new Transacao()
transacao.deposito()
transacao.deposito()
transacao.transferencia()
transacao.transferencia()
transacao.transferencia()
