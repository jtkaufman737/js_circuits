
var oldArray = [12, 45, 6, 23, 19, 20, 20, 15, 30, 42];

// Write your code below this line
var newArray = [];

/*for (i=0; i<oldArray.length; i++) {
   newArray.push(Math.pow(oldArray[i],2));
   console.log(newArray);
}*/

/*for (i=0; i<oldArray.length; i++){
  if (i%2 != 0) {
    newArray.push((oldArray[i])*2);
  } else if (i%2 == 0) {
    newArray.push(oldArray[i]);
  }
  console.log(newArray);
}*/


/*var x = 0;
var greeting = "";

while (x<6){
  x+=1;
  greeting += "hello ";
  console.log(greeting);
}*/

// var x = 0;
// var greeting = '';
//
// while (x<10) {
//   if (x%2 == 0) {
//     greeting += "hello ";
//   } else if (x%2 != 0) {
//     greeting += "goodbye ";
//   }
//   console.log(greeting);
//   x += 1;
// }
//
// var grade = "B"
//
// if (grade="A"){
//   console.log("Awesome Job");
// } else if (grade="B") {
//   console.log("Pretty Great");
// } else if (grade = "C") {
//   console.log("Pretty Average");
// } else if (grade="D") {
//   console.log("Need to Study");
// } else if (grade="F") {
//   console.log("Bad Job");
// }

//Step 1:
var favoriteMovie = "jaws";

switch(favoriteMovie){
  case "jaws":
    console.log("You're gonna need a bigger boat.");
    break;
  case "the shining":
    console.log("All work and no play makes Jack a dull boy.");
    break;
  case "star wars":
    console.log("Do. Or do not. There is no try.");
    break;
  case "forrest gump":
    console.log("Life was like a box of chocolates.");
    break;
  case "back to the future":
    console.log("Where we're going, we don't need roads.");
    break;
  default:
    default console.log("Great movie choice!");
}

var isMinor;
var age = 21;

isMinor = age > 18 ? false:true;

console.log("The value of isMinor is " + isMinor);

var isHolidaySeason = month="december" ? true:false;;
var month = "december";

console.log("The value of isHolidaySeason is " + isHolidaySeason);
