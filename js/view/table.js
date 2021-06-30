
export function table(movies) {
  const tableBody = document.querySelector(".table-body");
    const { Title, Year, Genre } = movies;
    if( tableBody.children.length+1 > 10){
       (tableBody.innerHTML = '');
    }
  const rows = `   
  <tr class="${
    tableBody.children.length % 2 == 0
      ? "row-table color-white-list"
      : "row-table"
  }" />
    <td class="title-row">${Title}</td>
    <td class="gender-row">${Year}</td>
    <td class="year-row">${Genre}</td>
  </tr>
   `
    return (tableBody.innerHTML += rows);
  };





