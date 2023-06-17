import Auto from "./auto.js";


const auto = new Auto();
auto.setMarca("Ford");
auto.setModelo("Mustang");
auto.setAño(2023);

//* imprimir todas las propiedades
console.log(auto.toString());
console.log(auto.getMarca());
console.log(auto.getAño());
console.log(auto.getModelo());

