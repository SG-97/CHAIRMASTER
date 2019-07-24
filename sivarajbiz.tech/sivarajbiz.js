window.onload= function start () {
  leftClickNoAppear();
}

function leftClickNoAppear() {
  document.getElementById("prevBtn").style.visibility = "hidden";
  document.getElementById("nextBtn").addEventListener("click",leftClickAppear );
}

function leftClickAppear () {
   document.getElementById("prevBtn").style.visibility = "initial";
}


document.getElementById("togBtn").addEventListener("click",dropDownCurtainBg)


function dropDownCurtainBg(){
  var dropdown = document.getElementsByClassName("navbar-collapse"), i ;
   for (i=0;i<dropdown.length;i++){
      dropdown[i].style.backgroundColor = "rgba(0,0,0,0.9)";
      dropdown[i].style.opacity = "1";
      dropdown[i].zIndex = "10";
    }
}


/*
function getViewPort(){
  var h,w,viewableH,viewableW;
  h = window.innerHeight;
  w = window.innerWidth;
  viewableH = 0.8*h;
  viewableW = 0.5*w;
  document.getElementsByClassName("card-body")[0].style.width = viewableW;
  document.getElementsByClassName("card-body")[0].style.height = viewableH;
  console.log("width = " + viewableW);
  console.log("Height = " + viewableH);

}
*/
