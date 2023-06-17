const nameCharacter = document.getElementById('character-name');
const statusCharater = document.getElementById('character-status');
const imageCharacter = document.getElementById('character-image');


const parametro = window.location.search;
const urlParms = new URLSearchParams(parametro);
const id = urlParms.get('id');

const getCharactersById = async(id) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await response.json();
  return data;
};

// * Promesas
getCharactersById(id).then( data => {
  nameCharacter.innerText = data.name;
  statusCharater.innerText = `${data.status}- ${data.species}`;
  statusCharater.className = data.status === 'Alive' ? 'alive': 'dead';
  imageCharacter.src = data.image;
  imageCharacter.alt = data.name;
 
}).catch(err => console.error(err));


