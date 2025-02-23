import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem />', () => { 

    const title = 'Goku ssj4'
    const url = 'https://enzodure.com/'

    test('debe de hacer match con el snapshot', () => {
        const {container } = render(<GifItem title={ title } url={ url } />);
        expect( container ).toMatchSnapshot();
    })

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
        render( <GifItem title={ title } url={ url } /> )
        // screen.debug();
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

    })

    test('Debe mostrar el título en un párrafo', () => {
        render( <GifItem title={ title } url={ url } /> )
        expect( screen.getByText( title ) ).toBeTruthy();   //Solo tiene en cuenta texto renderizado en el html, no sí está como valor de una propiedad

    })

 })