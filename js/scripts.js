//User Interface
$(document).ready(function() {
  $("#submit").click(function() {

    // var number = parseInt($("#number").val());
    var number = $("#number").val();
    var array = [];
        for (currentNumber = 0; currentNumber <= number; currentNumber +=1){
          array.push(currentNumber);
        }
        $("#response").append(array + "<br>");

  });
});
