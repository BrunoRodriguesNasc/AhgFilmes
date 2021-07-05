export function table(movies,getMovieByIdView) {

  const tableBody = document.querySelector(".table-body");
  tableBody.innerHTML = "";
  tableBody.addEventListener('click',(e) => {
    if(e.target.id){
      getMovieByIdView(e.target.id);

    }
  })
    movies.map((movie) => {
      const { Title, Year, Genre, imdbID } = movie; 
      const rows = `   
  <tr class="row-table" />
    <td id=${imdbID} class="title-row">${Title}</td>
    <td class="gender-row">${Year}</td>
    <td class="year-row">${Genre}</td>
  </tr>
   `;
 
      return (tableBody.innerHTML += rows);
  });
}
 

