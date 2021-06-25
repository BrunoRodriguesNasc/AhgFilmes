const buttonSearch = document.querySelector("#button-search");
const inputSearch = document.querySelector("#input-search");
const titleFilter = document.querySelector('.title');

let title = "";

const allMovies = [];
const handleInput = (e) => {
  title = `&s=${e.target.value}`;
};

inputSearch.addEventListener("input", handleInput);

const URL = "http://www.omdbapi.com/?";
const KEY = "apikey=7f669f15";
const PAGE = "&page=10";

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
  const { Search } = data;
  
  for (const movies of Search) {
    searchAllInfoMovies(movies);
  }
};

const searchAllInfoMovies = async (moviesTitle) => {
  const { imdbID } = moviesTitle;

  await fetch(`${URL + KEY}&i=${imdbID}`).then((data) => {
    data.json().then((result) => {
        infoMovies(result);
    });
  });
};

const infoMovies = (info) => {

    const { Title } = info;
    const tableRow = document.createElement('tr');

    tableRow.id = "title-movies"
    tableRow.innerText = Title;


    titleFilter.appendChild(tableRow)
  
};



buttonSearch.addEventListener("click", (e) => {
  e.preventDefault();
  fetchApi();
});
