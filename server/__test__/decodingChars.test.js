import { decodingChars } from '../utils/encoding.js';
import { assert } from 'chai';

describe('decodingChars function', () => {
    it('should decode text correctly', () => {
        // Define el texto codificado y su resultado esperado después de la decodificación
        const text = 'h@-53j%ll.v0|@q_. wo-+.2$16l:_[2!z.';
        const expected = 'hello world';

        // Llama a la función decodingChars con el texto codificado
        const result = decodingChars(text);

        // Verifica si el resultado es igual al resultado esperado
        assert.equal(result, expected);
    });

    it('should handle empty input', () => {
        // Prueba con una entrada vacía
        const text = '';
        const expected = '';

        const result = decodingChars(text);

        assert.equal(result, expected);
    });

    it('should handle special characters', () => {
        // Prueba con caracteres especiales en la entrada
        const text = '!@#$%^&*()_+';
        const expected = '!@#$%^&*()_+';

        const result = decodingChars(text);

        assert.equal(result, expected);
    });

    // Agrega más pruebas según sea necesario
});
