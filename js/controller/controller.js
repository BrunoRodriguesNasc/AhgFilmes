import { setMovies }  from '../model/model.js';
import { table } from '../view/table.js';
import { searchAllInfoMovie } from '../model/moviesInfo.js'

export function getMovies(movies){
    setMovies(movies);
}

export function getAllInfoMovies(movies){
    searchAllInfoMovie(movies)
}

export function getAllMoviesTable(movies){
    table(movies);
}
