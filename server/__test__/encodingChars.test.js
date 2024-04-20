import { encodingChars } from '../utils/encoding.js';
import { assert } from 'chai';

describe('encodingChars function', () => {
    it('should encode text correctly', () => {
        // Define el texto de entrada y su resultado esperado después de la codificación
        const text = 'hello world';
        const expected = 'h@-53j%ll.v0|@q_. wo-+.2$16l:_[2!z.';

        // Llama a la función encodingChars con el texto de entrada
        const result = encodingChars(text);

        // Verifica si el resultado es igual al resultado esperado
        assert.equal(result, expected);
    });

    it('should handle empty input', () => {
        // Prueba con una entrada vacía
        const text = '';
        const expected = '';

        const result = encodingChars(text);

        assert.equal(result, expected);
    });

    it('should handle special characters', () => {
        // Prueba con caracteres especiales en la entrada
        const text = '!@#$%^&*()_+';
        const expected = '!@#$%^&*()_+';

        const result = encodingChars(text);

        assert.equal(result, expected);
    });

    // Agrega más pruebas según sea necesario
});
