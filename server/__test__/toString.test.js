import { toString } from '../utils/binary.js';
import { assert } from 'chai';

describe('toString function', function() {
    it('should convert binary string to original string', function() {
        // Define una entrada binaria y su resultado esperado
        const binary = '0100100001100101011011000110110001101111';
        const expected = 'Hello';

        // Llama a la función toString con la entrada binaria
        const result = toString(binary);

        // Verifica si el resultado es igual al resultado esperado
        assert.equal(result, expected);
    });

    it('should handle empty input', () => {
      // Prueba con una entrada vacía
      const binary = '';
      const expected = '';

      const result = toString(binary);

      assert.equal(result, expected);
    });

    it('should handle invalid binary input', () => {
      // Prueba con una entrada binaria inválida
      const binary = 'invalid-binary';
      const expected = '';

      const result = toString(binary);

      assert.equal(result, expected);
    });

    // Agrega más pruebas según sea necesario
});
