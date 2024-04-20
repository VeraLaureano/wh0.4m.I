import { toBinary } from '../utils/binary.js';
import { assert } from 'chai';

describe('toBinary function', () => {
    it('should convert string to binary representation', () => {
        // Define una entrada de texto y su resultado esperado en binario
        const text = 'Hello';
        const expected = '0100100001100101011011000110110001101111';

        // Llama a la función toBinary con la entrada de texto
        const result = toBinary(text);

        // Verifica si el resultado es igual al resultado esperado
        assert.equal(result, expected);
    });

    it('should handle empty input', () => {
        // Prueba con una entrada vacía
        const text = '';
        const expected = '';

        const result = toBinary(text);

        assert.equal(result, expected);
    });

    it('should return the same binary string if passed a binary string', () => {
      // Define una entrada binaria y su resultado esperado
      const binaryInput = '0100100001100101011011000110110001101111';

      // Llama a la función toBinary con la entrada binaria
      const result = toBinary(binaryInput);

      // Verifica si el resultado es igual a la entrada binaria
      assert.equal(result, binaryInput);
  });

    // Agrega más pruebas según sea necesario
});
