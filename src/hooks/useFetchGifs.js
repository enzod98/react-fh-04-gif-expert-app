import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );


    useEffect(() => {
        getGifs(category)
            .then( newImages =>  {
                setIsLoading( false );
                return setImages( newImages )
            });
    }, []);

  
    return {
        images,
        isLoading
    }
}


