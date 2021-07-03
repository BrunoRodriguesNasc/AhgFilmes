import Controller from "../controller/controller.js";

export async function searchAllInfoMovie(movies) {
  const controller = new Controller();
  const allMovies = [];

  if (movies) {
    for (const movieID of movies) {
      allMovies.push(
        await fetch(`${controller.url}&i=${movieID.imdbID}`).then((data) => {
          return data.json();
        })
      );
    }
    return controller.getAllMoviesTable(allMovies);
  }
  return controller.getAllMoviesTable();
}

export async function setMovies(movie) {
  const controller = new Controller();

  const data = await fetch(`${controller.url}&s=${movie}`)
    .then((data) => data.json())
    .catch((err) => {
      throw new Error("Erro ao consultar a api " + err);
    });

  controller.getAllInfoMovies(data.Search);
}

//Pega um unico id para procurar na api e preencher o modal
export async function getMovieById(id) {
  const controller = new Controller();
 const data =  await fetch(`${controller.url}&i=${id}&plot=short`).then((data) => {
    return data.json();
  })

  controller.setMovieModal(data);
}
