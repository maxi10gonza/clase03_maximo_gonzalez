
function CuentaBancaria (titular, saldoInicial) {
    this.titular = titular;
    this.saldo = saldoInicial;
};

CuentaBancaria.prototype.depositar = function (monto) {
    this.saldo += monto;
};

CuentaBancaria.prototype.extraer = function (monto) {
    if (monto <= this.saldo) {
        this.saldo -= monto;
    }else{
        console.log('Fondos Insuficientes');
    }
};

CuentaBancaria.prototype.consultarSaldo = function () {
    console.log(`Saldo Actual: ${this.saldo}`);
};

//Prueba
const cuenta1 = new CuentaBancaria("Juan", 1000);
cuenta1.depositar(500);
cuenta1.extraer(300);
cuenta1.consultarSaldo();



class CuentaBancariaClase {
  #saldo; //Propiedad privada

  constructor(titular, saldoInicial) {
    this.titular = titular
    this.saldo = saldoInicial >= 0 ? saldoInicial : 0;
  }

  depositar(monto) {
    this.saldo += monto;
  }

  extraer(monto) {
    if(monto <= this.#saldo) {
        this.#saldo -= monto;
    }else{
        console.log("Fondos Insuficientes")
    }
  }

  get saldo () {
    return this.#saldo;
  }

  set saldo (nuevoSaldo) {
    if (nuevoSaldo >= 0) {
        this.#saldo = nuevoSaldo;
    }else{
        console.log("El saldo no puede ser negativo");
    }
  }

  consultarSaldo () {
    console.log(`Saldo actual: ${this.#saldo}`);
  }

}

// Prueba
const cuenta2 = new CuentaBancaria("Ana", 2000);
cuenta2.depositar(1000);
cuenta2.extraer(500);
cuenta2.consultarSaldo(); 
console.log(cuenta2.saldo); 
cuenta2.saldo = -100;




String.prototype.concatenarPalabra = function(palabra) {
  return `${this} ${palabra}`;
};

// Prueba
const saludo = "Hola";
const nuevoSaludo = saludo.concatenarPalabra("mundo");
console.log(nuevoSaludo);




// Guardamos la original por si queremos restaurarla luego
const originalToUpperCase = String.prototype.toUpperCase;

String.prototype.toUpperCase = function() {
  return "ESTO ESTÁ PROHIBIDO";
};

// Prueba
console.log("hola".toUpperCase()); // ESTO ESTÁ PROHIBIDO
