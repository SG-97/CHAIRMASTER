window.onload= function () {
  document.getElementById("prevBtn").style.visibility = "hidden";
  document.getElementById("nextBtn").addEventListener("click",function (){
  document.getElementById("prevBtn").style.visibility = "initial";
  }
);
}

document.getElementById("togBtn").addEventListener("click",function(){
  var dropdown = document.getElementsByClassName("navbar-collapse"), i ;
   for (i=0;i<dropdown.length;i++){
      dropdown[i].style.backgroundColor = "rgba(0,0,0,0.9)";
      dropdown[i].style.opacity = "1";
      dropdown[i].zIndex = "10";

 }

  }
);
