import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe('Pruebas en <AddCategory />', () => { 
    const valor = 'Enzo'
    
    test('Debe cambiar el valor de la caja de texto', () => {
        render( <AddCategory onAddCategory={ () => {} }/> );
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: valor } });
        
        expect( input.value ).toBe(valor);
    });

    test('Debe llamar onAddCategory si el input tiene un valor', () => {
        const onAddCategory = jest.fn();
        
        render( <AddCategory onAddCategory={ onAddCategory}/> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: valor } });
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        // expect( onAddCategory ).toHaveBeenCalled();
        expect( onAddCategory ).toHaveBeenCalledTimes(1);
        expect( onAddCategory ).toHaveBeenCalledWith( valor );

    })

    test('No debe llamar onAddCategory si el input es menor o igual a 1 caracter', () => {
        const onAddCategory = jest.fn();
        
        render( <AddCategory onAddCategory={ onAddCategory }/> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: '' } });
        fireEvent.submit( form );

        expect( onAddCategory ).toHaveBeenCalledTimes(0);

    })
 })