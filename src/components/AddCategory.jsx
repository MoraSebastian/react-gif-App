import { useState } from 'react';

export const AddCategory = ( {onNewCategory} ) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ( { target } ) => {        
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault(); // para evitar que se recargue el componente
        if( inputValue.trim().length <= 1) return;

        // Utilizando Callback
        // setCategories( categories => [ inputValue, ...categories] )
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
        <input
            type='text'
            placeholder="Buscar gifs"
            value={ inputValue }
            
            onChange = { onInputChange }
        />
    </form>
  )
  {/* onChange={ (event) => onInputChange(event) }*/}
}
