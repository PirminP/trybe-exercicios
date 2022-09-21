class Animal {
    constructor(public name: string) { }
    move() { console.log(`${this.name} está se movendo.`); }
  }
  class Bird extends Animal {
    move() { console.log(`${this.name} está voando.`); }
  }
  class Mammal extends Animal {
    move() { console.log(`${this.name} está andando.`); }
  }
  
  const a = new Animal('Tubarão');
  const b = new Bird('Papagaio');
  const m = new Mammal('Tatu');
  
  const myMove = (animal: Animal) => {
    animal.move();
  }
  myMove(a);
  myMove(b);
  myMove(m);
  
  /*
  Saída:
  Tubarão está se movendo.
  Papagaio está voando.
  Tatu está andando.
  */


// use of super

class Animal {
    constructor(public name: string) { }
    move() { console.log(`${this.name} está se movendo.`); }
  }
  class Bird extends Animal {
    move() {
      super.move();
      console.log(`${this.name} está voando.`);
    }
  }
  class Mammal extends Animal {
    move() { console.log(`${this.name} está andando.`); }
  }
  
  const a = new Animal('Tubarão');
  const b = new Bird('Papagaio');
  const m = new Mammal('Tatu');
  
  const myMove = (animal: Animal) => {
    animal.move();
  }
  myMove(a);
  myMove(b);
  myMove(m);
  
  /*
  Saída:
  Tubarão está se movendo.
  Papagaio está se movendo.
  Papagaio está voando.
  Tatu está andando.
  */


// classe/methods abstratos
/*
Dicionário en-pt:
- fish: peixe
*/
abstract class Animal {
    constructor(public name: string) { }
    abstract move(): void
  }
  class Bird extends Animal {
    move() { console.log(`${this.name} está voando.`); }
  }
  class Mammal extends Animal {
    move() { console.log(`${this.name} está andando.`); }
  }
  class Fish extends Animal {
    move() { console.log(`${this.name} está nadando.`); }
  }
  const a = new Fish('Tubarão');
  const b = new Bird('Papagaio');
  const m = new Mammal('Tatu');
  const myMove = (animal: Animal) => {
    animal.move();
  }
  myMove(a);
  myMove(b);
  myMove(m);
  /*
  Saída:
  Tubarão está nadando.
  Papagaio está voando.
  Tatu está andando.
  */


//methods/atributes estaticos
/*
Dicionário en-pt:
- employee: pessoa empregada/funcionária
- static: estático
*/
class Employee {
    private static employeeCount = 0
    constructor(public name: string) {
      Employee.addEmployee();
    }
    private static addEmployee() {
      this.employeeCount += 1;
    }
    static get employees() {
      return this.employeeCount;
    }
  }
  console.log(Employee.employees);
  const e1 = new Employee('Ronald');
  console.log(Employee.employees);
  const e2 = new Employee('Cíntia');
  console.log(Employee.employees);
  /*
  Saída:
  0
  1
  2
  */


// Polimorfismo com interfaces

interface Person {
    id: number;
    name: string;
    showIdentification(): void;
  }
  
  class PhysicalPerson implements Person {
    private static lastId = 0;
    private _name;
    private _id;
    private _cpf;
  
    constructor(name: string, cpf: string) {
      this._id = PhysicalPerson.newId();
      this._name = name;
      this._cpf = cpf;
    }
  
    private static newId() { return this.lastId++; }
    get id() { return this._id; }
    get name() { return this._name; }
    get cpf() { return this._cpf; }
    showIdentification() { console.log(this.id, this._cpf); }
  }
  
  class LegalPerson implements Person {
    private static lastId = 0;
    private _name;
    private _id;
    private _cnpj;
  
    constructor(name: string, cnpj: string) {
      this._id = LegalPerson.newId();
      this._name = name;
      this._cnpj = cnpj;
    }
  
    private static newId() { return this.lastId++; }
    get id() { return this._id; }
    get name() { return this._name; }
    get cnpj() { return this._cnpj; }
    showIdentification() { console.log(this.id, this._cnpj); }
  }
  
  const pp0 = new PhysicalPerson('John', '123456789');
  const pp1 = new PhysicalPerson('Jenny', '987654321');
  const lp = new LegalPerson('International Sales SA', '834729384723');
  
  const showIdentification = (person: Person) => {
    person.showIdentification();
  }
  showIdentification(pp0);
  showIdentification(pp1);
  showIdentification(lp);
  
  /*
  Saída:
  0 123456789
  1 987654321
  0 834729384723
  */
  
// Garanty types with generics
class Contract<T> { // Agora a classe recebe o genérico T
    static _number = 0;
    constructor(public broker: T) { } // T no lugar de Person
    static get number() { return this._number; }
  }
  
  // Tipo inferido (não explícito)
  const c1 = new Contract(pp0); // TypeScript "advinha" que pp0 é pessoa física
  console.log(c1.broker.cpf); // Okay
  
  // Tipagem explícita
  const c2: Contract<LegalPerson> = new Contract(lp); // Deixo explícito que lp é pessoa jurídica
  console.log(c2.broker.cnpj); // Okay
  
  /*
  Saída:
  123456789
  834729384723
  */