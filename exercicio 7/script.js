import { Endereco } from './Endereco.js'

class Cliente {
    
    nome = 'Victor'
    cpf = '23548114890'
    endereco = new Endereco()
    numeroDoCelular = '(99)99999-9999'

    constructor(nome, cpf, endereco, numeroDoCelular) {
        if (typeof (this.nome) != 'string') {
            throw 'Valor Inválido!'
        }
        if (typeof (this.cpf) != 'string') {
            throw 'Valor Inválido!'

        }
        if ((this.endereco instanceof Endereco) == false) {
            throw 'Valor Inválido!'
        }
        if (typeof (this.numeroDoCelular) != 'string') {
            throw 'Valor Inválido!'
        }
    }

    static validaCPF(cliente) {
        var Soma;
        var Resto;
        Soma = 0;

        //return console.log(cliente.cpf)

        if (cliente.cpf == "00000000000") return console.log(false);

        for (var i = 1; i <= 9; i++) Soma = Soma + parseInt(cliente.cpf.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(cliente.cpf.substring(9, 10))) return console.log(false);

        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cliente.cpf.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(cliente.cpf.substring(10, 11))) return console.log(false);
        return console.log(true);
    }
}

const cliente = new Cliente()
Cliente.validaCPF(cliente) 

