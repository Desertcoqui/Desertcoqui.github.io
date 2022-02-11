
//navbar that shows/hides on click when hamburger menu is activated
let a=0;
let navbar = document.getElementById("popOutNavbar");
navbar.style.display="none";

function hamburger() {
  if (a == 0) {
    navbar.style.display = "block";
    return (a = 1);
  } else {
    navbar.style.display = "none";
    return (a = 0);
  }
  
}
