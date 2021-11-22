class Retangulo{
    constructor(altura, largura){
        this.altura = altura
        this.largura = largura
    }
}

//OBJETOS INSTANCIADOS
const retangulo1 = new Retangulo(150, 20)
const retangulo2 = new Retangulo(120, 30)
const retangulo3 = new Retangulo(30, 40)

var vetor = []

vetor.push(retangulo1)
vetor.push(retangulo2)
vetor.push(retangulo3)

console.log(vetor)