
import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory/>', ()=> {
    test('Debe de cambiar el valor de la caja de texto', ()=> {
      render(<AddCategory onAddCategory={ ()=>{} }/>)

      const input = screen.getByRole('textbox');

      fireEvent.input(input, {target: {value: 'Saitama'}})

      expect(input.value).toBe('Saitama');
    })

    test('Debe de llamar onAddCategory si el input tiene un valor', ()=> {
      const inputValue = 'Saitama';
      //!esto es una funcion
      const onAddCategory = jest.fn();

      render(<AddCategory onAddCategory={ onAddCategory }/>);

      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');

      fireEvent.input(input, {target: {value: inputValue}});
      //! dispara el submit del formulario
      fireEvent.submit(form);

      expect(input.value).toBe('');
      //!evalua que la funcion sea llamada
      expect(onAddCategory).toHaveBeenCalled();
      //!numero de veces que fue llamada una funcion
      expect(onAddCategory).toHaveBeenCalledTimes(1);
      //! La funcion recibe como parametro el valor del input
      expect(onAddCategory).toHaveBeenCalledWith(inputValue);
    })

    test('No debe de llamar onAddCategory si el input esta vacio', ()=> {
      const onAddCategory = jest.fn();

      render(<AddCategory onAddCategory={ onAddCategory }/>);

      const form = screen.getByRole('form');

      fireEvent.submit(form);

      expect(onAddCategory).toHaveBeenCalledTimes(0);

    })
})
