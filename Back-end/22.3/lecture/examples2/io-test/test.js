// 1. STEP MOCHA: Estructuring req.

// describe('leArquivo', () => {
//     describe('Quando o arquivo existe', () => {
//       describe('a resposta', () => {
//         it('é uma string', () => {
//           //
//         });
  
//         it('é igual ao conteúdo do arquivo', () => {
//           //
//         });
//       });
//     });
  
//     describe('Quando o arquivo não existe', () => {
//       describe('a resposta', () => {
//         it('é igual a "null"', () => {
//           //
//         });
//       });
//     });
// });


// 2. STEP CHAI: ADD assercoes

// const { expect } = require('chai');

// const leArquivo = require('./leArquivo');

// const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

// describe('leArquivo', () => {
//   describe('Quando o arquivo existe', () => {
//     describe('a resposta', () => {
//       const resposta = leArquivo('arquivo.txt');

//       it('é uma string', () => {
//         expect(resposta).to.be.a('string'); // "a" is CHAI: expect response to be a string
//       });

//       it('é igual ao conteúdo do arquivo', () => {
//         expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
//       });
//     });
//   });

//   describe('Quando o arquivo não existe', () => {
//     it('a resposta é igual a "null"', () => {
//       const resposta = leArquivo('arquivo_que_nao_existe.txt');

//       expect(resposta).to.be.equal(null);
//     });
//   });
// });


// USING Stubs

// const fs = require('fs');
// const sinon = require('sinon');
// const { expect } = require('chai');

// const leArquivo = require('./leArquivo');

// const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

// sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO);

// describe('leArquivo', () => {
//   describe('Quando o arquivo existe', () => {
//     describe('a resposta', () => {
//       const resposta = leArquivo('arquivo.txt');

//       it('é uma string', () => {
//         expect(resposta).to.be.a('string');
//       });

//       it('é igual ao conteúdo do arquivo', () => {
//         expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
//       });
//     });
//   });

//   describe('Quando o arquivo não existe', () => {
//     it('a resposta é igual a "null"', () => {
//       const resposta = leArquivo('arquivo_que_nao_existe.txt');

//       expect(resposta).to.be.equal(null);
//     });
//   });
// });

// USING Stubs with before and after

const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const leArquivo = require('./leArquivo');

const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

describe('leArquivo', () => {
  describe('Quando o arquivo existe', () => {
    before(() => {
      sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO);
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = leArquivo('arquivo.txt');

        expect(resposta).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        const resposta = leArquivo('arquivo.txt');

        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    before(() => {
      sinon
        .stub(fs, 'readFileSync')
        .throws(new Error('Arquivo não encontrado'));
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('a resposta', () => {
      it('é igual a "null"', () => {
        const resposta = leArquivo('arquivo_que_nao_existe.txt');

        expect(resposta).to.be.equal(null);
      });
    });
  });
});