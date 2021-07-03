import Controller from '../controller/controller.js';

export function addMovie(){
  
const controller = new Controller();


  let movieTitle = '';
  const buttonSearch = document.querySelector('.button-search');
  const inputSearch = document.querySelector('.input-search');

  const handleInput = (e) => {
    (e.target.value)
    movieTitle = e.target.value;
  }

  inputSearch.addEventListener('input', handleInput);

  buttonSearch.addEventListener("click", (e) => {
    e.preventDefault();
    controller.getMovies(movieTitle);
    
  });
};

addMovie();
