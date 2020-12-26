import { useState, useEffect } from 'react';
import { useParams, NavLink, useRouteMatch, Route } from 'react-router-dom';

import { fetchMovieById } from '../../api/api-services';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import './MoviesDatailsPage.css';

export default function MovieDetailsPage() {
  const { url } = useRouteMatch();

  const { movieID } = useParams();

  const [film, setFilm] = useState(null);

  useEffect(() => {
    fetchMovieById(movieID).then(setFilm);
  }, [movieID]);

  return (
    <>
      {film && (
        <div className="film">
          <div>
            <h1>{film.original_title}</h1>

            <img
              src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              alt={film.original_title}
              width="300"
            />
          </div>
          <div className="film-sub">
            <h2>{film.genres[0].name}</h2>
            <p>{film.overview}</p>
            <ul>
              <li>
                <NavLink className="btn btn-success" to={`${url}/cast`}>
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink className="btn btn-success" to={`${url}/reviews`}>
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>

          <Route path={`${url}/cast`}>
            <Cast id={movieID} />
          </Route>
          <Route path={`${url}/reviews`}>
            <Reviews id={movieID} />
          </Route>
        </div>
      )}
    </>
  );
}
