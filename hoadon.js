var dialog = document.getElementById("dlgPopup");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var close = document.getElementById("btnCloseDialog");

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