/* eslint-disable no-undef */
import { render } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp/>', () => {
  test('Debe de hacer match con el snapshot', () => {
    render(<GifExpertApp />)
  })

})
