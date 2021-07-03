import Controller from '../controller/controller.js';

export async function searchAllInfoMovie(movies) {

const controller = new Controller();
  const allMovies = [];

  for (const movieID of movies) {
    allMovies.push(await fetch(`${controller.url}&i=${movieID.imdbID}`).then((data) => {
      return data.json();
    }));
  }

  controller.getAllMoviesTable(allMovies);
 
}
export async function setMovies(movie) {
  
  const controller = new Controller();
  const PAGE = `&page=10`; 
  const data = await fetch(`${controller.url}&s=${movie}${PAGE}`)
    .then((data) => data.json())
    .catch((err) => {
      throw new Error("Erro ao consultar a api " + err);
    });

    controller.getAllInfoMovies(data.Search);

}
