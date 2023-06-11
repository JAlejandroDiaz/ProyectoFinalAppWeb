import { Link } from "react-router-dom"

export const EquipoCard = ({
  original_title,
  overview,
  popularity,
  poster_path,
  release_date,
  vote_average,
  vote_count
}) => {
  const URL_IMAGEN = "https://image.tmdb.org/t/p/original";
  return (
    <>
    <div class="row">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src={`${URL_IMAGEN +poster_path}` } />
          <span class="card-title">{original_title}</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">{vote_average}</i></a>
        </div>
        <div class="card-content">
          <p>{popularity}</p>
          <p>{release_date}</p>
        </div>
      </div>
    </div>
  </div>
   
    </>
  
    
 
  )
}
