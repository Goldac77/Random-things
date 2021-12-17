var input = document.getElementById("search").value;
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
   document.getElementById("search_bt").click();
  }
});

function test() {
  alert("Hello World!");
}
