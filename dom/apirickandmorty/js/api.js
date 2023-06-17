//* Vamos a realizar las consultas al api
//* GET https://rickandmortyapi.com/api/character  365ms
//* ES6 2015  Node

export const getCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  // console.log(response);
  const data = await response.json();
  return data;
};

export const getCharactersForName = async (nameCharacter) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${nameCharacter}`);
  const data = await response.json();
  return data;
}

export const getCharactersById = async(id) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await response.json();
  return data;
}