import { Conta } from '../exercicio 10/Conta.js'

class Transacao {
    conta = new Conta
    valorDaTransacao = 200
    idDeTransacao = 1
    contaTransferencia = 'Fulano'
    data = new Date

    transferencia() {
        this.idDeTransacao = this.idDeTransacao + 1
        if (this.valorDaTransacao > 300) {
            alert('As condições necessarias não foram atendidas!')
        } else {
            this.conta.saldo = this.conta.saldo - this.valorDaTransacao
            console.log(this.idDeTransacao)
            console.log(this.conta.saldo)
            console.log(this.contaTransferencia)
            console.log(this.data)
        }
    }
    deposito() {
        this.conta.saldo = this.conta.saldo + this.valorDaTransacao
        console.log(this.conta.saldo)
    }
    executarTransacao(){
        if(this.conta instanceof Conta == true && this.contaTransferencia != ''){
            this.transferencia()
        }
        if(this.conta instanceof Conta == true && this.contaTransferencia == '') {
            this.deposito()
        }
    }

}

const transacao = new Transacao()
transacao.executarTransacao()


