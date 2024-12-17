export class Conta{
    constructor(
        private _numero: number,
        private _titular: string,
        private _saldo: number
    ){}


    public get numero(): number{
        return this._numero;
    }
    public get titular(): string{
        return this._titular;
    }
    public get saldo(): number{
        return this._saldo;
    }


    public set numero(numero: number){
        if (numero <= 0){
            throw new Error("Número Inválido");
        }
        this._numero = numero;
    }
    public set titular(titular: string){
        const tamanho = titular.trim().length;
        if(tamanho < 3){
            throw new Error("titular inválido");
        }
        this._titular = titular.trim().toUpperCase();
    }
    public set saldo(saldo: number){
        const valor = saldo;
        if (valor <=0 ){
            console.log("Faça um depósito")
        } else if(valor >0)
        this._saldo = saldo;
    }
    public depositar(valor: number): number{
        if(valor > 0){
            this._saldo += valor;
            return this._saldo;
        } else{
            throw new Error('Valor Inválido!')
        }
    }

    public sacar(valor: number){
        if(valor < 0){
            throw new Error('Valor para saque inválido!');
        }
        if (valor < this._saldo){
            this._saldo -= valor;
            return this._saldo;
        } else{
            throw new Error('Valor para saque insuficiente!')
        }

    }
    public tranferir(contaDestino: Conta, valor: number): number{
        this.sacar(valor);
        contaDestino.depositar(valor);
        return this._saldo;
    }
}