import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  //props o { setCategories }
  //props.setCategories() o setCategories()

  const [inputValue, setInputValue] = useState('');//Si se queda vacio es como si fuera un undefined, y marca error

  //---START---PARA QUE SE PUEDA CAMBIAR EL TEXTO USANDO EL STATE
  const handleInputChange = ( e ) => {
    setInputValue(e.target.value);
  }
  //-----END---PARA QUE SE PUEDA CAMBIAR EL TEXTO USANDO EL STATE

  const handleSubmit = (e) => {
    e.preventDefault();

    if( inputValue.trim().length > 2 ){
      setCategories( cat => [inputValue, ...cat ]); //Agrega al inicio
      setInputValue('');
    }


    console.log("Submit hecho");
  }

  return (
    <form onSubmit = { handleSubmit }>
      <input
        type="text"
        value={ inputValue }
        onChange= { handleInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}