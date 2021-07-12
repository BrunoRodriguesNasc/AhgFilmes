export function modal(movie) {

const bodyModal = document.querySelector('.background-body');
const modal = document.querySelector('.modal');
const {plot,year,poster,awards,director,genre,title} = movie;

bodyModal.innerHTML = '';
bodyModal.classList.add('show')
bodyModal.innerHTML += `

    <div class="modal">
        <div class="modal-image">
            <img class="poster"
                src=${poster}
                alt="${title}">
        </div>
        <div class="modal-info">
            <h2>${title}</h2>
            <p>${plot}</p>
            <h3>Ano:${year}</h3>
            <h3>Gênero:${genre}</h3>
            <h3>Direção:${director}</h3>
            <h3>Prêmios:${awards}</h3> 
            <div class="modal-button">
                <button class="button-modal">OK</button>
           </div>   
        </div>
        
    </div>
</div>

`;

document.body.addEventListener('click', ()=>{
    newSearch();
});




const newSearch = () => {
   bodyModal.classList.remove('show'); 
    }
}

