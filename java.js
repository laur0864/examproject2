function myFunction() {
    var x, text;
  
    x = document.getElementById("numb").value;
  
    if (isNaN(x) || x < 1 || x > 48) {
      text = "Vi har desværre kun 48 soverpladser";
    } else {
      text = "";
    }
    document.getElementById("wrong").innerHTML = text;
  }