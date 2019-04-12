//Backend Logic

//create initial empty array
var array = [];

//this function takes a user's number and pushes it and every number less than it into the empty array.
function populateArray() {
  var number = parseInt($("#number").val());
  for (var currentNumber = 0; currentNumber <= number; currentNumber +=1){
    // currentNumber.split("").map(function(currentNumber){
      if (currentNumber === 3){
        array.push("I'm sorry, Dave. I'm afraid I can't do that.")
      } else if (currentNumber === 2) {
        array.push("Boop");
      } else if (currentNumber === 1){
        array.push("Beep");
      } else {
        array.push(currentNumber);
      }
    }
  }

//User Interface
$(document).ready(function() {
  $("#submit").click(function() {
    populateArray();
    $("#response").text(array);
  });
});
