import { decrypt } from '../utils/encrypt.js';
import { assert } from 'chai';

// Mock para la función toString
const toString = (binary) => {
  return binary; // Simplemente devuelve el mismo valor para este ejemplo
};

// Mock para la función atob
global.atob = (text) => {
  return Buffer.from(text, 'base64').toString('binary'); // Simplemente decodifica la cadena base64
};

// Mock para CryptoJS
const CryptoJS = {
  AES: {
    decrypt: (text, key) => {
      // Simplemente devuelve el texto sin cifrar
      return { toString: () => text };
    },
    enc: {
      Utf8: {}
    }
  }
};

// Mock para la función decodingChars
const decodingChars = (text) => {
  return text.toLowerCase(); // Solo como ejemplo, puedes ajustar el mock según tus necesidades
};

describe('decrypt function', () => {
    it('should decrypt message correctly', () => {
        // Define el mensaje cifrado y la clave de prueba
        const message = '01010110010101000100101001000111001110000101010001010101011010110100100101011000011010000011011001001100011010100111000001100110010101110111101001001001011010000110010101101001001101010100100001010110011011010111010001011001010011010101001100111001010101100101001101010011001101010011001001001101010010000111100001000001011000110101011000111000011101010100111001111001001101000111001001001011001100100111010001110001011000100101010101000001011101010101010101000111011101110111100001011001010101000101001001000110010011110101010001011010010001000101101000110010011100110111010001001011011110010011010001111001010010100100010001000101001100100101001001101100011011110011001101010111010110000101000100110000010011100111101001010110010001010110001001001000010100010111101001001100011010010110111101101101010010110110111001000001001100000110010000110001011001000111001001010000010100010011110100111101';
        const key = 'secret';

        // Define el resultado esperado
        const expected = 'hello world';

        // Llama a la función decrypt con el mensaje cifrado y la clave
        const result = decrypt(message, key);

        // Verifica si el resultado es igual al resultado esperado
        assert.equal(result, expected);
    });

    // Agrega más pruebas según sea necesario
});
