let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i =0; i < numbers.length; i += 1) {
    soma += numbers[i]; 
}

// calcular media artmetica

let media = soma / numbers.length;

console.log(media);

//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”; 

if(soma > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor que 20');
}