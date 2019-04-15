//Backend Logic

//create initial empty array
var array = [];

//this function takes a user's number and pushes it and every number less than it into the empty array.
function populateArray(number) {
  for (var i = 0; i <= number; i +=1){
    var currentNumber = i.toString();
      if (currentNumber.includes(3)){
        array.push("I'm sorry, Dave. I'm afraid I can't do that.")
      } else if (currentNumber.includes(2)) {
        array.push("Boop");
      } else if (currentNumber.includes(1)){
        array.push("Beep");
      } else {
        array.push(currentNumber);
      }
    }
  }

//User Interface
$(document).ready(function() {
  $("#submit").click(function() {
    var number = $("#number").val();
    populateArray(number);
    $("#response").text(array);
  });
});
