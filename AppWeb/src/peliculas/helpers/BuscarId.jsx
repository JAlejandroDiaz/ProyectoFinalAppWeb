import React from 'react'

export const BuscarId = (id ="", setmovie) => {
  console.log(id)
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmFjNWE2ZjIyNDcyNGU2MDk5NWM2YjMzY2YxMTAxOSIsInN1YiI6IjY0ODRlNGY3YzlkYmY5MDBlM2ZmYjY3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E-7mraOIipPPzrxAItmFsy5C1E5zZ_AFTfBoriTuaI8'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then(response => {response.json()
           setmovie(response)})
        .then(response => console.log(response))
        .catch(err => console.error(err));


}
