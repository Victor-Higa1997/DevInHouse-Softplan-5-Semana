class Endereco{
    logradouro = 'rua teste'
    numero = '23'
    cidade = 'sao paulo'
    estado = 'sp'
    pais = 'Brasil'
    cep = '08340-150'

    constructor(logradouro, numero, cidade, estado, pais, cep){
        var expR = /^[0-9]{5}-[0-9]{3}$/

        if(typeof(this.logradouro) != 'string'){
            throw 'Endereço inválido!'
        }
        if(typeof(this.numero) != 'string'){
            throw 'Endereço inválido!'
        } 
        if(typeof(this.cidade) != 'string'){
            throw 'Endereço inválido!g'
        } 
        if(typeof(this.estado) != 'string'){
            throw 'Endereço inválido!'
        } 
        if(typeof(this.pais) != 'string'){
            throw 'Endereço inválido!'
        } 
        
        if(typeof(this.cep) != "string"){
            throw 'Endereço inválido!'
        }else{
            if(expR.test(this.cep)){
                console.log('CEP Válido!')
            }
            else{
                throw 'CEP inválido!'
            }
        }   
    }
}

console.log(new Endereco())
