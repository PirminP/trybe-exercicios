//lecture Course Object
let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
    };
    
    //diasDaSemana.1; // SyntaxError: Unexpected number
    console.log(diasDaSemana['6']); // domingo


    let conta = {
        agencia: '0000',
        banco: {
          cod: '012',
          id: 4,
          nome: 'TrybeBank',
        },
      };
      
      let infoDoBanco = 'banco';
      console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
      console.log(conta[infoDoBanco]['nome']); // TrybeBank
      
      console.log(conta.agencia); // 0000
      console.log(conta['agencia']); // 0000
      
      console.log(conta.banco.cod); // 012
      console.log(conta['banco']['id']); // 4 
      console.log(conta.banco);
      console.log(conta);


      let usuario = {
        id: 99,
        email: 'jakeperalta@gmail.com',
        infoPessoal: {
          nome: 'Jake',
          sobrenome: 'Peralta',
          endereco: {
            rua: 'Smith Street',
            bairro: 'Brooklyn',
            cidade: 'Nova Iorque',
            estado: 'Nova Iorque',
          },
        },
      };
      
      console.log(usuario['id']); // 99
      console.log(usuario.email); // jakeperalta@gmail.com
      console.log(usuario['email'])
      
      console.log(usuario.infoPessoal.endereco.rua); // Smith Street
      console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque
      
      
      let moradores = [
        {
          nome: 'Luiza',
          sobrenome: 'Guimarães',
          andar: 10,
          apartamento: 1005,
        },
        {
          nome: 'William',
          sobrenome: 'Albuquerque',
          andar: 5,
          apartamento: 502,
        },
        {
          nome: 'Murilo',
          sobrenome: 'Ferraz',
          andar: 8,
          apartamento: 804,
        },
        {
          nome: 'Zoey',
          sobrenome: 'Brooks',
          andar: 1,
          apartamento: 101,
        },
      ];
      
      let primeiroMorador = moradores[0];
      console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
      console.log(primeiroMorador['andar']); // 10
      
      let ultimoMorador = moradores[moradores.length - 1];
      console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
      console.log(ultimoMorador.nome); // Zoey

//Lecture Exercise Objeto
//1,2,3,4,5
let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
  bestInTheWorld: [
    2006, 2007, 2008, 2009, 2010, 2018
  ],
};
console.log('A jogadora ' + player.name + ' ' + 'tem ' + player.age + ' anos de idade.');
console.log('A jogadora ' + player.name + ' ' + 'foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.')
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');


//lecture Course For/in For/of
let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

/*let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index,car[index]);
}*/

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};

//Lecture Exercise for/in e for/of
//1
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};
for (key in names) {
  console.log('Olá ' + names[key] + '!!!');
}
//2
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for (key in car) {
  console.log(key,car[key]);
}

//lecture Course Function

// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo

// Com função
function soma(a, b) {
  return a + b;
}

console.log(soma(5, 2)); // 7

function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + ' é maior que ' + segundoNum;
  } else if (segundoNum > primeiroNum) {
    return segundoNum + ' é maior que ' + primeiroNum;
  } else {
    return 'Os números são iguais';
  }
}

console.log(maiorNum(10, 20)); // 20 é maior que 10
console.log(maiorNum(2, -5)); // 2 é maior que -5
console.log(maiorNum(1, 1)); // Os números são iguais