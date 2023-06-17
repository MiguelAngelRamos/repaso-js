// * Iniciar la aplicación
import { getCharacters, getCharactersForName } from "./api.js";
import { cleanRow, createCards } from "./dom.js";

const rowCards = document.querySelector('#rowCards');
const formData = document.querySelector('#formData');

formData.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  console.log(this); // es formulario
  const form = new FormData(this);
  const characterName = form.get('character'); //* obtener lo que escribe el usuario en el input

  cleanRow(rowCards);
  const data = await getCharactersForName(characterName);
  //* console.log(data);

  if(data && data.results) {
    createCards(data.results, rowCards)
  } else {
    console.error('No se pudo obtener los personajes');
  }

}
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