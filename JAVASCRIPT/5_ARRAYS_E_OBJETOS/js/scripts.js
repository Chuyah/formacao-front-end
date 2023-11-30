// // 1 - arrays
// const list = [1, 2, 3, 4, 5];

// console.log(list);

// console.log(typeof list);

// const itens = ["Victor", true, 2, 4.12, []];

// console.log(itens);

// // 2 - mais sobre arrays
// const arr = ["a", "b", "c", "d", "d"];

// console.log(arr[0]);

// console.log(arr[2]);

// console.log(arr[82]);

// // 3 - propriedades
// const numbers = [5, 3, 4];

// console.log(numbers.length);

// console.log(numbers["length"]);

// const myName = "Victor";

// console.log(myName.length);

// // 4 - métodos
// const otherNumbers = [1, 2, 3];

// const allNumbers = numbers.concat(otherNumbers);

// console.log(allNumbers);

// const text = "Algum texto";

// console.log(text.toUpperCase());

// console.log(typeof text.toUpperCase);

// console.log(text.indexOf("g"));

// // 5 - Objetos
// const person = {
//   name: "Victor",
//   age: 25,
//   job: "Programador",
// };

// console.log(person);

// console.log(person.name);

// console.log(person.name.length);

// console.log(typeof person);

// // 6 - criando e deletando propriedades
// const car = {
//   engine: 2.0,
//   brand: "Vw",
//   model: "Tiguan",
//   km: 20000,
// };

// console.log(car);

// car.doors = 4;

// console.log(car);

// delete car.km;

// console.log(car);

// // 7 - mais sobre objetos
// const obj = {
//   a: "teste",
//   b: true,
// };

// console.log(obj instanceof Object);

// const obj2 = {
//   c: [],
// };

// Object.assign(obj2, obj);

// console.log(obj2);

// console.log(obj);

// // 8 - Conhecendo melhor objtos
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(car));

// console.log(Object.entries(car));

// // 9 - Mutação
// const a = {
//   name: "Victor",
// };

// const b = a;

// console.log(a);

// console.log(b);

// console.log(a === b);

// a.age = 25;

// console.log(b);

// delete b.age;

// console.log(a);

// console.log(b);

// 10 - loop em array
const users = ["Victor", "João", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
  console.log(`Listando o usuário: ${users[i]}`);
}

// 11 - push e pop
const array = ["a", "b", "c"];

array.push("d");

console.log(array);

console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("z", "x", "y");

console.log(array);
