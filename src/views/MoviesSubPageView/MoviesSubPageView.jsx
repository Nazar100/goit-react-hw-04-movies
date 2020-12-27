import { Link } from 'react-router-dom';
import { useLocation, useRouteMatch } from 'react-router-dom';

import '../MoviesPageView/MoviesPageView.css';

export default function MoviesSubPageView({ films }) {
  const location = useLocation();
  const { url } = useRouteMatch();

  return (
    <ul className="list">
      {films &&
        films.map(f => {
          return (
            <li className="item" key={f.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${f.poster_path}`}
                alt={f.name}
                width="200"
              />
              <Link
                to={{
                  pathname: `${url}/${f.id}`,
                  state: { from: location.state ? location.state.from : '/' },
                }}
              >
                {f.name || f.title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
