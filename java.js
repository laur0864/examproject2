/*    Validation     */

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


/*    Accordion     */

let acc = document.getElementsByClassName("accordion"); 
let i;

for (i = 0; i < acc.length; i++) {  
  acc[i].addEventListener("click", function() { 
    this.classList.toggle("active");
    let panel = this.nextElementSibling; 
    if (panel.style.display === "block") { 
      panel.style.display = "none";
    } else {  
      panel.style.display = "block"; 
    }
  });
}

/* Nyt afsnit */

