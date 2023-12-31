import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs.js', () => {
  test('Debe de retornar un arreglo de gif', async () => {
    const gifs = await getGifs('One Punch');

    //! Verificar que el arreglo sea mayor a 0 (toBeGreaterThan)
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
