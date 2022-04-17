alert("This page/project is no longer supported by Goldac77, for now...");
alert("You can choose to be a collaborator and continue, or create a similar one for your area/country with the templates in the code\nif this is the case, don't hesitate to get in touch");
alert("Or simpliy fork the code, good luck!");
var input = document.getElementById("search");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("search_bt").click();
  }
});

function selectText() {
  var input = document.getElementById('search');
  window.find(input.value)  //highlight desired text
  window.getSelection().removeAllRanges();  //remover highlighted text
};