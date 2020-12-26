import axios from 'axios';

const KEY = 'bb3f2a9bd6a374d8a5257ae7f0ad6ee7';
const ALL_URL =
  'https://api.themoviedb.org/3/trending/all/day?api_key=bb3f2a9bd6a374d8a5257ae7f0ad6ee7';

export async function fetchAllmovies() {
  try {
    const resp = await axios.get(ALL_URL);
    return resp.data.results;
  } catch {
    console.log('error');
  }
}

export async function fetchMovieByQuery(query) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
    );
    return resp.data.results;
  } catch {
    console.log('error');
  }
}

export async function fetchMovieById(id) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`,
    );

    return resp.data;
  } catch {
    console.log('error');
  }
}

export async function fetchCast(id) {
  try {
    const resp = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US
`);
    return resp.data;
  } catch {
    console.log('error');
  }
}
export async function fetchReviews(id) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`,
    );
    return resp.data;
  } catch {
    console.log('error');
  }
}
