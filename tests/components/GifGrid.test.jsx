import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock( "../../src/hooks/useFetchGifs" );

describe('Pruebas en <GifGrid />', () => { 
    const categoria = 'Dragonball'
    test('debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={ categoria } /> )

        // screen.debug();
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText( categoria ))
    
    })

    test('debe mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'GOKU',
                url: "Goku.png"
            },
            {
                id: 'ABCF',
                title: 'VEGETA',
                url: "VEGETA.png"
            },
            {
                id: 'ABCR',
                title: 'GOHAN',
                url: "GOHAN.png"
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render( <GifGrid category={ categoria } /> )

        expect( screen.getAllByRole('img').length ).toBe( gifs.length );
    
    })

 })