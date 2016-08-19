//<!-- Back End -->
function numberList(number) {
  var list = [];
  for (var i=1; i<=number; i++) {
    var result = number-(number-i)
    list.push(result);
  }
  return list;
}

function pingPong(array) {
  var pingPongArray = [];
  for (var i=0; i<array.length; i++){
    if(array[i] % 15 === 0){
      pingPongArray.push("ping-pong");
    } else if(array[i] % 5 === 0){
      pingPongArray.push("pong");
    } else if(array[i] % 3 === 0){
      pingPongArray.push("ping");
    } else {
      pingPongArray.push(array[i]);
    }
  }
  return pingPongArray;
}

//<!-- Front End -->
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($("#input").val());
    var output = pingPong(numberList(inputNumber));
    $("#output li").remove();
    for (var i=0; i<output.length; i++){
      $("ul").append("<li>" + output[i] + "</li>");
    }
  });
});
