export const options = {
    params: {language: 'tr', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
    }
};

export const genresOptions = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/genre/movie/list',
  params: {language: 'tr'},
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
  }
};

export const baseImgUrl = "http://image.tmdb.org/t/p/original";