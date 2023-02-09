///////////////////////////////////////////////////
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
  // loader.style.transitionDuration = "300ms";
});

/////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const backToTopBtn = document.querySelector(".back-to-top--btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    console.log("mcolacm");
    // console.log("berks");
    backToTopBtn.setAttribute("data-visible", true);
  } else {
    // console.log("still berks");
    backToTopBtn.setAttribute("data-visible", false);
  }
});
// const backToTopBtn = document.querySelector(".back-to-top--btn");

backToTopBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

////////////////////////////////////////////////////////////////
const hamImg = document.getElementById("ham--img");
const navOverlay = document.getElementById("nav--overlays");


hamImg.addEventListener('click', () => {
  console.log('hello');
  navOverlay.setAttribute("data-visible", false);
});