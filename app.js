// console.log("Hello World!\n==========\n");
// console.log(
//   "Follow the steps in the README.md file to complete the exercises:\n==========\n"
// );

// let faveNum = 13;
// let userAnswer = window.prompt("Pick a number");
// console.log(userAnswer);

// if (userAnswer < faveNum){
//     console.log("too low");
// }

//   else if (userAnswer > faveNum){
//     console.log("too high");
// }

// else {
//   console.log("Congratulations!!!");
// }

let birthMonth = window.prompt("What is your birth month?");
console.log(birthMonth);
switch (birthMonth){
  case 'dec':
  case 'jan':
  case 'feb': console.log("Your birthday is in Winter");
  break;
  case 'mar':
  case 'apr':
  case 'may': console.log("Your birthday is in Spring");
  break;
  case 'jun':
  case 'jul':
  case 'aug': console.log("Your birthday is in Summer");
  break;
  default: console.log("Your birthday is in Fall");
}
