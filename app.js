// console.log("Hello World!\n==========\n");
// console.log(
//   "Follow the steps in the README.md file to complete the exercises:\n==========\n"
// );

let faveNum = 13;
let userAnswer = window.prompt("Pick a number");
console.log(userAnswer);

if (userAnswer < faveNum){
    console.log("too low");
}

  else if (userAnswer > faveNum){
    console.log("too high");
}

else {
  console.log("Congratulations!!!");
}