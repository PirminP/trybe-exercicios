// Task 1

const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

// Qual a ordem de finalização de execução das linhas comentadas?
console.log(planetDistanceFromSun(mars)); // 1. A
console.log(planetDistanceFromSun(venus)); // 2. B
console.log(planetDistanceFromSun(jupiter)); // 3. C

// Task 2
// Qual a ordem de finalização de execução das linhas comentadas?
console.log(planetDistanceFromSun(mars)); // 1. A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // 3. B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // 2. C

// Task 3
// A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet,
// de forma que Marte seja impresso assincronamente, depois de 4 segundos.
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
      },
    };
    console.log("Returned planet: ", mars);
  };
  
  setTimeout(() => getPlanet(), 4000); // imprime Marte depois de 4 segundos

// Task 4
// Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra.
// O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio.
// Crie a função sendMarsTemperature , que imprime a temperatura em Marte.

const messageDelay = () => Math.floor(Math.random() * 5000);
//console.log(Math.random());
//console.log(messageDelay());

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
  const temperature = getMarsTemperature();
  setTimeout(() => console.log(`Mars temperature is: ${temperature} degree Celsius`), messageDelay());
}

sendMarsTemperature();

// Task 5
// Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô Curiosity o que você deseja fazer,
// uma vez obtida com sucesso a temperatura em Marte. Logo, adicione na função sendMarsTemperature uma callback
// que contenha as ações a serem tomadas em cima da temperatura.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const sendMarsTemperature = (action) => {
  const temp = getMarsTemperature();
  setTimeout(() => action(temp), messageDelay());
}

sendMarsTemperature(temperatureInFahrenheit);
sendMarsTemperature(greet); 

// Task 6
// Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações.
// Logo, adicione na função sendMarsTemperature uma outra callback que contenha as ações a serem tomadas em caso de falha.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (onSuccess, onError) => {
  const currentTemperature = getMarsTemperature();
  const messageSuccessfullySent = Math.random() <= 0.6;
  setTimeout(() => {
      if(messageSuccessfullySent) onSuccess(currentTemperature)
      else onError('Robot is busy');
  }, messageDelay());
}

sendMarsTemperature(temperatureInFahrenheit, handleError);
sendMarsTemperature(greet, handleError);
