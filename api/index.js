const buttonSearch = document.querySelector(".button-search");
const inputSearch = document.querySelector(".input-search");
const table = document.querySelector('.table');

let title = "";
let totalPage = 10;

const handleInput = (e) => {
  title = `&s=${e.target.value}`;
};

inputSearch.addEventListener("input", handleInput);

const URL = "http://www.omdbapi.com/?";
const KEY = "apikey=7f669f15";
const PAGE = `&page=${totalPage}`;

const options = {
  method: "GET",
  mode: "cors",
  cache: "default",
};

const fetchApi = async () => {

  await fetch(URL + KEY + title + PAGE, options)
    .then((data) => {
      data.json().then((json) => {
        showMovies(json);
      });
    })
    .catch((err) => {
      throw new Error("Erro ao consultar a api " + err);
    });

};

const showMovies = (data) => {
  
  if(data.Response == 'False'){
    return  ;
  }
  const { Search } = data;
  
  for (const movie of Search) {
    searchAllInfoMovie(movie);
  }
};


const searchAllInfoMovie = async (movieTitle) => {
  const { imdbID } = movieTitle;

 await fetch(`${URL + KEY}&i=${imdbID}&type=movie`).then((data) => {
    data.json().then((result) => {
      insertMoviesInTable(result);
    });
  });
};

//Criando as linhas da tabela
const insertMoviesInTable = (movies)  => {
  const { Title, Year, Genre } = movies;

  let row = document.createElement('tr');
  let titleRow = document.createElement('td');
  let yearRow = document.createElement('td');
  let genderRow = document.createElement('td');

  
    titleRow.className = "title-row";
    genderRow.className = "gender-row";
    yearRow.className = "year-row";
    
    titleRow.innerText = Title;
    yearRow.innerText = Year;
    genderRow.innerText = Genre;

    row.appendChild(titleRow);
    row.appendChild(yearRow);
    row.appendChild(genderRow);
    table.children.length % 2 == 0 ? row.className = "row-table color-white-list" : row.className ="row-table";

    table.appendChild(row);
   
}

const resetTable = () => {
  if(table.children.length >= 10) {

  table.innerHTML = ''; 
  let titleTable = document.createElement('tr');
  let titleRow = document.createElement('td');
  let yearRow = document.createElement('td');
  let genderRow = document.createElement('td');

    titleTable.className = "title-table";
    titleRow.className = "title-table-head";
    genderRow.className = "title-table-gender";
    yearRow.className = "title-table-year";

    titleRow.innerText = "Titulo";
    genderRow.innerText = "Gênero";
    yearRow.innerText = "Ano";
    
    titleTable.appendChild(titleRow);
    titleTable.appendChild(yearRow);
    titleTable.appendChild(genderRow);

    table.appendChild(titleTable); 
  }
}

buttonSearch.addEventListener("click", (e) => {
  e.preventDefault();
  resetTable();
  fetchApi();
});
