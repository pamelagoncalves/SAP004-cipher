const cipher = {

  // CIFRAR
  encode: function cipher(offset, mensagem) {
    let deslocamento = Number(offset);
    // essas var é uma declaração de vars que estao fora do laço
    let msgCode = [];
    // Vareavel em array recebe mais de uma informação dentro dela.
    if ((mensagem !== 0 && mensagem !== null) && (offset !== 0 && offset !== null)) {
      for (let contador = 0; contador < mensagem.length; contador++) {
        let codigoDaLetraAsc = mensagem.toUpperCase().charCodeAt(contador);
        if (codigoDaLetraAsc !== 32) {
          //basicamente a formula matematica que devolve a nova letra
          let novaLetra = String.fromCharCode(((codigoDaLetraAsc - 65 + deslocamento) % 26) + 65);

          // Pega os elementos e adiciona dentro da var vetor.
          msgCode.push(novaLetra);
        }
        else {
          msgCode.push(" ");
        }
      }
    }
    else {
      throw new TypeError;
    }
    // retorna o texto sem a virgula
    return msgCode.join("");
  },



  // DECIFRAR 
  decode: function decipher(offset, mensagem) {
    let deslocamento = Number(offset);
    let msgDecode = [];
    if ((mensagem !== 0 && mensagem !== null) && (offset !== 0 && offset !== null)) {
      for (let contador = 0; contador < mensagem.length; contador++) {

        // cod letra
        let codigoDaLetraAsc = mensagem.toUpperCase().charCodeAt(contador);
        if (codigoDaLetraAsc !== 32) {
          let novaLetra = String.fromCharCode(((codigoDaLetraAsc + 65 - deslocamento) % 26) + 65);
          msgDecode.push(novaLetra);
        }
        else {
          msgDecode.push(" ");
        }
      }
    }
    else {
      throw new TypeError;
    }
    // retorna o texto sem a virgula
    return msgDecode.join("");
  }
}


export default cipher;