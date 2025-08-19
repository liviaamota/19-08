class Pessoa {
     #idade
     constructor(idade) {
        this.#idade = idade
     }

     get idade() {
        return this.#idade + "anos"
     }
     set idade(valor){
        this.#idade = valor
     }
}

const pessoa1 = new Pessoa(20)
console.log(pessoa1.idade)

pessoa1.idade = 67
console.log(pessoa1.idade)

Getter (ler)               |     Setter (altera)
Só lê o valornão recebe    |     altera o valor
parâmetro                  |     recebe 1 parâmetro
usado como propriedade     |     também usado como propriedade normal

