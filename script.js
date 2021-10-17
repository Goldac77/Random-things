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
