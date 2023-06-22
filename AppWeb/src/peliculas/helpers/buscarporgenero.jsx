import axios from "axios";


export  async function buscarGenero(setmovies,idgenero){
    const apiKey = '8bac5a6f224724e60995c6b33cf11019';
const genreId = idgenero; 
try{

   const  response= await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`)
    //console.log(response.data.results)
    setmovies(response.data.results)
}catch(error){
    console.error('Error al obtener los datos:', error);
  }
}