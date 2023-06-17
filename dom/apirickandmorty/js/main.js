// * Iniciar la aplicación
import { getCharacters } from "./api.js";
import { createCards } from "./dom.js";

const rowCards = document.querySelector('#rowCards');
// document.getElementById('rowCards');
(async () => {
    const data = await getCharacters();
    
    if(data && data.results) {
      createCards(data.results, rowCards)
    } else {
      console.error('No se pudo obtener los personajes');
    }
  }
)();