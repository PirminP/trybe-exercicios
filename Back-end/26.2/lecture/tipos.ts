//array
let names: string[] = ["Mary Joe", "Alan Joe"];


//tulpas
let person: [string, number] = ["Jane Doe", 35];


//type aliases
type Point = {
    x: number;
    y: number;
  };
  
  
  function printCoord(pt: Point) {
    console.log("O valor da cordenada x é: " + pt.x);
    console.log("O valor da coordenada y é: " + pt.y);
  }
  
  printCoord({ x: 100, y: 100 });


//type unions
function retornarCPF(cpf: number | string){
    console.log("Seu CPF é: " + cpf);
  }

//Classes

enum EyeColor {
    Black = "Pretos",
    Blue = "Azuis",
    Green = "Verdes",
    Brown = "Castanhos",
}

// usamos a palavra reservada class para definir uma classe
class Person {
    name: string;
    birthDate: Date; // o tipo Date está presente no TypeScript assim como no JavaScript
    eyeColor: EyeColor; // na cor dos olhos usamos uma Enum com valores pré definidos

    // aprenderemos mais sobre o construtor na próxima seção
    // considere-o como uma função utilizada para construir um objeto a partir da classe,
    // nele recebemos todos os dados necessários para construir um objeto de pessoa
    constructor(name: string, birthDate: Date, eyeColor: EyeColor) {
        // usamos o this para acessar as propriedades da instância da classe,
        // ele representa a própria instância que estamos criando
        // atribuimos o valor do parâmetro recebido a propriedade da instância da classe
        this.name  = name;
        this.birthDate  = birthDate;
        this.eyeColor  = eyeColor;
    }

    speak(): void {
        console.log(`${this.name} está falando.`);
    }

    eat(): void {
        console.log(`${this.name} está comendo.`)
    }

    walk(): void {
        console.log(`${this.name} está andando.`)
    }
}

// usamos a palavra reservada new para criar uma instância de Person
// e passamos os parâmetros necessários para o construtor
const person1 = new Person("Jane Doe", new Date("1986-01-01"), EyeColor.Brown);

console.log(person1);
person1.speak()

// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z",
//   "eyeColor": "Castanhos"
// }
// "Jane Doe está falando."


//Interface
interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}

let employee: Employee = {
    firstName : "John",
    lastName: "Doe",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}


interface Teacher extends Employee {
    firstName: string;
    lastName: string;
    subject: string;
    fullName(): string;
    sayHello(): string;
}

let teacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    subject: "Matemática",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    },
    sayHello(): string {
        return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
    }
}