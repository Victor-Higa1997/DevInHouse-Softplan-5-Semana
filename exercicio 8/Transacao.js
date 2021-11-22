import { Cliente } from '../exercicio 8/Cliente.js'

class Conta{
    numeroDaConta = '999-9'
    saldo = 1000
    cliente = new Cliente()

    constructor(){
        if(typeof(this.numeroDaConta) == 'string'){
            console.log('Conta = Okay!')
        }
        if(typeof(this.saldo) == 'number'){
            console.log('Saldo = Okay!')
        }
        if(this.cliente instanceof Cliente){
            console.log('Cliente = Okay!')
        }           
    }
}

class Transacao{
    conta = new Conta
    valorDaTransacao = 100

    transferencia(){
        this.conta.saldo = this.conta.saldo - this.valorDaTransacao
        console.log(this.conta.saldo)
    }
    deposito(){
        this.conta.saldo = this.conta.saldo + this.valorDaTransacao
        console.log(this.conta.saldo)
    }
}

const transacao = new Transacao()
transacao.deposito()
transacao.deposito()
transacao.transferencia()
