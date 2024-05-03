///////////////////////////////////////////////////
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
  // loader.style.transitionDuration = "300ms";
});

/////////////////////////////////////////////////////

const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";
const APP_ID = "641e91f4";
const APP_key = "52bc8c41f40039426775a36049a13eaf";

// console.log(container)
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});

async function fetchAPI() {
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.hits);
  console.log(data);
}

function generateHTML(results) {
  container.classList.remove("initial");
  let generatedHTML = "";
  results.map((result) => {
    generatedHTML += `
      <div class="item">
        <img src="${result.recipe.image}" alt="img">
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
        
        </div>
        <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
         <div class="item2">
         <a class="view-btn" target="_blank" href="${
           result.recipe.url
         }">View Recipe</a>
        </div>
       
      </div>
    `;
  });
  searchResultDiv.innerHTML = generatedHTML;
}

///////////////////////////////////////////////////////////

const backToTopBtn = document.querySelector(".back-to-top--btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    console.log("berks");
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



//////////////////////////////////////////////////////
// HAMBURGER FUNCTIONALITY

const hamImg = document.getElementById("ham--img");
const navOverlay = document.getElementById("nav--overlays");
const closeNav = document.getElementById("nav--closer");


hamImg.addEventListener('click', () => {
  console.log('hello');
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