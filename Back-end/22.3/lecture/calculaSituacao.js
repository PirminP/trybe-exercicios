function calculaSituacao(media) {
    if (media > 7) {
      return 'aprovacao';
    }
    else if (media === 7) {
      return 'aprovacao';
    }
  
    return 'reprovacao';
  }
  
  module.exports = calculaSituacao;