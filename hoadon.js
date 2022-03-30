var dialog = document.getElementById("m-dialog");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    dialog.style.display = "block";
}

span.onclick = function() {
    dialog.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == dialog) {
      dialog.style.display = "none";
    }
  }