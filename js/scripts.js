//<!-- Back End -->
var list = [];
var pingPongArray = [];

function numberList(number) {
  for (var i=1; i<=number; i++) {
    var result = number-(number-i)
    list.push(result);
  }
  return list;
}

function pingPong(array) {
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
}

//<!-- Front End -->
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($("#input").val());
    pingPong(numberList(inputNumber));
    $("#output").text(pingPongArray);
  });
});
