const fs = require('fs'); // importar modulo fs

const nomeDoArquivo = 'meu-arquivo.txt'; // criar variabel con arquivo para leer

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8'); // chamar metodo
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}