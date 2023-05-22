// //Exercise 1
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

// //Exercise 2
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

//Exercise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";
typeId = parseInt(typeId);
let type = "";
let color = "";
let size = "";

switch (typeId){
  case 01: type = "Tank top";
  break;
  case 02: type = "T-Shirt";
  break;
  case 03: type = "Long Sleeve";
  break;
  case 04: type = "Sweat Shirt";
  break;
  default: type = "Other";
}

switch (colorId){
  case 'BK': color = "Black";
  break;
  case 'BL': color = "Blue";
  break;
  case 'RD': color = "Red";
  break;
  case 'PU': color = "Purple";
  break;
  default: color = "White";
}

switch (sizeId){
  case 'S': size = "Small";
  break;
  case 'M': size = "Medium";
  break;
  case 'L': size = "Large";
  break;
  case 'XL': size = "Extra Large";
  break;
  default: size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);