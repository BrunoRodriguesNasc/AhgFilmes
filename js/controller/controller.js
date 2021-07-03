import { setMovies }  from '../model/moviesInfo.js';
import { table } from '../view/table.js';
import { searchAllInfoMovie } from '../model/moviesInfo.js'
export default class Controller {

    constructor(){
        this.apiKey = 'ed5b01ef';
        this.url = `http://www.omdbapi.com/?apikey=${this.apiKey}`;
    }

   async getMovies(movies){
        setMovies(movies);
    }
    
   async getAllInfoMovies(movies){
        searchAllInfoMovie(movies)
    }
    
    getAllMoviesTable(movies){
        table(movies);
    }
}

