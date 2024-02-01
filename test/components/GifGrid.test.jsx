/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

//!realiza para realizar el mock completo
jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en >GifGrid/', () => {
  const category = 'One Punch'


  test('Debe de mostrar el componente correctamente', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  })

  test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

    const gifs = [
      {
        id: '1',
        title: 'Saitama',
        url: 'http://localhost/abc.jpg'
      },
      {
        id: '2',
        title: 'Dragon Ball',
        url: 'http://localhost/bcd.jpg'
      },
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);

  })
})
