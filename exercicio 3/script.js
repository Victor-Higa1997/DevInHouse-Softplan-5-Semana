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
        }   
    }
}

console.log(new Endereco())
