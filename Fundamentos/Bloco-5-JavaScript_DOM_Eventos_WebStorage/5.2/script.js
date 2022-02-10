//Part1
//1
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
//2
let pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';
//3
let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'To be honest, it will be a daugther! :)'
//4
let primeiroFilho = pai.firstElementChild;
//5
let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
//6
let text = elementoOndeVoceEsta.nextSibling;
//7
let thirdChild = elementoOndeVoceEsta.nextElementSibling;
//8
let thirdChild2 = pai.lastElementChild.previousElementSibling;

//Part2
//1
let dad = document.getElementById('pai');
let brotherElementoOndeVoceEsta = document.createElement('section');
brotherElementoOndeVoceEsta.id = 'brotherElementoOndeVoceEsta';
dad.appendChild(brotherElementoOndeVoceEsta);
//2
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let sonElementoOndeVoceEsta = document.createElement('section');
sonElementoOndeVoceEsta.id = 'sonElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(sonElementoOndeVoceEsta);
//3
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let primeiroFilhoDoFilho = document.createElement('section');
sonPrimeiroFilhoDoFilho.id = 'primeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(sonPrimeiroFilhoDoFilho);
//4
let terceiroFilho = sonPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);
