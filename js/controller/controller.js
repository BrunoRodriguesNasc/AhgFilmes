import { getMoviesModel } from "../model/moviesInfo.js";
import { table } from "../view/table.js";
import { searchAllInfoMovie } from "../model/moviesInfo.js";
import { getMovieById } from "../model/moviesInfo.js";
import { modal } from "../view/modal.js";
import inicialize from "../view/inputs.js";

async function getMoviesController(movies) {
    const allMovies = await getMoviesModel(movies);   
    const idMovies = allMovies.map(movie => movie.id);
    const moviesInfo = await searchAllInfoMovie(idMovies);
    
    table(moviesInfo,getMovieByIdController);
}

async function getMovieByIdController(imdbID){
    const movie = await getMovieById(imdbID);
    modal(movie);
}

export function init() {
   inicialize(getMoviesController);
}
