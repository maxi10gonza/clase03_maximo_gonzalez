// Guardamos la original por si queremos restaurarla luego
const originalToUpperCase = String.prototype.toUpperCase;

String.prototype.toUpperCase = function() {
  return "ESTO ESTÁ PROHIBIDO";
};

// Prueba
console.log("hola".toUpperCase()); // ESTO ESTÁ PROHIBIDO