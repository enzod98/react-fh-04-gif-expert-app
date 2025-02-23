import { getGifs } from "../../src/helpers/getGifs"


describe('Pruebas en getGifs.js', () => { 
    test('debe retornar un arreglo de gifs', async() => {
        const gifs = await getGifs('GOKU SSJ4');
        expect( gifs.length ).toBeGreaterThan(0);

        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    })
 })