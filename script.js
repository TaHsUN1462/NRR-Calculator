let run1 = document.getElementById('run1');
let run2 = document.getElementById('run2');
let ball1 = document.getElementById('ball1');
let ball2 = document.getElementById('ball2');
let result = document.getElementById('result');
function Check() {
  if (ball2.value=="",ball1.value=="",run2.value=="",run1.value=="") {
  result.value= "All Fields Are Required"
  }else{
    error()
  }
}
function error() {
  result.value = [[(run1.value/ball1.value)*6]-[(run2.value/ball2.value)*6]];
  ball2.value = "";
  ball1.value = "";
  run2.value = "";
  run1.value = "";
}
function reset() {
  result.value= ""
}