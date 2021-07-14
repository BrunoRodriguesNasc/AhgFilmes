import { searchMoviePerTitle } from "../model/movie/movies.js";
import { table } from "../view/table.js";
import { searchAllInfoMoviePerId } from "../model/movie/movies.js";
import { searchMovieById } from "../model/movie/movies.js";
import { modal } from "../view/modal.js";
import inicialize from "../view/inputs.js";

async function getMovies(movies) {
    const allMovies = await searchMoviePerTitle(movies);   
    const idMovies = allMovies.map(movie => movie.id);
    const moviesInfo = await searchAllInfoMoviePerId(idMovies);
    
    table(moviesInfo,getMovieById);
}

async function getMovieById(imdbID){
    const movie = await searchMovieById(imdbID);
    modal(movie);
}

export function init() {
   inicialize(getMovies);
}
