$('.video').parent().click(function () {
    if($(this).children(".video").get(0).paused){
        $(this).children(".video").get(0).play();
        $(this).children(".playpause").fadeOut();
    }else{
       $(this).children(".video").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
});

function capture(){
    var video = document.getElementById('video');
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