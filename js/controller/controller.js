import { setMovies }  from '../model/moviesInfo.js';
import { table } from '../view/table.js';
import { searchAllInfoMovie } from '../model/moviesInfo.js'
import { getMovieById } from '../model/moviesInfo.js'
import { modal } from '../view/modal.js';


export default class Controller {

    constructor(){
        this.apiKey = 'ed5b01ef';
        this.url = `http://www.omdbapi.com/?apikey=${this.apiKey}`;
    }

    getMovies(movies){
        setMovies(movies);
    }
    
    getAllInfoMovies(movies){
        searchAllInfoMovie(movies)
    }
    
    getAllMoviesTable(movies){
        table(movies);
    }

    getMovieModal(id){
        getMovieById(id);
    }

    setMovieModal(movie){
        modal(movie)
    }
}

