var num = 1;
function gallery(direct){
    if(direct) {
        if(num == 5) {
            num = 1;
        }
        else{num++;}
    } 
    else{
        if(num == 1){ num = 5;}
        else{num--;}
    }
var imgTag = document.getElementById("photo");
imgTag.setAttribute("src","img/도시"+num+".jpg");
}

let slideIndex = 5;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}
