import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('Pruebas en <GifItem/>', () => {
  const title = 'Saitama'
  const url = 'https://dragon-ball.com/saitame.jpg'

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  })

  test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();

    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);
    //!prueba para que la imagen y el url exista en el component
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  })

  test('Debe de mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url} />);
    //!prueba para que el titulo exista en el component
    expect(screen.getByText(title)).toBeTruthy();
  })
})

