// grabbing nav
const nav = document.querySelector("#main");

// figuring out nav's top offset position
const topOfNav = nav.offsetTop;

function fixNav() {
  // if scrollY exceed topOfNav, add fixed-nav style class
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);
