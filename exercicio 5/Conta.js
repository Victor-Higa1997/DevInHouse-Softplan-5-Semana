
class Endereco{
    logradouro = 'rua teste'
    numero = '23'
    cidade = 'sao paulo'
    estado = 'sp'
    pais = 'Brasil'
    cep = '03775-122'
    

    constructor(logradouro, numero, cidade, estado, pais, cep){

        if(typeof(this.logradouro) != 'string'){
            throw 'Endereço inválido!'
        }
        if(typeof(this.numero) != 'string'){
            throw 'Endereço inválido!'
        } 
        if(typeof(this.cidade) != 'string'){
            throw 'Endereço inválido!'
        } 
        if(typeof(this.estado) != 'string'){
            throw 'Endereço inválido!'
        } 
        if(typeof(this.pais) != 'string'){
            throw 'Endereço inválido!'
        } 
        if(typeof(this.cep) != "string"){
            throw 'Endereço inválido!'
        }   
    }
}

class Cliente{
    nome = 'Victor'
    cpf = '999.999.999-99'
    endereco = new Endereco()
    numeroDoCelular = '(99)99999-9999'

    constructor(nome, cpf, endereco, numeroDoCelular){  
        if(typeof(this.nome) != 'string'){
            throw 'Valor Inválido!'
        }
        if(typeof(this.cpf) != 'string'){
            throw 'Valor Inválido!'

        }
        if((this.endereco instanceof Endereco) == false){
            throw 'Valor Inválido!'    
        }
        if(typeof(this.numeroDoCelular) != 'string'){
            throw 'Valor Inválido!'
        }
    }
}

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
console.log(new Conta)
