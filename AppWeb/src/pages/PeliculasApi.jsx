import React, { useState, useEffect } from 'react';

export const PeliculasApi = () => {
  const [Buscar, setBuscar] = useState('');
  const [Peliculas, setPeliculas] = useState([]);

  
    const fetchPeliculas = async () => {
      try {
        const response = await fetch( `http://www.omdbapi.com/?Y=${Buscar}&apikey=c3932d14`);
        const data = await response.json();
        if (data.Search) {
          console.log(JSON.stringify(data))
          setPeliculas(data.Search);
        }
      } catch (error) {
        console.error( error);
      }
    };

   
  

  

  return (
    <div>
      <input type="text"  onChange={(event)=>{
        setBuscar(event.target.value)
      }} placeholder="Buscar una pelicula" />
      <button className=' btn btn-primary' onClick={fetchPeliculas}>Buscar</button>
      <ul>
        {Peliculas.map((movie) => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </div>
  );
};


