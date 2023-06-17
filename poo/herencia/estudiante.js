import Persona from "./persona.js";

class Estudiante extends Persona {
  asignatura;
  constructor(nombre, edad, asignatura) {
    super(nombre, edad); //* aqui llamos al constructor de Persona
    this.asignatura = asignatura;
  }

  saludar() {
    return `Hola, mi nombre es: ${this.nombre}, mi edad: ${this.edad} y estoy en clases de: ${this.asignatura}`;
  }
}

const instanciaEstudiante = new Estudiante('Richard', 25, 'JavaScript');
console.log(instanciaEstudiante.saludar()); //* Hola, mi nombre es: Richard, mi edad: 25 y estoy en clases de: JavaScript