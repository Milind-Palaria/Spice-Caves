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
const closeNav = document.getElementById("nav--closer");


hamImg.addEventListener('click', () => {
  // console.log('hello');
  // navOverlay.setAttribute("data-visible", true);
  navOverlay.classList.remove("hdn");
  closeNav.classList.remove("hdn");

});

const navCloseModal =  () => {
  // closeNav.setAttribute("data-visible", false);
  // navOverlay.setAttribute("data-visible", false);
  closeNav.classList.add("hdn");
  navOverlay.classList.add("hdn");

};

  closeNav.addEventListener('click',navCloseModal);