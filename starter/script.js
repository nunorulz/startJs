/*console.log({
  nome: "Bruno",
  idade: 34,
  andar: function(){
    console.log('andar')
  }
})*/
//console.log('Bruno Rocha')

/*var clima = 'Quente'
console.log(clima)*/

//var name = "Bruno"
//console.log(typeof name)

//const sayMyName = () => {
//  console.log('Bruno')
//}

//callback funtion

/*function sayMyName(name){
  console.log(name)
}

sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)*/

//Função construtora

/*function Person(name){
  this.name = name
  this.walk = function(){
    return this.name + " está andando"
  }

}

const Bruno = new Person("Bruno")
const Rocha = new Person("Rocha")
console.log(Bruno.walk())
console.log(Rocha.walk())

let string = '123'
console.log(Number(string))
let number = 321
console.log(String(number))*/

// let word = 'umapalavramuitogrande'
// console.log(word.length)
// let number = 1234
// console.log(String(number).length)

// let number = 354584.2658
// console.log(number.toFixed(2).replace(".",","))

// function greetMe(nome) {
//   alert("Olá, " + nome);
// }

// greetMe("Bruno"); // "Olá, mundo"

// let word = "Programar é muito bacana!"
// console.log(word.toUpperCase().toLocaleLowerCase())

// let phrase = 'Eu quero viver o amor!'
// console.log(phrase.includes("amor!"))

// let texto = 'Eu quero viver o amor!'
// let myArray = texto.split(' ')
// let textoComUnderline = myArray.join('_')
// console.log(textoComUnderline.toUpperCase())

//Cria um Array vazio
// let myArray = new Array(10)
// console.log(myArray)

//New
// let name = new String ('Bruno')
// name.surName = 'Rocha'
// let age = new Number(34)

// let date = new Date('2020-12-01')
// console.log(date)

//operadores unarios
let person = {
  name: 'Bruno',
  age: 34
}

delete person.age
console.log(person)