import { useState, useEffect } from 'react';

import { fetchReviews } from '../../api/api-services';

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchReviews(id).then(setReviews);
  }, [id]);

  return (
    <div>
      {reviews && reviews.results.length ? (
        <ul className="reviews-list">
          {reviews.results.map((r, i) => {
            return (
              <li className="r-item" key={i}>
                <p className="reviews-text">{r.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>
          <p className="no-r">No reviews yet!</p>
        </div>
      )}
    </div>
  );
}
