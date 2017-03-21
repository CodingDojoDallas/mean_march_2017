var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);
console.log(first_variable);


var food = "Chicken";
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
  food = "gone";       // CAREFUL!
  console.log(food);
}
console.log(food);


var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);
