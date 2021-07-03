import Controller from "../controller/controller.js";

export function table(movies) {
  const controller = new Controller();

  const tableBody = document.querySelector(".table-body");
  tableBody.innerHTML = "";
  tableBody.addEventListener('click',(e) => {
    if(e.target.id){
      controller.getMovieModal(e.target.id)

    }
  })

  if (movies) {
    movies.map((movie) => {
      const { Title, Year, Genre, imdbID } = movie;

   
      const rows = `   
  <tr class="${
    tableBody.children.length % 2 == 0
      ? "row-table color-white-list"
      : "row-table"
  }" />
    <td id=${imdbID} class="title-row">${Title}</td>
    <td class="gender-row">${Year}</td>
    <td class="year-row">${Genre}</td>
  </tr>
   `;
 
      return (tableBody.innerHTML += rows);
    });
  }
  else{
    alert("Nenhum filme encontrado");
  }  
 
}
