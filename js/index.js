//alert('Hello JavaScript!');

// let, cons, //var

let message = 'Hello World';
//alert(message);

message = 'Nice to see you!';
//alert(message);

let num = 42;
num = num + 1;
//alert(num);

const age = Number(prompt('Enter your age'));
const nextAge = age + 1;
alert(100 % 15);

if (age < 19) {//< > <= >= ===  !==  && і || або
  alert('you are underaged!')
}else if (age < 60) {
  alert('You are adult');
} alert('you are old');

//const textMessage = age < 19 ? 'you are underaged!' : 'You are adult'
alert(textMessage);

function add(a,b) {
   const result = a + b;
   return result;
}