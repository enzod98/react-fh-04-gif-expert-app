import { render, screen, fireEvent } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp />', () => { 
    test('Categories debe inicializarse con One Punch', () => {
        render( <GifExpertApp /> );
        expect( screen.getAllByText('One Punch') ).toBeTruthy();
    })

    test('Al hacer submit debe insertar un texto en h3', () => {
        render( <GifExpertApp /> );
        const inputValue = 'Dragonball';

        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( screen.getByText(inputValue) ).toBeTruthy();

    })
 })