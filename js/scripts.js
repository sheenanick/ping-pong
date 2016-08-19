
var inputNumber;
var list = [];

function numberList(number) {
  alert("grr");
  for (i=1; i<=number; i++) {
    var result = number-(number-i)
    list.push(result);
  }
  return list;
}

// function pingPong(number) {
//
// }


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    inputNumber = parseInt($("#input").val());
    numberList(inputNumber);
    // $("#output").text(output);
  });
});
