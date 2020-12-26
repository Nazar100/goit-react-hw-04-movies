import { useState, useEffect } from 'react';

import { fetchCast } from '../../api/api-services';

export default function Cast({ id }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchCast(id).then(setCast);
  }, [id]);

  return (
    <>
      {cast && (
        <ul>
          {cast.cast.map(c => {
            return (
              <li key={c.id}>
                <h3>{c.name}</h3>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${c.profile_path}`}
                  alt={c.name}
                  width="200"
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
