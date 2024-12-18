import { Conta } from "./classes/conta";

const exemplo = new Conta (123987,"Granado Hills",100);

const uno = new Conta(123987,"Umarazbal",500);
const dos = new Conta(321789, "Dorimar",630);

dos.transferir(uno,50);


console.log(`UNO: ${uno.saldo}`);
console.log(`DOS: ${dos.saldo}`);

