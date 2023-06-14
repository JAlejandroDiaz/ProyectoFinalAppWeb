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
  
      <div className="card">
        <div className="card-image">
          <img src={`${URL_IMAGEN +poster_path}` } />
          <span className="card-content">{original_title}</span>
          <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">{vote_average}</i></a>
        </div>
        <div className="card-content">
          <p>{popularity}</p>
          <p>{release_date}</p>
        </div>
      </div>
    </>
  )
}
