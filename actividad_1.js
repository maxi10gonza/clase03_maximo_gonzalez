
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














