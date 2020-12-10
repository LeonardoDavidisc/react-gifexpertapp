import React, { useState } from 'react';

export const GifExpertApp = () => {

  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  const handleAdd = () => {
    //setCategories('Jojo');//Asi lo convierte a string
    //setCategories( [...categories, 'Jojo']); //Agrega al final
    setCategories( ['Jojo', ...categories]); //Agrega al inicio

    //setCategories( previousState => [ ...previousState, 'Jojo' ])

  }

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <button onClick={ handleAdd }>Agregar</button>
      
      <ol>
        {
          categories.map( category => {
            return <li key={ category }>{ category }</li>
          })
        }
      </ol>
      
    </>
  )
};
