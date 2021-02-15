
function mobile(){

  var uno = 1;
  var element = document.getElementById("idMobile");
   
  if(uno > 0){
    element.classList.add("mobile");
    uno += 1;
  } else  {
  // document.getElementById("idMobile");
    element.classList.remove("mobile");
    uno = 1;
  }

}