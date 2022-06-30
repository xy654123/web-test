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

