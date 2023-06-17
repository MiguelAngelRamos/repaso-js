//* Vamos a realizar las consultas al api
//* GET https://rickandmortyapi.com/api/character  365ms
//* ES6 2015  Node

export const getCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  // console.log(response);
  const data = response.json();
  return data;
};