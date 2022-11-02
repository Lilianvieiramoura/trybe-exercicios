const a = 20;
const b = 30;
const c = 40;

if(a > b && b > c) {
  console.log('o maior número é : ' + a);
} else if (b > a && b > c) {
  console.log('o maior número é: ' + b);
} else {
  console.log('o maior número é: ' + c);
}