const apiKey = "ed5b01ef";
const url = `http://www.omdbapi.com/?apikey=${apiKey}`;

async function request(req) {
  let response = await fetch(`${url}${req}`);
  return response.json();
}

export async function searchAllInfoMovie(idMovies) {
  try{
    const infoMovies = idMovies.map(async (imdbID) => {
      return await request(`&i=${imdbID}`);
      })
    const data =  await Promise.all(infoMovies);
    return prepareMovie(data);
  }catch(error){
    throw new Error('Erro ao consultar apii')
  }
}

function prepareMovie(movie) {
  if(movie.imdbID){
    return{
      id: movie.imdbID,
      title: movie.Title,
      genre: movie.Genre,
      year: movie.Year,
      awards: movie.Awards,
      plot:movie.Plot,
      poster:movie.Poster,
      director:movie.Director,
      }
  }
   const data = movie.map(film =>{
      return {
        id: film.imdbID,
        title: film.Title,
        year: film.Year,
        type: film.Type,
        genre:film.Genre,
      }
    }) 

  return data;
}

export async function getMoviesModel(movie) {
  try {
    const data =  await request(`&s=${movie}`);

    return await prepareMovie(data.Search);
  } catch (error) {
    throw new Error('Erro ao consultar api')
  }
}

//Pega um unico id para procurar na api e preencher o modal
export async function getMovieById(imdbID) {
  try {
  const data = await request(`&i=${imdbID}`)
  return prepareMovie(data);
} catch (error) {
  throw new Error('Erro ao consultar api')
}
}
