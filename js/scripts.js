//Backend Logic
//initial empty array
var array = [];

//this function takes a user's number and pushes it and every number less than it into the empty array.
function populateArray() {
  var number = parseInt($("#number").val());
  // var number = toString($("#number").val());
  for (currentNumber = 0; currentNumber <= number; currentNumber +=1){
    array.push(currentNumber);
  }
}

function changeNumbers(){
  if (3 === true){
    replace(3, "I'm sorry, Dave. I'm afraid I can't do that.");
  }
}

//User Interface
$(document).ready(function() {
  $("#submit").click(function() {
    populateArray();
    array.forEach(changeNumbers);

    $("#response").append(array + "<br>");
  });
});
