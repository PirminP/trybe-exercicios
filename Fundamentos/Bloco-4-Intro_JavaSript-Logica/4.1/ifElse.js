let trybe = 19.40;
if (trybe >= 14 && trybe < 14.40) {
    console.log('Esquenta');
}
else if (trybe >= 16.20 && trybe < 18.00) {
    console.log('Aula ao vivo');
}
else if (trybe >= 19.40 && trybe < 20) {
    console.log('Fechamento')
}
else {
    console.log('Fora dos momentos sincronos')
}

//Exercise of lecture
const nota = 50;
if (nota >= 80) {
    console.log('Parabeńs, voce foi aprovada(o)');
}
else if (nota <80 && nota >= 60) {
    console.log('Voce está na nossa lista de espera');
}
else {
    console.log('Voce foi reprovada(o)');
}