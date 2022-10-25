const angA = 60;
const angB = 20;
const angC = 100;

let somaAng = angA + angB + angC;

if(somaAng === 180) {
  console.log('Ângulo positivo')
} else if (somaAng != 180) {
  console.log('Ângulo negativo')
} else {
  console.log('Erro: ângulo inválido')
}