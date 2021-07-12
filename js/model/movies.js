const apiKey = "ed5b01ef";
const url = `http://www.omdbapi.com/?apikey=${apiKey}`;

async function request(req) {
  let response = await fetch(`${url}${req}`);
  return response.json();
}

export async function searchAllInfoMoviePerId(idMovies) {
  try {
    const infoMoviesById = idMovies.map(async (imdbID) => {
      return await request(`&i=${imdbID}`);
    });
    const movies = await Promise.all(infoMoviesById);
    return prepareMovie(movies);
  } catch (error) {
    throw new Error("Erro ao consultar todos os filmes!");
  }
}

function prepareMovie(movie) {

  if (movie.imdbID) {
    return {
      id: movie.imdbID,
      title: movie.Title,
      genre: movie.Genre,
      year: movie.Year,
      awards: movie.Awards,
      plot: movie.Plot,
      poster: movie.Poster,
      director: movie.Director,
    };
  }

  const preparedMovies = movie.map((film) => {
    return {
      id: film.imdbID,
      title: film.Title,
      year: film.Year,
      type: film.Type,
      genre: film.Genre,
    };
  }).sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });

  return preparedMovies;
}

export async function searchMoviePerTitle(movie) {
  try {
    const moviePerTitle = await request(`&s=${movie}`);

    return await prepareMovie(moviePerTitle.Search);
  } catch (error) {
    throw new Error("Erro ao consultar os filmes por título!");
  }
}

//Pega um unico id para procurar na api e preencher o modal
export async function searchMovieById(imdbID) {
  try {
    const movieById = await request(`&i=${imdbID}`);
    return prepareMovie(movieById);
  } catch (error) {
    throw new Error("Erro ao consultar os filmes por ID!");
  }
}
