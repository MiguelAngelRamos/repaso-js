export function cleanRow(element) {
  element.innerHTML = '';
}

function cardCharacter(character, rowElement) {
  //* Crear los elementos html
  const cardBootstrap = document.createElement('div');
  const imgCard = document.createElement('img');
  const cardBody = document.createElement('div');
  const titleCharacter = document.createElement('h5');
  const btnByIdCharacter = document.createElement('a');

  //* Los textos de los elementos
  const nameCharacter = document.createTextNode(character.name);
  const textButtonCharacter = document.createTextNode('Ir al personaje');

  //* Añadir las clases
  cardBootstrap.classList.add('card', 'col-12', 'col-sm-3', 'col-md-4', 'mt-4');
  imgCard.classList.add('card-img-top', 'mt-2');
  cardBody.classList.add('card-body');
  titleCharacter.classList.add('card-title', 'text-center');
  btnByIdCharacter.classList.add('btn', 'btn-secondary', 'btn-sm', 'mb-2');
  
  btnByIdCharacter.href = `personaje.html?id=${character.id}`;

  //* Añadir los textos
  titleCharacter.appendChild(nameCharacter);
  btnByIdCharacter.appendChild(textButtonCharacter);
  imgCard.src= character.image;

  //* ajustar los elementos o hacer el orden jerarquico
  cardBootstrap.append(imgCard, cardBody, btnByIdCharacter);
  cardBody.append(titleCharacter);

  rowElement.append(cardBootstrap);

}
//* characters => results es un arreglo de 20 personajes
export function createCards(characters, rowElement) {
  characters.forEach(character => cardCharacter(character, rowElement));
}
