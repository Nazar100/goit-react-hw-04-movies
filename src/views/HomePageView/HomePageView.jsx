import { fetchAllmovies } from '../../api/api-services';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './HomePageView.css';

export default function HomePageView() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchAllmovies().then(setFilms);
  }, []);

  return (
    <>
      <h1 className="display-1 center"> Trending Movies</h1>
      <ul className="list">
        {films.map(f => {
          return (
            <li key={f.id} className="item">
              <img
                src={`https://image.tmdb.org/t/p/w500/${f.poster_path}`}
                alt={f.name}
                width="200"
              />
              <Link to={`movies/${f.id}`}>{f.name || f.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
