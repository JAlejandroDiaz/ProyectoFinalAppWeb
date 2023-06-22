import axios from "axios";

export  async function Idgenero(setlisgenero){
    const apiKey = '8bac5a6f224724e60995c6b33cf11019';
    try{
        const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en`,
        )
       // console.log(response.data.genres)
        setlisgenero(response.data.genres)
    }catch(error){
        console.log(error)
    }
}