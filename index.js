$(window).scroll(function () { 
    if($(window).scrollTop()){
        $( ".container" ).addClass("white");
        $( ".container a" ).addClass("linksOnScroll");
        $(".logoImage img").attr("src","images/bakery-color.png");
    }
    else{
        $( ".container" ).removeClass("white");
        $( ".container a" ).removeClass("linksOnScroll");
        $(".logoImage img").attr("src","images/bakery-light-1.png");
    }
});


let mybutton = document.getElementById("scrollTopbtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ($(window).scrollTop() > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scroll({top: 0, behavior: "smooth"})
}
