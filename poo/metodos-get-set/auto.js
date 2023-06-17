//* Fuertemente encapsulada
export default class Auto {
  #marca;
  #modelo;
  #año;

  //* método get
  getMarca() {
    return this.#marca;
  }

  setMarca(marca) {
    //* puede tener una validacion previa
    this.#marca = marca;
  }

  getModelo() {
    return this.#modelo;
  }

  setModelo(modelo) {
    this.#modelo = modelo;
  }

  getAño() {
    return this.#año;
  }

  setAño(año) {
    this.#año = año;
  }

  toString(){
    return `Auto: ${this.#marca} ${this.#modelo} ${this.#año}`;
  }
}