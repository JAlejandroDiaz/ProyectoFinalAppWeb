import { Link } from "react-router-dom"
import {PagePelicula} from "../pages/PagePelicula"
import './Style.css'

export const EquipoCard = ({
  id,
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
  <Link to={`/Movie/${id}`}>
      <div className="mt-3  "  >
        <div className="card-image">
          <div className="image-overlay">
          <div className="card-content">
            <span className="card-content titulo">{original_title}</span>
            
          <p>{popularity}</p>
          <p>Fecha: {release_date}</p>
            <i >{vote_average}</i>
          
        </div>
            
          </div>
          <img className="card-img  rounded-3 "  src={`${URL_IMAGEN + poster_path}`} alt={original_title} />
          
        </div>
      
      </div>
    </Link>
    </>
  )
}
