import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => {
  //   //setCategories('Jojo');//Asi lo convierte a string
  //   //setCategories( [...categories, 'Jojo']); //Agrega al final
  //   setCategories( ['Jojo', ...categories]); //Agrega al inicio

  //   //setCategories( previousState => [ ...previousState, 'Jojo' ])

  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />
      
      <ol>
        {
          categories.map( category => 
            <GifGrid 
              key={ category }
              category={ category }
            />
          )
        }
      </ol>
      
    </>
  )
};
