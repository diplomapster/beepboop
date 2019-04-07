//User Interface
$(document).ready(function() {
  $("#submit").click(function() {

    // var number = parseInt($("#number").val());
    var number = toString($("#number").val());
    var array = [];
    for (currentNumber = 0; currentNumber <= number; currentNumber +=1){
      array.push(currentNumber);
    }
    var newarray = array.forEach(function(element){
      if ((element.includes("3")) == true){
        element.replace("3", "I'm sorry, Dave. I'm afraid I can't do that.")
      } else {
        return "nope"
      }
    })

        $("#response").append(newarray + "<br>");
  });
});
