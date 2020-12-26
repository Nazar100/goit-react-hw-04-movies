import { useState } from 'react';
import {
  useRouteMatch,
  useHistory,
  useLocation,
  Route,
} from 'react-router-dom';

import { fetchMovieByQuery } from '../../api/api-services';
import MoviesSubPageView from '../MoviesSubPageView/MoviesSubPageView';
import './MoviesPageView.css';

export default function MoviesPageView() {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState('');

  const history = useHistory();
  const location = useLocation();

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchMovieByQuery(query).then(setFilms);
    history.push({ ...location, search: `query=${query}` });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="display-1">Movies Search</h1>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="submit">
              search
            </button>
          </div>

          <input
            className="form-control"
            type="text"
            value={query}
            onChange={handleChange}
          />
        </div>
      </form>

      {films && <MoviesSubPageView films={films} />}
    </>
  );
}
