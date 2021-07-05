export default function(getMovies){

      let movieTitle = '';
      const form = document.querySelector('.forms-search');
      const inputSearch = document.querySelector('.input-search');
    
    
      const handleInput = (e) => {
        movieTitle = e.target.value;
      }
      inputSearch.addEventListener('input', handleInput);
    
      form.addEventListener("submit",(e) => {
        e.preventDefault();
        ((async function (){
         await getMovies(movieTitle);
        })())
        
      });
};

