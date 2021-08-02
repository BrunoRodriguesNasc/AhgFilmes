export function table(movies,getMovieByIdView) {

  const tableBody = document.querySelector(".table-body");
  tableBody.innerHTML = "";
  tableBody.addEventListener('click',(e) => {
    if(e.target.id){
      getMovieByIdView(e.target.id);

    }
  }) 
    movies.map((movie) => {
      const { title, year, genre, id } = movie; 
      const rows = `   
  <tr class="row-table" />
    <td id=${id} class="title-row">${title}</td>
    <td class="gender-row">${year}</td>
    <td class="year-row">${genre}</td>
  </tr>
   `;
 
      return tableBody.innerHTML += rows;
  });
}
 

