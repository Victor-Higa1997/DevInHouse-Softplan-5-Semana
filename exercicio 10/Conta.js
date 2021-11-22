import { Cliente } from '../exercicio 10/Cliente.js'

export class Conta{
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
console.log(new Conta)
