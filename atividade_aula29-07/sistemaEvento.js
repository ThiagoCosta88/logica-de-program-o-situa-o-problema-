let dataEvento = new Date(2022,7,23)
let dataAtual =new Date(2022,7,31)
let idadeParticipante = 20
let listaParticipantes=["Adriano","Carlos","Thiago","Clayton","Ruan"]
console.log('------------------------------------------');
if (dataEvento > dataAtual) {
    console.log("permitir evento")
    
} else {
    console.log("data invalida");

}

console.log('------------------------------------------');

if (idadeParticipante >= 18) {
    console.log("permitir cadastro");
    
} else {
console.log("cadastro negado menor de idade");    
}

console.log('-----------------------------------------');

if (listaParticipantes.length < 100) {
    console.log('permitir cadastro');
    
} else {
    console.log('cadastro negado numero de participantes excedido');
}
console.log('-----------------------------------------');
console.log(listaParticipantes)

