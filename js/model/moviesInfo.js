const apiKey = "ed5b01ef";
const url = `http://www.omdbapi.com/?apikey=${apiKey}`;

async function request(req) {
  let response = await fetch(`${url}${req}`);
  return response.json();
}

export async function searchAllInfoMovie(idMovies) {
  const infoMovies = idMovies.map(async (imdbID) => {
    return await request(`&i=${imdbID}`);
    })
  return Promise.all(infoMovies);
}

function prepareMovie(movie) {
  return{
  id: movie.imdbID,
  title: movie.Title,
  genre: movie.Genre,
  year: movie.Year,
  awards: movie.Awards,
  plot:movie.Plot,
  poster:movie.Poster,
  Director:movie.Director,
  }
}

export async function getMoviesModel(movie) {
  const data =  await request(`&s=${movie}`);
  return data.Search;
}

//Pega um unico id para procurar na api e preencher o modal
export async function getMovieById(imdbID) {
  const data = await request(`&i=${imdbID}`)
  return prepareMovie(data);
}
