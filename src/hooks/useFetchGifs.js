import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
        /* Gracias a React 18 solo se dispara una renderizacion,
            a pesar de actualizar dos estados */
    }

    /* useEffect sirve para ejecutar efectos secundarios de
        acciones, puede ser cualquier accion, en este caso
        el segundo argumento que es un array de dependencias, 
        se encuentra vacio, lo cual quiere decir que el contenido
        del useEffect se ejecutara solo cuando el componente sea
        renderizado por primera vez */
    useEffect( () => {
        //getGifs(category);
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
    /* Ecmascript 6 cuando se tiene una propiedad que apunta 
        a una variable del mismo nombre, se puede dejar como en 
        el return */
}
