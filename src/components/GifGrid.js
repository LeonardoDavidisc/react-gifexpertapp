import React from 'react'
import GifGridItem from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  //const [images, setImages] = useState([]);

  const { data:images, loading } = useFetchGifs( category );//Los custom hooks funcionan como functional components

  // useEffect( () => {
  //   //getGifts();
    
  //   getGifs( category )
  //     //.then( images => setImages( images ))
  //     .then( setImages )

  // }, [ category ]);//[] son las dependencias. Aqui indica que solo se ejecutara cuando el componente es renderizado por primera vez. Seria "ComponentDidMount" con clases
  // //[ category ] si la categoria cambia, volvera a correr la peticion
  
  // //getGifts();

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{ category }</h3>
      { loading && <p className="animate__animated animate__flash">'Loading...'</p> }

      {/* { loading ? 'Cargando... ' : 'Dato cargado'} */}

      <div className="card-grid">

        {
          //data.map( image => (
          images.map( image => (
            <GifGridItem
              key={ image.id }
              { ...image }
            />              
          ))
        }
        
        {
          // images.map( (image) => {
          //   //return <li key={ image.id }>{ image.title }</li>//Return explicito. si quisiera uno implicito pondria "()" en vez de "{}" despues de "=>"
          //   return (
          //     <GifGridItem
          //       key={ image.id }
          //       //image={ image }
          //       { ...image }
          //     />
          //   )
            
          // })
        }

      </div> 

    </>
  )
}
