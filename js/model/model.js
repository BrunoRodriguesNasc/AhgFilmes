import { getAllInfoMovies } from '../controller/controller.js'

export async function setMovies(movie) {

  const URL = "http://www.omdbapi.com/?apikey=7f669f15";
  const PAGE = `&page=10`;

  
  const data = await fetch(`${URL}&s=${movie}${PAGE}`)
    .then((data) => data.json())
    .catch((err) => {
      throw new Error("Erro ao consultar a api " + err);
    });

     getAllInfoMovies(data.Search);

}
