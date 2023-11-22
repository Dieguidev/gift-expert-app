import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en useFetchGifs.js', () => {
  test('Debe de retornar un arreglo de gifs', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('Debe de retornar un arreglo de imagenes y el isloadin en false', async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));

    //! espera a que se termine de cargar las imagenes
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      { timeout: 6000 }
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
