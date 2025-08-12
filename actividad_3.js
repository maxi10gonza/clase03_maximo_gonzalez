String.prototype.concatenarPalabra = function(palabra) {
  return `${this} ${palabra}`;
};

// Prueba
const saludo = "Hola";
const nuevoSaludo = saludo.concatenarPalabra("mundo");
console.log(nuevoSaludo);