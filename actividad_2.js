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