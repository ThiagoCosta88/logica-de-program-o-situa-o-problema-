let numeroDeAlunos = 10

for (let contador  = 0; contador  < numeroDeAlunos; contador ++) {
   console.log(contador)
    if (contador == 0 ){
      console.log('zero classificado')
    }
    if (contador % 2 == 0) {
      console.log('par')
    } else {
      console.log('impar')
    }
}