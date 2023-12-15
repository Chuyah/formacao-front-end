// 1 - Métodos

// const animal = {
//   nome: "bob",
//   latir: function () {
//     console.log("au au");
//   },
// };

// console.log(animal.nome);

// animal.latir();

// console.log(animal.latir);

// // 2 - Aprofundamento em métodos
// const pessoa = {
//   nome: "Victor",

//   getNome: function () {
//     return this.nome;
//   },

//   setNome: function (novoNome) {
//     this.nome = novoNome;
//   },
// };

// console.log(pessoa.nome);

// console.log(pessoa.getNome());

// pessoa.setNome("Gabi");

// console.log(pessoa.getNome());

// // 3 - Prototype
// const text = "asd";

// console.log(Object.getPrototypeOf(text));

// const bool = true;

// console.log(Object.getPrototypeOf(bool));

// const arr = [];

// console.log(arr.lenght);

// console.log(Object.getPrototypeOf(arr));

// // 4 - Mais sobre prototype
// const myObject = {
//   a: "b",
// };

// console.log(Object.getPrototypeOf(myObject));

// console.log(Object.getPrototypeOf(myObject) === Object.prototype);

// const mySecondObject = Object.create(myObject);

// console.log(mySecondObject);

// console.log(mySecondObject.a);

// console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// // 5 - Classes báscias
// const cachorro = {
//   raca: null,
//   patas: 4,
// };

// const pastorAlemao = Object.create(cachorro);

// pastorAlemao.raca = "Pastor Alemão";

// console.log(pastorAlemao);

// console.log(pastorAlemao.patas);

// const bulldog = Object.create(cachorro);

// bulldog.raca = "Bullgod";

// console.log(bulldog);

// console.log(cachorro);

// // 6 - Função como classe - função construtura
// function criarCachorro(nome, raca) {
//   const cachorro = Object.create({});

//   cachorro.nome = nome;
//   cachorro.raca = raca;

//   return cachorro;
// }

// const cuca = criarCachorro("Cuca", "Vira lata");

// console.log(cuca);

// const jack = criarCachorro("Jack", "Poodle");

// console.log(jack);

// console.log(Object.getPrototypeOf(jack));

// // 7 - funções como classe
// function Cachorro(nome, raca) {
//   this.nome = nome;
//   this.raca = raca;
// }

// const husky = new Cachorro("Ozzy", "Husky");

// console.log(husky);

// // 8 - metodos na funcao construtora
// Cachorro.prototype.uivar = function () {
//   console.log("Auuuuuuu!");
// };

// console.log(Cachorro.prototype);

// husky.uivar();

// // 9 - classes es6
// class CachorroClasse {
//   constructor(nome, raca) {
//     this.nome = nome;
//     this.raca = raca;
//   }
// }

// const jeff = new CachorroClasse("Jeff", "Labrador");

// console.log(jeff);

// console.log(Object.getPrototypeOf(jeff));

// // 10 - Mais sobre classes
// class Caminhao {
//   constructor(eixos, cor) {
//     this.eixos = eixos;
//     this.cor = cor;
//   }

//   descreverCaminhao() {
//     console.log(`Este caminhão tem ${this.eixos} e é da cor ${this.cor}`);
//   }
// }

// const scania = new Caminhao(6, "Vermelho");

// console.log(scania);

// scania.descreverCaminhao();

// Caminhao.motor = 4;

// const c2 = new Caminhao(4, "preta");

// console.log(c2.motor);

// Caminhao.prototype.motor = 4.0;

// const c3 = new Caminhao(6, "Azul");

// console.log(c3.motor);

// // 11 - override
// class Humano {
//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }
// }

// const victor = new Humano("Victor", 25);

// console.log(victor);

// Humano.prototype.idade = "Não definida";

// console.log(victor.idade);

// console.log(Humano.prototype.idade);

// 12 - Symbol
class Aviao {
  constructor(marca, turbinas) {
    this.marca = marca;
    this.turbinas = turbinas;
  }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[pilotos] = 3;
Aviao.prototype[asas] = 2;

const boeing = new Aviao("Boeing", 10);

console.log(boeing);

console.log(boeing[asas]);
console.log(boeing[pilotos]);

// 13 - getter e setter
class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }

  get exibirTitulo() {
    return `Você está lendo: ${this.titulo}`;
  }

  set adicionarTags(tags) {
    const tagsArrays = tags.split(", ");
    this.tags = tagsArrays;
  }
}

const myPost = new Post("Algum post", "É um post sobre programação");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "Programação, Javascript, Js";

// 14 - Herança
class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class Lobo extends Mamifero {
  constructor(patas, nome) {
    super(patas, patas);
    this.nome = nome;
  }
}

const shark = new Lobo(4, "Shark");

console.log(shark);

console.log(shark.patas);

// 15 - instaceof
console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4, "teste") instanceof Mamifero);

console.log(new Post("a", "b") instanceof Lobo);
