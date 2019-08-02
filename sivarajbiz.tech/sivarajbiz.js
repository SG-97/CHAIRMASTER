/*window.onload= function start () {
  leftClickNoAppear();
}
*/
document.getElementById("togBtn").addEventListener("click",dropDownCurtainBg)


function dropDownCurtainBg(){
  var dropdown = document.getElementsByClassName("navbar-collapse"), i ;
   for (i=0;i<dropdown.length;i++){
      dropdown[i].style.backgroundColor = "rgba(0,0,0,0.8)";
      dropdown[i].style.paddingBottom = "2%";
      dropdown[i].zIndex = "10";
    }
}


/*
  window.addEventListener("scrollY",fadeOut() {
    getElementsByClassName("descriptionWrapper").style.opacity = "0";

  }
)
/*window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
*/
/*
function leftClickNoAppear() {
  document.getElementById("prevBtn").style.visibility = "hidden";
  document.getElementById("nextBtn").addEventListener("click",leftClickAppear );
}

function leftClickAppear () {
   document.getElementById("prevBtn").style.visibility = "initial";
}
*/
