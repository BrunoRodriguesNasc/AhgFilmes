import { getAllMoviesTable } from "../controller/controller.js";

export async function searchAllInfoMovie(movies) {
  const URL = "http://www.omdbapi.com/?apikey=7f669f15";
  const allMovies = [];

  for (const movieID of movies) {
    getAllMoviesTable(await fetch(`${URL}&i=${movieID.imdbID}`).then((data) => {
      return data.json();
    }));
  }

}
