// 3. STEP Criate arq with function

// module.exports = () => {
//     //
// }


// 4. STEP implementation
const fs = require('fs');

function leArquivo(nomeDoArquivo) {
  try {
    const conteudoDoArquivo = fs.readFileSync(nomeDoArquivo, 'utf8');

    return conteudoDoArquivo;
  } catch (err) {
    return null;
  }
}

module.exports = leArquivo;