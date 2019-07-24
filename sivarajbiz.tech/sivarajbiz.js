window.onload= function start () {
  leftClickNoAppear();
}

document.getElementById("togBtn").addEventListener("click",dropDownCurtainBg)


function dropDownCurtainBg(){
  var dropdown = document.getElementsByClassName("navbar-collapse"), i ;
   for (i=0;i<dropdown.length;i++){
      dropdown[i].style.backgroundColor = "rgba(0,0,0,0.3)";
      dropdown[i].style.paddingBottom = "2%";
      dropdown[i].zIndex = "10";
    }
}

/*
function leftClickNoAppear() {
  document.getElementById("prevBtn").style.visibility = "hidden";
  document.getElementById("nextBtn").addEventListener("click",leftClickAppear );
}

function leftClickAppear () {
   document.getElementById("prevBtn").style.visibility = "initial";
}
*/
