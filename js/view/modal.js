import Controller from "../controller/controller.js";

export function modal(movie) {

const controller = new Controller();
const {Plot,Year,Poster,Awards,Director,Genre,Title} = movie;

const bodyModal = document.querySelector('.background-body');
bodyModal.innerHTML = '';
bodyModal.classList.add('show')
bodyModal.innerHTML += `

    <div class="modal">
        <div class="modal-image">
            <img class="poster"
                src=${Poster}
                alt="${Title}">
        </div>
        <div class="modal-info">
            <h2>${Title}</h2>
            <p>${Plot}</p>
            <h3>Ano:${Year}</h3>
            <h3>Gênero:${Genre}</h3>
            <h3>Direção:${Director}</h3>
            <h3>Prêmios:${Awards}</h3> 
            <div class="modal-button">
                <button class="button-modal">OK</button>
           </div>   
        </div>
        
    </div>
</div>

`;



document.body.addEventListener('click', ()=>{
    newSearch();
})

const modal = document.querySelector('.modal'
);
const newSearch = () => {
   bodyModal.classList.remove('show');
    
}
}

