export default class Persona {
  nombre;
  edad;
  //* me sirve para inicializar las propiedades de clase
  constructor(nombre, edad) {
    this.nombre = nombre; // sofia
    this.edad = edad; // 23
  }

  constructor(nombre) {
    this.nombre = nombre;
  }

  toString() {
    //* alt + 96 
    return `Nombre: ${this.nombre}, edad: ${this.edad}`;
  }
}
// const persona = {
//   nombre: '',
//   edad: 0
// };
// const persona = {

// };

// persona.nombre = "Sofia";
// persona.edad = 23
// console.log(persona);

const usuario = {
  nombre: "Miguel"
}

// * Vamos a crear una instancia de clase Persona
// const instanciaPersona = new Persona("Sofia", 23);
// console.log(instanciaPersona.toString());
