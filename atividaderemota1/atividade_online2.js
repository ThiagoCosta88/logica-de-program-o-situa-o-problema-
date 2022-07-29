//informar data do evento 
// data do evento é anterior ao dia de hj se sim nao cadastrar se nao cadastrar 
//idade maior q 18 se sim cadastrar se nao nao cadastrar
//perguntar se é participante ou palestrante se palestrante cadastrar e listar 
// se participante consultar se tem mais de 100 participantes se sim cadastro negado se nao finalizar cadastro e listar
let dataEvento = new Date(2022,7,8)

if (dataEvento >= new Date (2022,7,28)) {
    console.log('cadastro permitido')
} else {
    console.log('cadastro negado data invalida')
}
console.log ('-----------------------------------------------------------------')

let idade = 20

if (idade >= 18) {
    console.log('finalizar cadastro')
} else {
    console.log('cadastro negado menor de idade')
}

console.log ('----------------------------------------------------------------')

const numeroDeparticipantes =99
let participantes = 100
if (numeroDeparticipantes <= 100) {
    console.log ('cadastro permitido')
} else {
    console.log ('cadastro negado numero de participantes excedido')
}

for (let contador = 0; contador < participantes; contador++) {
    console.log (contador )

}
