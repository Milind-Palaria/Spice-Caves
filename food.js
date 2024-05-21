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
  // console.log(data);
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



//////////////////////////////////////////////////////
// HAMBURGER FUNCTIONALITY

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

   ///////////////////////////////////////////////
  ///////////////
  // CSS
  //////////////////////////////////////////////////////////////

  closeNav.addEventListener('click',navCloseModal);

  var styles = `
  
.brand {
  text-align: center;
  color: rgba(255, 255, 255, 0.59);

  margin-bottom: 4rem;
  text-align: center;
}

#brand {
  color: #dd2721bb;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none !important;

}

input {
  width: 70%;
  height: 3rem;

  border-radius: 4rem;
  border: none;
  outline: none;
  font-size: 2.2rem !important;
  letter-spacing: 1px;
  background-color: rgba(255, 255, 255, 0.199);

  display: inline-block;
  padding: 1rem;
  text-align: center;
  font-family: "Dancing Script", cursive;
  color: #000000;
  font-weight: bold;
  text-transform: capitalize;

  transform: translateX(6%);
}

form ion-icon {
  width: 8%;
  font-size: 3rem;
  margin-bottom: -8px;
  color: rgb(255, 255, 255);
  display: inline-block;
}

::placeholder {
  color: red;
  color: #dd2721a6;
  font-size: 2.2rem;
  font-weight: bold;
  color: #0000009b;
  opacity: 1;
}

:-ms-input-placeholder {
  color: red;
  color: #dd2721a6;
  color: #0000009b;
  font-size: 2.5rem;
  font-weight: bold;
  color: #000000;
  font-size: 2.2rem;
  font-weight: bold;
  color: #0000009b;
}

::-ms-input-placeholder {
  color: red;
  color: #dd2721a6;
  font-size: 2.2rem;
  font-weight: bold;
  color: #000000;
  color: #0000009b;
}

.search-result {
  width: 85%;
  display: grid;
  grid-gap: 45px;
  margin: auto;
  margin-top: 70px;
  grid-template: auto / repeat(auto-fit, minmax(300px, 1fr));
  transform: translateX(-2%);
}

.item {
  width: 100%;
  border-radius: 8px;
  background-color: rgba(37, 37, 37, 0.27);
  background-color: rgba(0, 0, 0, 0.364);
  padding: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding-bottom: 1.5rem;
}

.item2 {
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
}

.item2>a {
  padding: 0.5rem 2rem;
}

.item img {
  width: 15rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
  border-radius: 50%;
}

.flex-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-result .title {
  color: rgba(245, 245, 245, 0.691);
  margin: 20px 10px 0 0;
  font-size: 1.8rem;
  padding: 0 2rem 0.5rem 2rem;
  font-weight: 600;
  letter-spacing: 0.12rem;
}

.view-btn {
  text-decoration: none;
  text-align: center;
  width: 130px;
  padding: 10px 0;
  background-color: rgba(245, 245, 245, 0.462);
  color: #000000d1;
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 20px;
  border-radius: 4px;
  align-self: flex-start;
  transition-duration: 200ms;
}

.view-btn:hover {
  color: rgba(245, 245, 245, 0.462);
  background-color: #000000d1;
}

.item-data {
  color: rgba(245, 245, 245, 0.544);
  display: block;
  font-size: 1.1rem;
  letter-spacing: 0.25rem;
  line-height: 2rem;
  font-weight: 300;
}

.container.initial .brand {
  font-size: 8rem;
  padding-top: 3rem;
}

.brand {
  font-size: 8rem;
  padding-top: 3rem;
}

.container.initial form input {
  padding: 20px;
  font-size: 3rem;
}

input {
  padding: 20px;
  font-size: 3rem;
}

@media (max-width: 768px) {
  .banner--text1 {
    width: 90% !important;
  }

  .search-result {
    grid-gap: 10px;
  }

  .container.initial .brand {
    font-size: 6rem !important;
  }

  .brand {
    font-size: 6rem !important;
  }

  ::placeholder {
    font-size: 1.4rem !important;
  }

  :-ms-input-placeholder {
    font-size: 1.4rem !important;
  }

  ::-ms-input-placeholder {
    font-size: 1.4rem !important;
  }


  .container.initial form input {
    padding: 10px;
    font-size: 1.4rem !important;
  }

  input {
    padding: 10px;
    font-size: 1.4rem !important;
  }
}


.about-us--video-2 {
  display: none;
  z-index: -10;

  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
}

.about-us--video {
  z-index: -10;

  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
}

.logos {
  display: flex;
  align-items: center;
}

.logo-name {
  padding-left: 2rem;
  font-size: 2rem;
  font-family: inherit;
}

.navbar {

  color: rgba(255, 255, 255, 0.459);

  backdrop-filter: blur(12px);

  display: flex;

  justify-content: space-between;
  align-items: center;
  height: 6.5rem;
  padding: 0 6rem;
  background-color: rgba(0, 0, 0, 0.513);
  z-index: 100;
  animation-name: navs;
  animation-duration: 8s;
}

@keyframes navs {
  0% {
    transform: translateY(-8rem);
  }

  25% {
    transform: translateY(-20rem);
  }

  50% {
    transform: translateY(-10rem);
  }

  75% {
    transform: translateY(0rem);
    opacity: 0.7;
  }

  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
}


.nav-link {
  display: flex;
  align-items: center;
  list-style: none;
}

.nav-item {
  margin-left: 4rem;
}

.nav-linkers {
  color: rgba(245, 237, 237, 0.513);
  text-decoration: none;
  font-family: "Dancing Script", cursive;
  font-size: 1.7rem;
  opacity: 0.7;
  transition-duration: 400ms;
}

.nav-linkers:hover {
  color: #03e9f4;
  opacity: 1;
}

.api-linker {
  color: #03e9f4;
  opacity: 1;
}

.home-linker {
  color: #03e9f4;
  opacity: 1;
}

.logo {
  width: 10rem;
  border-radius: 1rem;
  opacity: 0.8;
  animation-name: logo-anime;
  animation-delay: 8s;
  animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
  animation-duration: 5s;
}

@keyframes logo-anime {
  0% {
    width: 10rem;
  }

  60% {
    width: 13rem;
    transform: rotateZ(90deg);
  }
}

.btn--login {
  background: none;
  margin-left: 3rem;
  border: none;
  font-family: "Dancing Script", cursive;
  border: 1.5px solid;
  border-radius: 2rem;
  padding: 1rem;
  cursor: pointer;
  color: rgba(245, 237, 237, 0.513);

  font-size: 1.25rem;

  animation-name: lgin;
  animation-duration: 6s;
  animation-delay: 6s;
  transition-duration: 500ms;
}

@keyframes lgin {
  0% {
    transform: scale(0rem);
  }

  25% {
    color: rgba(245, 237, 237, 0.89);
    background: #03e9f4;
    color: #000000;
    border-radius: 2rem;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
    border: 1.5px solid #03e9f4;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  100% {
    transform: scale(4rem);
    opacity: 1;
  }
}

.btn--login:hover {
  color: rgba(245, 237, 237, 0.89);
  background: #03e9f4;
  color: #000000;
  border-radius: 2rem;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
  border: 1.5px solid #03e9f4;
}

.head {
  min-height: calc(100vh+30vh) !important;
}

.texts {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  box-sizing: border-box !important;
}

.banner--text1 {

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 3.5rem;
  border: 8px solid rgba(255, 255, 255, 0.044);
  border-radius: 15px;
  backdrop-filter: blur(8px);
  width: 80%;
  color: rgba(255, 255, 255, 0.315);
  background-color: rgba(0, 0, 0, 0.394);
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  font-family: "Dancing Script", cursive;
  font-size: 4rem;

  animation-name: banners;
  animation-duration: 8s;
}

@keyframes banners {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {}
}

.welcome--text {
  padding-top: 2.5rem;
  animation-name: welcome;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  font-size: 8rem;
  color: rgba(255, 255, 255, 0.582);
}

@keyframes welcome {
  0% {
    transform: translateY(2rem);
    opacity: 0;
  }

  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
}

.restaurent--name {
  font-family: "Monoton", cursive;
  padding-bottom: 3rem;
  animation-name: rest;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  font-size: 6rem;
}

@keyframes rest {
  0% {
    transform: translateY(-2rem);
    opacity: 0;
  }

  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
}

.back-to-home {
  text-decoration: none;
  color: rgba(245, 237, 237, 0.513);
  animation-name: exp2;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-delay: 5s;
}

@keyframes exp2 {
  0% {}

  25% {
    color: #000000;
  }

  100% {
    color: rgba(245, 237, 237, 0.513);
  }
}

.btn--back-to-home {
  background: none;

  border: none;
  font-family: "Dancing Script", cursive;
  border: 1.5px solid;
  border-radius: 2rem;
  padding: 1rem;
  cursor: pointer;

  font-size: 1.5rem;
  padding-left: 3rem;
  padding-right: 3rem;
  margin-bottom: 5rem;
  animation-name: exp;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-delay: 5s;
  opacity: 0;
}

@keyframes exp {
  0% {
    color: rgba(245, 237, 237, 0.513);
    opacity: 1;
  }

  25% {
    color: rgba(245, 237, 237, 0.89);
    background: #03e8f4bc;
    border-radius: 2rem;
    box-shadow: 0 0 5px #03e8f4b2, 0 0 25px #03e8f4c2, 0 0 50px #03e8f4b9,
      0 0 100px #03e8f4a6;
    border: 1.5px solid #03e8f4a8;
    color: #000000;
    padding-right: 3rem;
  }

  100% {
    color: rgba(245, 237, 237, 0.513);
    opacity: 1;
  }
}

.btn--back-to-home:hover {
  color: rgba(245, 237, 237, 0.89);
  background: #03e8f4bc;
  border-radius: 2rem;
  box-shadow: 0 0 5px #03e8f4b2, 0 0 25px #03e8f4c2, 0 0 50px #03e8f4b9,
    0 0 100px #03e8f4a6;
  border: 1.5px solid #03e8f4a8;
  color: #000000;
  padding-right: 3rem;
  color: #000000;
}

.lenk {
  transform: translateX(-0.8rem);
  transition: transform 500ms;
}

.lenk::before {
  content: "# ";
  display: inline-block;
  width: 0.8rem;

  color: #333;

  opacity: 0;
  transition: opacity 200ms;
}

.lenk:hover {
  transform: none;
}

.lenk:hover::before {
  opacity: 1;
}


.nav-mobile {
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-mobile {
  display: none;
}

.nav-mobile>img {
  width: 70%;
  border-radius: 50%;
  background: #02b3bd;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
  border: 1.5px solid #03e9f4;
  opacity: 0.9;
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
}

.nav-mobile>img:hover {
  background: #03e9f4;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
  border: 1.5px solid #03e9f4;
  cursor: pointer;
  transform: scale(1.15);
  color: #2d2d2d;
}

.back-to-top--btn {
  bottom: 8%;
  right: 4%;

  background: none;
  border: none;
  background: rgba(255, 166, 0, 0.543);

  backdrop-filter: blur(5px);
  border-radius: 50%;
  padding: 0.6rem;
  z-index: 11;

  position: fixed;

  cursor: pointer;


  transition-duration: 400ms;


  transform: translateY(20rem);
  visibility: hidden;

  animation: pulse 1500ms infinite;
}

@keyframes pulse {
  0% {
    box-shadow: rgba(255, 166, 0, 0.494) 0 0 0 0;
  }

  100% {
    box-shadow: rgba(255, 166, 0, 0) 0 0 5px 16px;
  }
}

.back-to-top--btn:active {
  background: rgba(255, 166, 0, 0.686);
  transform: scale(0.9);

}

.back-to-top--btn[data-visible="true"] {
  visibility: visible;
  transform: translateY(0rem);
}


.section--footer-1 {
  width: 100%;
  min-height: calc(77vh+23vh);
  background-color: rgba(0, 0, 0, 0.753);
  padding-bottom: 0rem;
  backdrop-filter: blur(5px);
  font-family: "Dancing Script", cursive;
}

.footer-div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 14rem;
  padding-top: 3rem;
}

.next--links {
  transform: translateX(30px);
}

.logo-name-div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  transform: translateX(-30px) !important;
}

.footer-div>div {
  padding-right: 6rem;
}

.res-logo {
  z-index: 5;
  width: 22%;
  padding-right: 3rem;
  transition-duration: 1280ms;
  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
}

.res-logo:hover {
  padding-left: 1rem;
  padding-right: 4rem;
  transform: rotateZ(90deg) scale(1.2) translateX(15px);

}

.companies-1 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.res-logo-2 {
  width: 3.5%;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  opacity: 0.7;
  transition-duration: 300ms;
}

.res-logo-2:hover {
  transform: scale(1.2);
}

.footer-txt-1 {
  color: #f5f5f57e;
  font-family: "Monoton", cursive;
  font-size: 2rem;
}

.footer-txt-2 {
  color: rgba(221, 39, 33, 0.651);
  font-size: 1.8rem;
}

.footer-txt-3 {
  z-index: 10;
  color: #f5f5f57e;
  font-family: "Monoton", cursive;
  font-size: 2.6rem;
  padding-left: 1rem;
  padding-top: 1.4rem;
  transition-duration: 550ms;
}

.footer-txt-3:hover {
  transform: scale(1.25);
  color: rgba(221, 39, 33, 0.651);
}

.footer-txt-line {
  text-align: center;
  padding-bottom: 1.5rem;
  padding-top: 1rem;
  color: #f5f5f57e;
}

.footer-txt-line-2 {
  text-align: center;
  padding-bottom: 1rem;
  color: #f5f5f57e;
  font-size: 2rem;
}

a {
  text-decoration: none;
  color: rgba(221, 39, 33, 0.651);
}

.res-logo-3 {
  width: 6%;
  padding-right: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  opacity: 0.65;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
}

.res-logo-3:hover {
  transform: scale(1.3) translateX(5px);
  opacity: 0.85;
}

.footer-2-div>h1 {
  color: #f5f5f57e;
  font-size: 2.5rem;
  padding-top: 2rem;
  padding-right: 9rem;
}

.section--footer-2 {
  width: 100%;
  height: 24vh;
  background-color: rgba(221, 39, 33, 0.651);
  backdrop-filter: blur(5px);
  font-family: "Dancing Script", cursive;
}

.footer-2-div {
  display: flex;
  justify-content: center;
  padding-left: 8rem;
}


.footer-2-div--2 {
  padding-top: 2.3rem;
}

.footer-2-div--2>h1 {
  font-size: 2rem;
  opacity: 0.8;
}

.abcd {
  width: 50%;
  padding-top: 2rem;
  padding-right: 10rem;
  text-align: center;
}

.abcd>h1 {
  font-size: 1.5rem;
  opacity: 0.8;
}

.abcd2 {
  width: 55%;
  padding-top: 2rem;
  padding-right: 10rem;
  text-align: center;
}

.abcd>h2 {
  padding-top: 1rem;
  font-size: 1rem;
  color: #f5f5f57e;
  color: #f5f5f5bc;
  opacity: 0.8;
}

.abcd2>h1 {
  opacity: 0.8;
}

.abcd2>h2 {
  padding-top: 0.6rem;
  font-size: 1.25rem;
  color: #f5f5f5bc;
  opacity: 0.8;
}

.src2 {
  color: #000000c4;
}

.footer-2-div>h4 {
  font-size: 6rem;
  transform: translate(-160px, 30px);
  height: 40%;
  opacity: 0.8;
}


@media only screen and (max-width: 1550px) {
  .abcd {
    width: 50%;
  }
}

@media only screen and (max-width: 1490px) {
  .abcd {
    width: 50%;
    height: 40%;
    text-align: center;
    transform: translate(-210px, 30px);
    padding: 0;
  }

  .abcd2 {
    width: 40%;
    height: 40%;
    padding: 0;
    text-align: center;
    transform: translate(-110px, 30px);
  }

  .footer-2-div>h4 {
    transform: translate(-300px, 30px)
  }
}

@media only screen and (max-width: 1400px) {

  .closes {
    top: 1.1%;
    right: -33%;
  }

  .abcd2 {
    width: 45%;
  }

  .footer-txt-line {
    padding-bottom: 2.5rem;
    padding-top: 2rem;
  }

  .disc-div-2>h1 {
    font-size: 3.2rem;
  }

  .disc-div-2>h2 {
    font-size: 1.7rem;
    padding-top: 0.6rem;
  }
}

@media only screen and (max-width: 1343px) {
  .extended--div-2 {
    text-align: center;
    padding: 2rem 10rem 2rem 0rem;
    font-family: "Dancing Script", cursive;
    transform: translateX(-5rem);
  }

  .cart--section--extended>div {
    transform: translateX(-80px);
  }

  .payment--btn {
    transform: translate(22.5rem, -30rem);

  }

  .abcd2 {
    width: 50%;
  }

  .many-more--txt {
    padding-top: 0 !important;
    font-size: 6rem !important;
  }
}

@media only screen and (max-width: 1265px) {
  .abcd {
    width: 60%;
  }

  .banner--text1 {
    width: 83%;

  }

  .extended--div-2 {
    padding-right: 8rem;
  }

  .payment--btn {
    transform: translate(23.4rem, -32rem);

  }

  .disc-div-2>h1 {
    color: #f5f5f5de;
    font-size: 3.2rem;
  }

  .disc-div-2>h2 {
    color: #f5f5f59f;
    font-size: 1.7rem;
    padding-top: 0.6rem;
  }
}

@media only screen and (max-width: 1230px) {

  .max--limit {
    width: 80%;
  }

  .cart--section--extended>div {
    transform: translateX(-60px);
  }

  .payment--btn {
    transform: translate(20.9rem, -32rem);

  }

  .inr--extended--div-2 {
    transform: translate(23.4rem, -36rem);
  }

  .extended--div-2 {
    padding-right: 6rem;
  }

  .footer-div {
    padding-left: 0;

  }

  .next--links {
    padding: 0 !important;
  }

  .logo-name-div {
    padding: 0 !important;
    transform: translateX(120px) !important;
  }

}

@media only screen and (max-width: 1190px) {
  .closes {
    top: 1.1%;
    right: -31%;
  }

  .close--btn {
    top: 0.1%;
    right: 3%;
  }

  .cart--section--extended>div {
    transform: translateX(-70px);
  }

  .extended--div-2 {
    padding-right: 0rem;
  }

  .payment--btn {
    transform: translate(21.2rem, -32rem);


  }

  .inr--extended--div-2 {
    transform: translate(21rem, -36rem);
  }

  .login-btn--class {
    transform: translateX(30px);
  }

  .nav-item {
    margin-left: 3rem;
  }

  .btn--login {
    margin-left: 0;
  }

  .abcd>h1 {
    font-size: 20px;
  }

  .abcd>h2 {
    font-size: 13px;
  }

  .abcd2>h1 {
    font-size: 20px;
  }

  .abcd2>h2 {
    font-size: 18px;
  }

  .reserve>img {
    width: 80%;
    display: block;

  }

  .reserve>h1 {
    font-size: 9rem;
  }

  .discover--menu-2>img {
    width: 70%;

    margin-left: auto;
    margin-right: auto;
  }

  .disc-div-2>h1 {
    font-size: 2.6rem;
  }

  .disc-div-2>h2 {
    font-size: 1.2rem;
    padding-top: 0.6rem;
  }

  .add-to-cart--button {

    padding: 0;
    margin: 0;
    text-align: center;

  }


}

@media only screen and (max-width: 1160px) {
  .nav-mobile {
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(60%);
  }

  .nav-item {
    display: none;
  }

  .nav-mobile>img {
    width: 50%;
  }

  .max--limit>h1 {
    font-size: 4rem;
  }

  .max--limit>h2 {
    font-size: 1.7rem;
    padding-top: 10px;

  }

  .max--limit>h3 {
    font-size: 1.3rem;

  }

}


@media only screen and (max-width: 1113px) {
  .cart--section--extended>div {
    transform: translate(-70px, 15px);
  }

  .cart--section--extended>h1 {
    font-size: 4rem;
  }

  .extended--div>h1 {
    font-size: 2rem;
  }

  .extended--div-2>h1 {
    font-size: 2rem;
  }

  #extended--total-amount {
    font-size: 3.8rem;
    transform: translateX(-80px) !important;
    padding-right: 25px;

  }

  .payment--btn {
    font-size: 1.7rem;
    padding: 0.8rem 2.4rem 3.2rem 2.4rem;
    transform: translate(20.3rem, -32rem);

  }

  .inlogs {
    margin: 0;
  }

  .abcd {
    width: 70%;
  }

  .footer-2-div>h4 {
    transform: translate(-270px, 30px)
  }
}

@media only screen and (max-width: 1030px) {
  .brand {
    font-size: 6rem !important;
  }

  input {
    height: 2rem;
    font-size: 1.8rem !important;
  }

  ::placeholder {
    font-size: 1.8rem;
  }

  :-ms-input-placeholder {
    font-size: 1.8rem;
  }

  ::-ms-input-placeholder {
    font-size: 1.8rem;
  }

  .max--limit>h1 {
    font-size: 3rem;
  }

  .max--limit>h2 {
    font-size: 1.5rem;
    padding-top: 10px;

  }

  .max--limit>h3 {
    font-size: 1.3rem;
  }

  .ok--btn {

    margin-top: 2.5rem;
    margin-top: 3rem;
    margin-bottom: 0.6rem;

    padding: 0.7rem 2.4rem;
    cursor: pointer;
    color: rgba(245, 237, 237, 0.513);

    font-size: 1.3rem;
  }

  #avatar-name {
    font-size: 1.3rem;
  }

  .restaurent--name {
    font-size: 6rem;
  }
}

@media only screen and (max-width: 1010px) {
  #extended--total-amount {
    font-size: 3.4rem;
    padding-right: 20px;
    transform: translateX(-80px) !important;

  }

  .payment--btn {
    font-size: 1.7rem;
    padding: 0.8rem 2.4rem 3.2rem 2.4rem;
    transform: translate(19.9rem, -32rem);

  }

  .lord-icons-4 {
    width: 35px !important;
    height: 35px !important;
    padding-right: 8px !important;
    padding-bottom: 4px !important;
  }

  .nav-item {
    margin-left: 2.3rem;
  }

  .cart-div>h1 {
    font-size: 30px;
  }

  .cart-div>span {
    font-size: 25px;
    padding-left: 0;
  }
}

@media only screen and (max-width: 1000px) {
  .search-result {
    width: 85%;
    grid-template: auto / repeat(auto-fit, minmax(200px, 2fr));
    transform: translateX(-2%);
  }

  .item img {
    width: 12rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 50%;
  }

  .search-result .title {
    color: rgba(245, 245, 245, 0.691);
    margin: 20px 10px 0 0;
    font-size: 1.3rem;
    padding: 0 2rem 0.5rem 2rem;
    font-weight: 600;
    letter-spacing: 0.12rem;
  }

  .item-data {
    color: rgba(245, 245, 245, 0.544);
    display: block;
    font-size: 0.8rem;
    letter-spacing: 0.25rem;
    line-height: 2rem;
    font-weight: 300;
  }

  .back-to-top--btn {
    bottom: 8%;
    right: 8%;
  }

  .abcd {
    width: 120%;
    transform: translate(-90px, 30px);

  }

  .abcd2 {
    width: 100%;
    transform: translate(-55px, 30px);

  }

  .abcd>h1 {
    font-size: 17px;
  }

  .abcd>h2 {
    font-size: 11px;
  }

  .abcd2>h1 {
    font-size: 17px;
  }

  .abcd2>h2 {
    font-size: 14px;
  }

  .footer-2-div>h4 {
    transform: translate(-130px, 20px)
  }

  .footer-2-div--2 {
    padding: 0;
    transform: translate(-50px, 30px);
  }

  .res-logo-3 {
    width: 9%;
  }

  .logo-name-div {
    display: flex;
    flex-direction: column;
  }

  .res-logo {
    padding: 0;
    width: 140px !important;
  }

  .section--footer-2 {
    height: 20vh;
  }

  .welcome--text {
    font-size: 0.95em;
  }

  .restaurent--name {
    font-size: 5.5rem;
    padding: 0rem 1rem 2rem 1rem;
  }

  .discover--menu-2>h1 {
    font-size: 7rem;
  }

  .discover--menu-2>img {
    width: 70%;
  }

  .disc-div {
    flex-direction: column;
  }

  .disc-div>img {
    width: 50%;
  }

  .hideno {
    display: none;
  }

  .hide {
    display: block;
  }

  .centry {
    text-align: center;
    padding-top: 1.6rem;
    padding-bottom: 6rem;
  }

  .disc-div-2 {
    align-items: center;
  }

  .add-to-cart--button {
    padding: 0;
    margin: 0;
  }

}

@media only screen and (max-width: 980px) {
  .btn--back-to-home {
    background: none;

    border: none;
    font-family: "Dancing Script", cursive;
    border: 1.5px solid;
    border-radius: 2rem;
    padding: 1rem;
    cursor: pointer;

    font-size: 1.2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: 5rem;
  }

  .login--successed--text {
    padding: 1.8rem 6rem;
    border-radius: 3rem;
  }

  .login--successed--text>h1 {
    font-size: 2.7rem;
  }

  .login--successed--text>button {
    font-size: 1.5rem;
    margin-top: 2rem;
  }

  .login--failed--text {
    padding: 1.8rem 8rem;
    border-radius: 3rem;
  }

  .login--failed--text>h1 {
    font-size: 2.7rem;
  }

  .login--failed--text>button {
    font-size: 1.5rem;
    margin-top: 2rem;
  }

  .registeration--successed--text {
    padding: 1.8rem 6rem;
    border-radius: 3rem;
  }

  .registeration--successed--text>h1 {
    font-size: 2.7rem;
  }

  .registerationn--successed--text>button {
    font-size: 1.5rem;
    margin-top: 2rem;
  }

  .registeration--failed--text {
    padding: 1.8rem 6rem;
    border-radius: 3rem;
  }

  .registeration--failed--text>h1 {
    font-size: 2.7rem;
  }

  .registerationn--failed--text>button {
    font-size: 1.5rem;
    margin-top: 2rem;
  }

  .deliver--text>h1 {
    display: inline;
    font-size: 2.2rem;
  }

  .deliver--text>h2 {
    font-size: 1.2rem;
  }

  .deliver--text>h3 {
    font-size: 1.2rem;
  }

  .deliver--text>button {
    margin-top: 0.2rem;
    font-size: 1.3rem;

  }

  .closes {
    top: -4.1%;
    right: -35%;
  }

  .login--req {
    width: 70%;
  }

  .login--req>h1 {
    font-size: 3rem;
    padding-bottom: 2.4rem;
  }

  .btn--login-2 {
    font-size: 1.2rem;
    padding: 1rem 1.2rem;
  }

  .max--limit {
    width: 70%;
  }

  .max--limit>h1 {
    font-size: 3rem;
  }

  .max--limit>h2 {
    font-size: 1.5rem;
    padding-top: 10px;

  }

  .max--limit>h3 {
    font-size: 1.3rem;
  }

  .ok--btn {
    font-size: 1.1rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    padding: 0.6rem 2.3rem;

  }

  .close--btn {
    top: 1px;
    transform: translate(0, -10px);
    right: 3%;
  }

  .inr--extended--div-2 {
    transform: translate(19rem, -33rem);

  }

  .payment--btn {
    font-size: 1.7rem;
    padding: 0.8rem 2.4rem 3.2rem 2.4rem;
    transform: translate(16.6rem, -32rem);

  }

  .back-to-top--btn {
    bottom: 6%;
    right: 4%;

    padding: 0.45;
  }

  .back--gif {
    width: 60px !important;
    height: 60px !important;
  }

  .banner--text1 {
    margin-top: 1.5em;
  }

  #avatar-name {
    font-size: 1.7rem;
  }

  .nav-mobile {
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(60%);
  }

  .nav-item {
    display: none;
  }

  .btn--login {
    transform: translateX(140%);
    font-size: 1.2rem;
    padding: 0.6rem;

    animation-name: lgin-mobile;
    animation-duration: 6s;
    animation-delay: 6s;
    transition-duration: 500ms;
  }

  @keyframes lgin-mobile {
    0% {
      transform: scale(0rem);
    }

    25% {
      color: rgba(245, 237, 237, 0.89);
      background: #03e9f4;
      color: #000000;
      border-radius: 2rem;
      box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
        0 0 100px #03e9f4;
      border: 1.5px solid #03e9f4;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    100% {
      transform: scale(2rem);
      opacity: 1;
    }
  }

  .disc-div-2>h2 {
    padding-bottom: 1em;
  }
}

@media only screen and (max-width: 958px) {
  .cart--section--extended>h1 {
    font-size: 3rem;
    padding-top: 1.5rem;

  }

  .extended--div {
    padding-right: 1.5rem;
  }

  .btn--login {
    transform: translateX(120%);
  }
}

@media only screen and (max-width: 930px) {
  .closes {
    top: -4.1%;
    right: -35%;
  }

  .forms-section {
    margin-left: 13%;
    margin-top: 5.5%;
  }
}

@media only screen and (max-width: 900px) {

  .max--limit {
    width: 70%;
  }

  .max--limit>h1 {
    font-size: 2.5rem;
  }

  .max--limit>h2 {
    font-size: 1.2rem;
    padding-top: 10px;

  }

  .max--limit>h3 {
    font-size: 1.1rem;
  }

  .ok--btn {
    font-size: 1.1rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    padding: 0.6rem 2.3rem;

  }

  .btn--login {
    display: none;
  }

  .nav-mobile>img {
    width: 80%;
  }
}

@media only screen and (max-width: 880px) {
  .closes {
    top: -4.1%;
    right: -35%;
  }

  .forms-section {
    margin-left: 11%;
    margin-top: 5.5%;
  }

  .extended--div>h1 {
    font-size: 1.7rem;
  }

  .extended--div-2>h1 {
    font-size: 1.7rem;
  }

  .inner--extended--div {
    font-size: 0.6rem !important;
    padding-top: 1rem;
  }

  .inner--extended--div-2 {
    font-size: 0.6rem !important;
    padding-top: 1.14rem;
  }

  .inr--extended--div-2 {
    transform: translate(17rem, -30rem);

  }

  .payment--btn {
    font-size: 1.3rem;
    padding: 0.7rem 2rem 2.8rem 2rem;
    transform: translate(13.8rem, -29rem);

  }

  .cart--section {
    height: 5rem;
  }

  .cart-div {
    width: 60%;
  }

  .cart-div>h1 {
    font-size: 24px;
    padding-right: 4px;
  }

  .cart-div>span {
    font-size: 24px;
    padding-left: 0;
  }

  #up--btn {
    position: absolute;
    width: 2.4em !important;
    border-left: 2.7rem solid transparent;
    border-right: 2.7rem solid transparent;
    border-bottom: 3.71rem solid rgba(255, 166, 0, 0.67);
    transform: translateY(-3.7rem);

  }

  .lord-icons {
    transform: translate(0, -20px);
    width: 45px !important;
    height: 45px !important;
  }

  .lord-icons-2 {
    width: 40px !important;
  }

  .lord-icons-3 {
    width: 40px !important;
  }

  .cart-div {
    padding: 0rem;
  }

  #cart-id--1 {
    padding-right: 0rem;
  }

  #cart-id--2 {
    padding-left: 0rem;

  }

  #avatar-name {
    font-size: 1.3rem;
  }

  .logo {
    width: 8rem;
    animation-name: logo-anime--01;
    animation-delay: 8s;
    animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
    animation-duration: 5s;
  }

  @keyframes logo-anime--01 {
    0% {
      width: 8rem;
    }

    60% {
      width: 10rem;
      transform: rotateZ(90deg);
    }
  }

  .reserve>h1 {
    font-size: 8rem;
  }

  .many-more--txt {
    font-size: 4rem !important;
  }

  .restaurent--name {
    font-size: 5rem;
  }

  .section--footer-1 {
    min-height: calc(60vh+20vh);
  }

  .res-logo-2 {
    width: 5.5%;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .footer-txt-line {
    font-size: 20px;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .next--links>h2 {
    width: 170px;
  }

  .footer-txt-3:hover {

    transform: scale(1.15);
  }

  .logo-name-div {
    width: 400px;
    transform: translateX(80px) !important;
  }

  .next--links {
    transform: translateX(15px) !important;
  }
}

@media only screen and (max-width: 850px) {
  .extended--div {
    transform: translateX(-6rem) !important;

  }

  .extended--div>h1 {
    font-size: 1.7rem;
  }

  .extended--div-2>h1 {
    font-size: 1.7rem;
  }

  .inner--extended--div {
    font-size: 0.6rem !important;
    padding-top: 1rem;
  }

  .inner--extended--div-2 {
    font-size: 0.6rem !important;
    padding-top: 1.16rem;
  }

  .inr--extended--div-2 {
    transform: translate(14.7rem, -30rem);

  }

  .cart--section--extended>div {
    transform: translate(-40px, 15px);
  }

  .payment--btn {
    font-size: 1.3rem;
    padding: 0.7rem 2rem 2.8rem 2rem;
    transform: translate(13.5rem, -29rem);

  }
}

@media only screen and (max-width: 830px) {
  .closes {
    top: -4.1%;
    right: -35%;
  }

  .forms-section {
    margin-left: 9%;
    margin-top: 5.5%;
  }

  .login--req {
    width: 70%;
  }

  .login--req>h1 {
    font-size: 2.5rem;
    padding-bottom: 2.2rem;
  }

  .btn--login-2 {
    font-size: 1.1rem;
    padding: 0.8rem 1rem;
  }
}

@media only screen and (max-width: 810px) {

  .reserve>h1 {
    font-size: 6.5rem;
  }

  .footer-txt-line {
    font-size: 15px;
  }

  .footer-txt-3 {
    padding: 0;
    width: 300px;
    font-size: 40px;
    text-align: center;
    padding-top: 20px;
  }

  .disc-div-2>h1 {
    font-size: 2.2rem;
  }

  .disc-div-2>h2 {
    font-size: 1.3rem;
    padding-top: 0.6rem;
  }
}

@media only screen and (max-width: 810px) {
  .search-result {
    width: 85%;
    grid-template: auto / repeat(auto-fit, minmax(200px, 2fr));
    transform: translateX(-2%);
  }

  .item img {
    width: 12rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 50%;
  }

  .search-result .title {
    color: rgba(245, 245, 245, 0.691);
    margin: 0px 10px 0 0;
    font-size: 1.1rem;
    padding: 0 1rem 0.5rem 1rem;
    font-weight: 600;
    letter-spacing: 0.12rem;
  }

  .item-data {
    color: rgba(245, 245, 245, 0.544);
    display: block;
    font-size: 0.8rem;
    letter-spacing: 0.25rem;
    line-height: 2rem;
    font-weight: 300;
  }

  .closes {
    top: -4.1%;
    right: -40%;
  }

  .forms-section {
    margin-left: 7%;
    margin-top: 5.5%;
  }
}

@media only screen and (max-width: 774px) {
  .search-result {
    width: 90%;
    grid-template: auto / repeat(auto-fit, minmax(180px, 1fr));
    transform: translateX(-1%);
    padding: 0;
    grid-gap: 30px;
  }

  .item {
    width: 90%;
    border-radius: 8px;
    background-color: rgba(37, 37, 37, 0.27);
    background-color: rgba(0, 0, 0, 0.364);
    padding: 15px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding-bottom: 0.5rem;
  }

  .item img {
    width: 8rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 50%;
  }

  .search-result .title {
    color: rgba(245, 245, 245, 0.691);
    margin: 0px 10px 0 0;
    font-size: 1.1rem;
    padding: 0 1rem 0.5rem 1rem;
    font-weight: 600;
    letter-spacing: 0.12rem;
  }

  .item-data {
    color: rgba(245, 245, 245, 0.544);
    display: block;
    font-size: 0.8rem;
    letter-spacing: 0.25rem;
    line-height: 2rem;
    font-weight: 300;
  }


  .login--sux {
    width: 110px !important;
    height: 110px !important;
  }

  .login--fels {
    width: 110px !important;
    height: 110px !important;
  }

  .regis--sux {
    width: 110px !important;
    height: 110px !important;
  }

  .registeration--successed--text {
    padding: 1.8rem 5rem;
    border-radius: 3rem;
  }

  .regis--fels {
    width: 110px !important;
    height: 110px !important;
  }

  .closes {
    top: -4.1%;
    right: -45%;
  }

  .forms-section {
    margin-left: 5%;
    margin-top: 5.5%;
  }

  .inr--extended--div-2 {
    transform: translate(14.7rem, -30rem);

  }

  .cart--section--extended>div {
    transform: translate(-30px, 15px);
  }

  .extended--div {
    padding-right: 0;
    transform: translateX(-7rem);
  }

  .back-to-top--btn {
    bottom: 5%;
    right: 4.5%;

    padding: 0.45;
  }

  .back--gif {
    width: 60px !important;
    height: 60px !important;
  }

  #callus {
    padding-bottom: 1rem;
  }

  .cart--section {
    height: 5rem;
  }

  .cart-div {
    width: 60%;
  }

  .cart-div>h1 {
    font-size: 24px;
    padding-right: 4px;
  }

  .cart-div>span {
    font-size: 24px;
    padding-left: 0;
  }

  #up--btn {
    position: absolute;
    width: 2.4em !important;
    border-left: 2.7rem solid transparent;
    border-right: 2.7rem solid transparent;
    border-bottom: 3.71rem solid rgba(255, 166, 0, 0.67);
    transform: translateY(-3.7rem);

  }

  .lord-icons {
    transform: translate(0, -20px);
    width: 45px !important;
    height: 45px !important;
  }

  .lord-icons-2 {
    width: 40px !important;
  }

  .lord-icons-3 {
    width: 40px !important;
  }

  .texts {

    padding-left: 1em;
    padding-right: 1em;
  }

  .banner--text1 {
    margin-top: 1em;
  }

  .restaurent--name {
    font-size: 7rem;
    padding-top: 0.3em;
    padding-bottom: 0.65em;
    line-height: 0.8;
  }

  .logo {
    transform: translateX(-30px);
    width: 7.5rem;
    animation-name: logo-anime--02;
    animation-delay: 8s;
    animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
    animation-duration: 5s;
  }

  @keyframes logo-anime--02 {
    0% {
      width: 7.5rem;
    }

    60% {
      width: 9rem;
      transform: rotateZ(90deg);
    }
  }

  .nav-mobile>img {
    width: 90%;
  }

  .reserve>h1 {
    font-size: 6rem;
  }

  .for-table {
    font-size: 6rem !important;
  }

  .discover--menu>h1 {
    font-size: 6rem;

  }

  .namber {
    font-size: 3.4rem !important;

  }

  .logo-name-div {
    width: 400px;
    transform: translateX(50px) !important;
  }

  .footer-2-div--2>h1 {
    font-size: 1.5rem;
    padding: 0;
  }

  .res-logo-3 {
    padding: 0;
    width: 18%;
    padding-top: 14px;
    padding-right: 23px;
  }

  .footer-2-div>h4 {
    transform: translate(-110px, 20px);
    font-size: 5rem;
  }

  .abcd {
    width: 200%;
    transform: translate(-100px, 30px);

  }

  .abcd2 {
    width: 170%;
  }

  .abcd>h1 {
    font-size: 15px;
  }

  .abcd>h2 {
    font-size: 11px;
  }

  .abcd2>h1 {
    font-size: 15px;
  }

  .abcd2>h2 {
    font-size: 14px;
  }
}

@media only screen and (max-width: 745px) {
  .deliver--text>h1 {
    display: inline;
    font-size: 2.2rem;
  }

  .deliver--text>h2 {
    font-size: 1.2rem;
  }

  .deliver--text>h3 {
    font-size: 1.2rem;
  }

  .deliver--text>button {
    margin-top: 0.2rem;
    font-size: 1.3rem;

  }

  .deliver--text>lord-icon {
    width: 120px !important;
    height: 120px !important;
  }

  .closes {
    top: -4.1%;
    right: -45%;
  }

  .forms-section {
    margin-left: 3%;
    margin-top: 5.5%;
  }

  .max--limit {
    width: 90%;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 1.7rem;
    padding-top: 1.7rem;

  }

  .max--limit>h1 {
    font-size: 2.5rem;
  }

  .max--limit>h2 {
    font-size: 1.2rem;
    padding-top: 10px;

  }

  .max--limit>h3 {
    font-size: 1.1rem;
  }

  .ok--btn {
    font-size: 1.1rem;
    margin-top: 2.5rem;
    margin-bottom: 0.5rem;
    padding: 0.6rem 2.3rem;

  }

  .inr--extended--div-2>lord-icon {
    width: 50px !important;
    height: 50px !important;
  }

  .inr--extended--div-2>h1 {
    font-size: 2rem;
  }

  .inr--extended--div-2>span {
    font-size: 3rem;
  }

  #extended--total-amount {
    font-size: 3rem;
    padding-right: 20px;

  }

  .payment--btn {
    font-size: 1.1rem;
    padding: 0.6rem 1.6rem 2.2rem 1.6rem;
    transform: translate(13.3rem, -29rem);
  }
}

@media only screen and (max-width: 700px) {
  .login--req {
    width: 80%;
    padding: 2.3rem 2.8rem 2.3rem 2.8rem;
  }

  .login--req>h1 {
    font-size: 2.4rem;
    padding-bottom: 2.2rem;
  }

  .btn--login-2 {
    font-size: 1.1rem;
    padding: 0.8rem 1rem;
  }

  .inr--extended--div-2 {
    transform: translate(14.3rem, -30rem);

  }

  .inr--extended--div-2>lord-icon {
    width: 50px !important;
    height: 50px !important;
  }

  .inr--extended--div-2>h1 {
    font-size: 2rem;
  }

  .inr--extended--div-2>span {
    font-size: 2rem;
  }

  #extended--total-amount {
    padding-right: 20px;

  }

  .payment--btn {
    font-size: 1.1rem;
    padding: 0.6rem 1.6rem 2.2rem 1.6rem;
    transform: translate(12.7rem, -29rem);
  }

  .lord-icons-4 {
    width: 27px !important;
    height: 27px !important;
    padding-right: 8px !important;
    padding-bottom: 4px !important;
  }

  .texts {
    padding-top: 1.5em;
    padding-bottom: 1.5em;
  }

  .licon {
    width: 40px !important;
    height: 40px !important;
  }

  #avatar-name {
    font-size: 1.1rem;
  }

  .navbar {
    height: 6rem;
  }

  .logo-name-div {
    width: 300px;
  }

  .res-logo-3 {
    width: 14%;
  }

  .section--footer-1 {
    min-height: calc(60vh+20vh);
  }

  .footer-2-div--2 {
    transform: translate(-100px, 30px) !important;
  }

  .footer-2-div>h4 {
    transform: translate(-120px, 20px);
    font-size: 5rem;
  }

}

@media only screen and (max-width: 680px) {
  .search-result {
    width: 100%;
    grid-template: auto / repeat(auto-fit, minmax(180px, 1fr));
    transform: translateX(0%);
    padding: 0;
    grid-gap: 70px;
  }

  .item {
    width: 90%;
    border-radius: 8px;
    background-color: rgba(37, 37, 37, 0.27);
    background-color: rgba(0, 0, 0, 0.364);
    padding: 15px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding-bottom: 0.5rem;
  }

  .item img {
    width: 8rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 50%;
  }

  .search-result .title {
    color: rgba(245, 245, 245, 0.691);
    margin: 0px 10px 0 0;
    font-size: 1.1rem;
    padding: 0 1rem 0.5rem 1rem;
    font-weight: 600;
    letter-spacing: 0.12rem;
  }

  .item-data {
    color: rgba(245, 245, 245, 0.544);
    display: block;
    font-size: 0.8rem;
    letter-spacing: 0.25rem;
    line-height: 2rem;
    font-weight: 300;
  }

  .view-btn {

    padding: 10px 0;

    font-size: 1.1rem;
    margin-top: 0px;
    border-radius: 4px;
  }

  .closes {
    top: -4.1%;
    right: -45%;
  }

  .forms-section {
    margin-left: 0%;
    margin-top: 5.5%;
  }

  .inlogs {
    transform: translateX(-30px);
  }

  .nav-mobile>img {
    width: 100%;
  }

  .for-table {
    font-size: 5rem !important;
  }

  .logo-name-div {
    padding: 0;
    transform: translateX(-90px);
  }

  .res-logo {
    width: 120px !important;
    padding-right: 0;
  }

  .footer-txt-3 {
    font-size: 30px;
  }

}

@media only screen and (max-width: 669px) {
  .banner--text1 {
    width: 95% !important;
  }

  .search-result {
    grid-gap: 10px;
  }

  .container.initial .brand {
    font-size: 5rem !important;
  }

  .brand {
    font-size: 5rem !important;
  }

  ::placeholder {
    font-size: 1.4rem !important;
  }

  :-ms-input-placeholder {
    font-size: 1.4rem !important;
  }

  ::-ms-input-placeholder {
    font-size: 1.4rem !important;
  }


  .container.initial form input {
    padding: 10px;
    font-size: 1.4rem !important;
  }

  input {
    padding: 10px;
    font-size: 1.4rem !important;
  }

  .login--successed--text {
    padding: 1.6rem 5.6rem;
    border-radius: 2.8rem;
  }

  .login--successed--text>h1 {
    font-size: 2.2rem;
  }

  .login--successed--text>button {
    font-size: 1.3rem;
    margin-top: 1.7rem;
  }

  .login--sux {
    width: 110px !important;
    height: 110px !important;
  }

  .login--failed--text {
    padding: 1.6rem 7.6rem 2rem 7.6rem;
    border-radius: 2.65rem;
  }

  .login--failed--text>h1 {
    font-size: 2.2rem;
  }

  .login--failed--text>button {
    font-size: 1.3rem;
    margin-top: 1.7rem;
  }

  .login--fels {
    width: 110px !important;
    height: 110px !important;
  }

  .registeration--successed--text {
    padding: 1.3rem 4.8rem;
    border-radius: 2.4rem;
  }

  .registeration--successed--text>h1 {
    font-size: 2rem;
  }

  .registeration--successed--text>button {
    font-size: 1.3rem;
    margin-top: 1.7rem;
  }

  .regis--sux {
    width: 110px !important;
    height: 110px !important;
  }

  .registeration--failed--text {
    padding: 1.6rem 5.6rem;
    border-radius: 2.8rem;
  }

  .registeration--failed--text>h1 {
    font-size: 2.2rem;
  }

  .registeration--failed--text>button {
    font-size: 1.3rem;
    margin-top: 1.7rem;
  }

  .regis--fels {
    width: 110px !important;
    height: 110px !important;
  }

  .deliver--text {
    width: 70%;
    padding: 2rem 3rem;
  }

  .deliver--text>h1 {
    display: inline;
    font-size: 2.1rem;
  }

  .deliver--text>h2 {
    font-size: 1.2rem;
  }

  .deliver--text>h3 {
    font-size: 1.2rem;
  }

  .deliver--text>button {
    margin-top: 0.2rem;
    font-size: 1.3rem;

  }

  .deliver--text>lord-icon {
    width: 120px !important;
    height: 120px !important;
  }

  .closes {
    top: -4.1%;
    right: -45%;
  }

  .forms-section {
    margin-left: -5%;
    margin-top: 5.5%;
  }

  .form {
    min-width: 240px;
  }

  .switcher {
    font-size: 18px;
  }

  .ch-fn {
    font-size: 0.8rem !important;
    padding-left: 10px;
  }

  #login-mail {
    height: 1.6rem;
  }

  #login-password {
    height: 1.6rem;
  }

  #name {
    height: 1.6rem;
  }

  #mail {
    height: 1.6rem;
  }

  #password {
    height: 1.6rem;
  }

  #address {
    height: 1.6rem;
  }

  #phone {
    height: 1.6rem;
  }

  .form [type="submit"] {

    min-width: 0;
    line-height: 0;
    padding: 1.1rem 1.2rem;
    font-size: 1rem !important;

  }

  .max--limit {
    width: 90%;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 1.7rem;
    padding-top: 1.7rem;

  }

  .max--limit>h1 {
    font-size: 2.1rem;
  }

  .max--limit>h2 {
    font-size: 1.2rem;
    padding-top: 5px;

  }

  .max--limit>h3 {
    font-size: 0.9rem;
  }

  .ok--btn {
    font-size: 0.9rem;
    margin-top: 2.1rem;
    margin-bottom: 0.5rem;
    padding: 0.6rem 2rem;
  }

  #nembers {
    font-size: 0.8rem;
  }

  .extended--div>h1 {
    font-size: 1.4rem;
  }

  .extended--div-2>h1 {
    font-size: 1.49rem;
  }

  .cart--section--extended>div {
    transform: translate(-20px, 15px);
  }

  .inr--extended--div-2 {
    transform: translate(12.5rem, -30rem);
  }

  .inr--extended--div-2>lord-icon {
    width: 50px !important;
    height: 50px !important;
  }

  .inr--extended--div-2>h1 {
    font-size: 2rem;
  }

  .inr--extended--div-2>span {
    font-size: 3rem;
  }

  #extended--total-amount {
    font-size: 3rem;
    padding-right: 20px;

  }

  .payment--btn {
    font-size: 1.1rem;
    padding: 0.6rem 1.6rem 2.2rem 1.6rem;
    transform: translate(10.7rem, -29rem);
  }

  .cart--section {
    height: 5rem;
  }

  .cart-div {
    width: 60%;
  }

  .cart-div>h1 {
    font-size: 24px;
    padding-right: 4px;
  }

  .cart-div>span {
    font-size: 24px;
    padding-left: 0;
  }

  #up--btn {
    position: absolute;
    width: 2.4em !important;
    border-left: 2.7rem solid transparent;
    border-right: 2.7rem solid transparent;
    border-bottom: 3.71rem solid rgba(255, 166, 0, 0.67);
    transform: translateY(-3.7rem);

  }

  .lord-icons {
    transform: translate(0, -20px);
    width: 45px !important;
    height: 45px !important;
  }

  .lord-icons-2 {
    width: 40px !important;
  }

  .lord-icons-3 {
    width: 40px !important;
  }

  .logo {
    transform: translateX(-50px);
    width: 7rem;
    animation-name: logo-anime--03;
    animation-delay: 8s;
    animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
    animation-duration: 5s;
  }

  @keyframes logo-anime--03 {
    0% {
      width: 7rem;
    }

    60% {
      width: 8.5rem;
      transform: rotateZ(90deg);
    }
  }

  .navbar {
    height: 5.5rem;
  }

  .nav-mobile>img {
    width: 95%;
  }

  .section--footer-1 {
    min-height: calc(50vh+25vh);
  }

  .abcd {
    width: 290%;
    transform: translate(-100px, 30px);

  }

  .res-logo-2 {
    width: 4.5%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .footer-txt-line {
    font-size: 10px;
  }

  .disc-div-2>h1 {
    font-size: 2.0rem;
  }

  .disc-div-2>h2 {
    font-size: 1.1rem;
    padding-top: 0.6rem;
  }
}

@media only screen and (max-width: 620px) {
  .extended--div {
    transform: translateX(-6rem) !important;
  }

  .inr--extended--div-2>h1 {
    font-size: 1.5rem;
  }

  .inr--extended--div-2>span {
    font-size: 2rem;
  }

  #extended--total-amount {
    font-size: 2rem;
    padding-right: 20px;

  }

  .payment--btn {
    font-size: 1.1rem;
    padding: 0.6rem 1.6rem 2.2rem 1.6rem;
    transform: translate(10.9rem, -29rem);
  }

  .back-to-top--btn {
    bottom: 4%;
    right: 5.5%;

    padding: 0.4;
  }

  .back--gif {
    width: 55px !important;
    height: 55px !important;
  }

  .cart--section {
    height: 5rem;
  }

  .cart-div {
    width: 60%;
  }

  .cart-div>h1 {
    font-size: 24px;
    padding-right: 4px;
  }

  .cart-div>span {
    font-size: 24px;
    padding-left: 0;
  }

  #up--btn {
    position: absolute;
    width: 2.4em !important;
    border-left: 2.7rem solid transparent;
    border-right: 2.7rem solid transparent;
    border-bottom: 3.71rem solid rgba(255, 166, 0, 0.67);
    transform: translateY(-3.7rem);

  }

  .lord-icons {
    transform: translate(0, -20px);
    width: 45px !important;
    height: 45px !important;
  }

  .lord-icons-2 {
    width: 40px !important;
  }

  .lord-icons-3 {
    width: 40px !important;
  }
}

@media only screen and (max-width: 600px) {

  .search-result {
    width: 100%;
    grid-template: auto / repeat(auto-fit, minmax(180px, 1fr));
    transform: translateX(0%);
    padding: 0;
    grid-gap: 20px;
  }

  .item {
    width: 90%;
    border-radius: 8px;
    background-color: rgba(37, 37, 37, 0.27);
    background-color: rgba(0, 0, 0, 0.364);
    padding-top: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding-bottom: 0.5rem;
  }

  .item img {
    width: 8rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 50%;
  }

  .search-result .title {
    color: rgba(245, 245, 245, 0.691);
    margin: 0px 10px 0 0;
    font-size: 1.1rem;
    padding: 0 1rem 0.5rem 1rem;
    font-weight: 600;
    letter-spacing: 0.12rem;
  }

  .item-data {
    color: rgba(245, 245, 245, 0.544);
    display: block;
    font-size: 0.8rem;
    letter-spacing: 0.25rem;
    line-height: 2rem;
    font-weight: 300;
  }

  .view-btn {

    padding: 10px 0;

    font-size: 1.1rem;
    margin-top: 0px;
    border-radius: 4px;
  }

  .login--req {
    width: 80%;
    padding: 2.3rem 2.8rem 2.3rem 2.8rem;
  }

  .login--req>h1 {
    font-size: 2.2rem;
    padding-bottom: 2rem;
  }

  .btn--login-2 {
    font-size: 1rem;
    padding: 0.8rem 1rem;
    border: 1px solid;
  }

  .texts {
    padding-left: 2em;
    padding-right: 2em;
  }

  .restaurent--name {
    font-size: 1.7em;
  }

  .navbar {
    height: 5rem;
  }

  .nav-mobile>img {
    width: 100%;
  }

  .reserve>h1 {
    font-size: 5rem;
  }

  .section--footer-1 {
    min-height: calc(50vh+20vh);

  }

  .footer-2-div--2>h1 {
    font-size: 1.1rem;
    padding: 0;
  }

  .logo-name-div {
    width: 250px;
    transform: translateX(00px) !important;

  }

  .footer-txt-3 {
    width: 250px;
  }

  .next--links {
    transform: translateX(-20px) !important;
  }

  .abcd {
    width: 200%;
    transform: translate(-100px, 30px);

  }

  .abcd2 {
    width: 170%;
  }

  .abcd>h1 {
    font-size: 15px;
  }

  .abcd>h2 {
    font-size: 11px;
  }

  .abcd2>h1 {
    font-size: 15px;
  }

  .abcd2>h2 {
    font-size: 14px;
  }
}

@media only screen and (max-width: 580px) {
  .texts {
    padding-left: 0em;
    padding-right: 0em;
  }

  .banner--text1 {
    width: 90% !important;
  }

  .search-result {
    grid-gap: 10px;
  }

  .container.initial .brand {
    font-size: 5rem !important;
    margin-bottom: 2rem;
  }

  .brand {
    font-size: 5rem !important;
    margin-bottom: 2rem;
  }

  ::placeholder {
    font-size: 1.4rem !important;
  }

  :-ms-input-placeholder {
    font-size: 1.4rem !important;
  }

  ::-ms-input-placeholder {
    font-size: 1.4rem !important;
  }

  .container.initial form input {
    padding: 10px;
    font-size: 1.4rem !important;
  }

  input {
    padding: 10px;
    font-size: 1.4rem !important;
  }



  .deliver--text {
    width: 70%;
    padding: 2rem 3rem;
  }

  .deliver--text>h1 {
    display: inline;
    font-size: 2rem;
  }

  .deliver--text>h2 {
    font-size: 1.1rem;
    transform: translate(5rem, -2rem);
  }

  .deliver--text>h3 {
    font-size: 1.1rem;
    transform: translate(8rem, -2.4rem);
  }

  .deliver--text>button {
    margin-top: 0.2rem;
    font-size: 1.15rem;
    transform: translateY(-15px);

  }

  .deliver--text>lord-icon {
    width: 100px !important;
    height: 100px !important;
  }

  .max--limit {
    width: 90%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1.7rem;
    padding-top: 1.7rem;

  }

  .max--limit>h1 {
    font-size: 1.7rem;
  }

  .max--limit>h2 {
    font-size: 1rem;
    padding-top: 3px;

  }

  .max--limit>h3 {
    font-size: 0.8rem;
  }

  .ok--btn {
    font-size: 0.7rem;
    margin-top: 1.6rem;
    margin-bottom: 0.5rem;
    padding: 0.45rem 1.8rem;
  }

  #nembers {
    font-size: 0.7rem;
  }

  .inr--extended--div-2 {
    transform: translate(10.1rem, -30rem);
  }

  .extended--div {
    transform: translateX(-5.5rem) !important;
  }

  .extended--div-2 {
    transform: translateX(-4rem) !important;
  }

  .inr--extended--div-2>h1 {
    font-size: 1.5rem;
  }

  .inr--extended--div-2>span {
    font-size: 2rem;
  }

  .inner--extended--div-2 {
    font-size: 0.6rem !important;
    padding-top: 1.134rem;
  }

  #extended--total-amount {
    font-size: 2rem;
    padding-right: 20px;

  }

  .payment--btn {
    font-size: 1.1rem;
    padding: 0.6rem 1.5rem 2rem 1.5rem;
    transform: translate(9.68rem, -29rem);
  }

  .inlogs {

    flex-direction: column;
    transform: translateX(-50px);
  }

  #avatar-name {
    font-size: 1rem;
  }

  .nav-mobile {
    transform: translateX(80%);
  }

  .nav-mobile>img {
    width: 110%;
  }
}


@media only screen and (max-width: 550px) {
  .search-result {
    width: 100%;
    grid-template: auto / repeat(auto-fit, minmax(180px, 1fr));
    transform: translateX(0%);
    padding: 0;
    grid-gap: 20px;
  }

  .item {
    width: 85%;
    border-radius: 8px;
    background-color: rgba(37, 37, 37, 0.27);
    background-color: rgba(0, 0, 0, 0.364);
    padding-top: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding-bottom: 0.5rem;
  }

  .item img {
    width: 8rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 50%;
  }

  .search-result .title {
    color: rgba(245, 245, 245, 0.691);
    margin: 0px 10px 0 0;
    font-size: 1.1rem;
    padding: 0 1rem 0.5rem 1rem;
    font-weight: 600;
    letter-spacing: 0.12rem;
  }

  .item-data {
    color: rgba(245, 245, 245, 0.544);
    display: block;
    font-size: 0.8rem;
    letter-spacing: 0.25rem;
    line-height: 2rem;
    font-weight: 300;
  }

  .view-btn {

    padding: 10px 0;

    font-size: 1.1rem;
    margin-top: 0px;
    border-radius: 4px;
  }

  .login--successed--text {
    padding: 1.6rem 4rem;
    border-radius: 2.8rem;
  }

  .login--successed--text>h1 {
    font-size: 2.2rem;
  }

  .login--successed--text>button {
    font-size: 1.2rem;
    margin-top: 1.7rem;
    padding: 0.6rem 2.1rem 0.6rem 2.1rem;

  }

  .login--sux {
    width: 80px !important;
    height: 80px !important;
  }

  .login--failed--text {
    padding: 1.6rem 6rem;
    border-radius: 2.5rem;
  }

  .login--failed--text>h1 {
    font-size: 2rem;
  }

  .login--failed--text>button {
    font-size: 1rem;
    margin-top: 1.7rem;
    padding: 0.6rem 2.1rem 0.6rem 2.1rem;

  }

  .login--fels {
    width: 75px !important;
    height: 75px !important;
  }

  .registeration--successed--text {
    padding: 1.3rem 3.3rem;
    border-radius: 2.2rem;
  }

  .registeration--successed--text>h1 {
    font-size: 2rem;
  }

  .registeration--successed--text>button {
    font-size: 1.2rem;
    margin-top: 1.7rem;
    padding: 0.6rem 2.1rem 0.6rem 2.1rem;

  }

  .regis--sux {
    width: 80px !important;
    height: 80px !important;
  }

  .registeration--failed--text {
    padding: 1.6rem 3.7rem;
    border-radius: 2.3rem;
  }

  .registeration--failed--text>h1 {
    font-size: 2.1rem;
  }

  .registeration--failed--text>button {
    font-size: 1.2rem;
    margin-top: 1.7rem;
    padding: 0.6rem 2.1rem 0.6rem 2.1rem;

  }

  .regis--fels {
    width: 80px !important;
    height: 80px !important;
  }

  .closes {
    top: -10.1%;
    right: -55%;
    font-size: 5.4rem;
  }

  .forms-section {
    margin-left: -8%;
    margin-top: 13.5%;
  }

  .form {
    min-width: 240px;
  }

  .switcher {
    font-size: 18px;
  }

  .ch-fn {
    font-size: 0.8rem !important;
    padding-left: 10px;
  }

  #login-mail {
    height: 1.6rem;
    font-size: 0.8rem;

  }

  #login-password {
    height: 1.6rem;
    font-size: 0.8rem;

  }

  #name {
    height: 1.6rem;
    font-size: 0.8rem;

  }

  #mail {
    height: 1.6rem;
    font-size: 0.8rem;

  }

  #password {
    height: 1.6rem;
    font-size: 0.8rem;

  }

  #address {
    height: 1.6rem;
    font-size: 0.8rem;

  }

  #phone {
    height: 1.6rem;
    font-size: 0.8rem;

  }

  .form [type="submit"] {

    min-width: 0;
    line-height: 0;
    padding: 1.1rem 1.2rem;
    font-size: 1rem !important;

  }

  .namber {
    padding: 0 0.5rem !important;
    font-size: 2.8rem !important;
  }
}

@media only screen and (max-width: 535px) {
  .login--req {
    width: 80%;
    padding: 2.3rem 2.3rem 2.3rem 2.3rem;
  }

  .login--req>h1 {
    font-size: 2rem;
    padding-bottom: 2rem;
  }

  .btn--login-2 {
    font-size: 1rem;
    padding: 0.8rem 1rem;
  }
}

@media only screen and (max-width: 530px) {


  .payment--btn {
    font-size: 0.8rem;
    padding: 0.6rem 1.2rem 0.5rem 1.2rem;
    transform: translate(8.76rem, -23rem);
  }

  .lord-icons-4 {
    width: 22px !important;
    height: 22px !important;
    padding-right: 6px !important;
    padding-bottom: 4px !important;
  }

  .inr--extended--div-2 {
    transform: translate(9.5rem, -25rem);
  }

  .inr--extended--div-2>lord-icon {
    width: 40px !important;
    height: 40px !important;
  }

  .cart--section--extended>h1 {
    font-size: 4rem;
    padding-top: 2rem;
  }

  .cart--section--extended>div {
    transform: translate(-40px, 25px);
  }

  .extended--div>h1 {
    font-size: 1.1rem;
  }

  .extended--div-2>h1 {
    font-size: 1.2rem;
  }

  .inner--extended--div {
    font-size: 10px !important;
  }

  .extended--div-2 {
    transform: translateX(-30px) !important;
  }

  .extended--div {
    transform: translateX(-4rem) !important;
  }

  .inner--extended--div-2 {
    padding-top: 1.28rem;

  }

  .inner--extended--div-2>h2 {
    font-size: 12px !important;
    transform: translateX(-10px) !important;
  }

  .inner--extended--div>span {
    font-size: 12px !important;
  }

  .cart--section {
    height: 4rem;
  }

  .cart-div {
    width: 60%;
  }

  .cart-div>h1 {
    font-size: 18px;
    padding-right: 4px;
  }

  .cart-div>span {
    font-size: 18px;
    padding-left: 0;
  }

  #up--btn {
    position: absolute;
    width: 2em !important;
    border-left: 2.7rem solid transparent;
    border-right: 2.7rem solid transparent;
    border-bottom: 3.2rem solid rgba(255, 166, 0, 0.67);
    transform: translateY(-3.1861rem);

  }

  .lord-icons {
    transform: translate(0, -25px);
    width: 35px !important;
    height: 35px !important;
  }

  .lord-icons-2 {
    width: 35px !important;
  }

  .lord-icons-3 {
    width: 35px !important;
  }

  .logo {
    width: 6.5rem;
    animation-name: logo-anime--04;
    animation-delay: 8s;
    animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
    animation-duration: 5s;
  }

  @keyframes logo-anime--04 {
    0% {
      width: 6.5rem;
    }

    60% {
      width: 7.5rem;
      transform: rotateZ(90deg);
    }
  }

  .nav-mobile>img {
    width: 120%;
  }

  .abcd {
    width: 200%;
    transform: translate(-100px, 30px);

  }

  .abcd2 {
    width: 170%;
  }

  .abcd>h1 {
    font-size: 12px;
  }

  .abcd>h2 {
    font-size: 8px;
  }

  .abcd2>h1 {
    font-size: 12px;
  }

  .abcd2>h2 {
    font-size: 10px;
  }

}

@media only screen and (max-width: 524px) {
  .texts {
    padding-left: 0em;
    padding-right: 0em;
  }

  .banner--text1 {
    width: 90% !important;
  }

  .search-result {
    grid-gap: 10px;
  }

  .container.initial .brand {
    font-size: 4rem !important;
    margin-bottom: 2rem;
    padding-top: 2rem;
  }

  .brand {
    font-size: 4rem !important;
    margin-bottom: 2rem;
    padding-top: 2rem;
  }

  ::placeholder {
    font-size: 1.1rem !important;
  }

  :-ms-input-placeholder {
    font-size: 1.1rem !important;
  }

  ::-ms-input-placeholder {
    font-size: 1.1rem !important;
  }

  .container.initial form input {
    padding: 3px;
    font-size: 1.1rem !important;
  }

  input {
    padding: 3px;
    font-size: 1.1rem !important;
  }





  .restaurent--name {
    font-size: 1.4em;
  }

  .deliver--text {
    width: 70%;
    padding: 1.7rem 2.7rem;
  }

  .deliver--text>h1 {
    display: inline;
    font-size: 1.8rem;
  }

  .deliver--text>h2 {
    font-size: 1rem;
    transform: translate(3rem, -1.8rem);
  }

  .deliver--text>h3 {
    font-size: 1rem;
    transform: translate(5rem, -2.2rem);
  }

  .deliver--text>button {
    margin-top: 0.2rem;
    font-size: 1.05rem;
    transform: translateY(-15px);

  }

  .deliver--text>lord-icon {
    width: 80px !important;
    height: 80px !important;
  }
}

@media only screen and (max-width: 500px) {
  .closes {
    top: -8.1%;
    right: -55%;
    font-size: 5rem;
  }

  .forms-section {
    margin-left: -10%;
    margin-top: 13.5%;
  }

  .form {
    min-width: 240px;
  }

  .switcher {
    font-size: 18px;
  }

  .ch-fn {
    font-size: 0.8rem !important;
    padding-left: 10px;
  }

  #login-mail {
    height: 1.6rem;
  }

  #login-password {
    height: 1.6rem;
  }

  #name {
    height: 1.6rem;
  }

  #mail {
    height: 1.6rem;
  }

  #password {
    height: 1.6rem;
  }

  #address {
    height: 1.6rem;
  }

  #phone {
    height: 1.6rem;
  }

  .form [type="submit"] {

    min-width: 0;
    line-height: 0;
    padding: 1.1rem 1.2rem;
    font-size: 1rem !important;

  }

  .login--req {
    width: 80%;
    padding: 2.3rem 2rem 1.7rem 2rem;
  }

  .login--req>h1 {
    font-size: 1.8rem;
    padding-bottom: 1.8rem;
  }

  .btn--login-2 {
    font-size: 0.8rem;
    padding: 0.7rem 1rem;
  }

  .close--btn {
    top: 1px;
    transform: translate(0, -10px);
    right: 3%;
    font-size: 4rem;
  }

  #preloader {
    width: 100%;
    height: 100%;
  }

  #preloader>img {
    width: 70%;
  }

  .back-to-top--btn {
    bottom: 5%;
    right: 10%;

    padding: 0.4rem !important;
  }

  .back--gif {
    width: 40px !important;
    height: 40px !important;
  }

  .about-us--video {
    z-index: -2;
    display: none;

    width: 100%;
    height: 110%;
    object-fit: cover;
    position: fixed;
  }

  .about-us--video-2 {
    display: block;
    z-index: -1;

    width: 100%;
    height: 110%;
    object-fit: cover;
    position: fixed;
  }

  .logos {

    display: flex;
    align-items: center;
    width: 6rem;

    animation-delay: 6s;
    animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
    animation-duration: 5s;
  }

  @keyframes logo-anime-2 {
    0% {
      width: 4rem;
    }

    60% {
      width: 6rem;
      transform: rotateZ(10deg);
    }
  }

  .logo-name {
    padding-left: 2rem;
    font-size: 2rem;
    font-family: inherit;
  }


  .navbar {

    height: 3.6rem;
  }

  .nav-mobile {
    transform: translateX(150%) !important;
  }

  .nav-mobile>img {
    width: 85%;
  }


  .logo {

    width: 5rem;
    transform: translateX(-70px);
    padding-left: 0rem;
    opacity: 0.7;
    animation-name: logo-anime--05;
    animation-delay: 8s;
    animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
    animation-duration: 5s;
  }

  @keyframes logo-anime--05 {
    0% {
      width: 5rem;
      transform: translateX(-70px);

    }

    60% {
      width: 5.5rem;
      transform: translateX(-70px) rotateZ(90deg);
      ;
    }
  }

  .nav-linkers {
    font-size: 1.7rem;
  }

  .texts {
    padding-left: 0px;
    padding-right: 0px;
  }

  .banner--text1 {
    padding: 0;
    width: 92%;
    margin-top: 60px;
    margin-bottom: 66px;

    border: 4px solid rgba(255, 255, 255, 0.075) !important;
  }

  .welcome--text {
    font-size: 3rem;
    padding-top: 2.7rem;
    padding-bottom: 0.1rem;
  }

  .restaurent--name {
    font-size: 2.9rem;
    padding-top: 0.3rem;
  }

  .btn--back-to-home {
    background: none;

    border: none;
    font-family: "Dancing Script", cursive;
    border: 1.5px solid;
    border-radius: 2rem;
    padding: 0.7rem;
    cursor: pointer;

    font-size: 0.8rem;
    padding-left: 1.3rem;
    padding-right: 1.3rem;
    margin-bottom: 2rem;
  }

  .btn--explore {
    font-size: 0.7rem;
    text-align: center;
    padding: 0.45rem 1rem;
    margin: 0;
    margin-top: 2.5rem;

    animation-name: exppp;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-delay: 5s;
    opacity: 0;

  }

  @keyframes exppp {
    0% {
      opacity: 1;
    }

    25% {
      color: rgba(245, 237, 237, 0.89);
      background: #03e9f4;
      color: #000000;
      border-radius: 2rem;
      box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
        0 0 100px #03e9f4;
      border: 1.5px solid #03e9f4;
    }

    100% {
      opacity: 1;
    }
  }

  .btn--explore:hover {
    color: rgba(245, 237, 237, 0.89);
    background: #03e9f4;
    color: #000000;
    border-radius: 2rem;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
    border: 1.5px solid #03e9f4;
    padding-left: 1rem;
    padding-right: 1rem;
  }


  .discover--menu {
    padding-bottom: 2rem;

  }

  .discover--menu>h1 {
    font-size: 4rem !important;
    padding-top: 3rem;
  }

  .main {
    padding-left: 0rem;
    padding-right: 0rem;
    padding-top: 0rem;
    padding-bottom: 0rem;
  }

  .wrap {
    margin: 1.5rem;
  }

  .discover--menu-2>h1 {
    font-size: 4rem;
  }

  .reserve>h1 {
    font-size: 4rem;
  }

  .discover--menu-2>img {
    width: 80%;
  }

  .for-table {
    font-size: 4rem !important;
    padding: 3rem 0rem !important;
  }

  .many-more--txt {
    font-size: 3rem !important;
  }

  .disc-div {
    padding: 0 2rem;
  }

  .disc-div-2 {
    padding-bottom: 4rem;
  }

  .disc-div>img {
    width: 70%;
  }


  #orr {
    font-size: 3rem;
    padding: 3rem 0 2.5rem 0;
  }


  .footer-div {
    padding-top: 2rem;
    padding-left: 1rem;
  }

  .footer-txt-3 {
    font-size: 25px;
    width: 200px;
  }

  .footer-txt-3:hover {
    transform: scale(1.2);
  }

  .footer-txt-1 {
    font-size: 1.5rem;
  }

  .footer-txt-2 {
    padding-top: 0.7rem;
    font-size: 1.3rem;

  }

  .footer-txt-line {
    padding-top: 2.4rem;
    padding-bottom: 2.3rem;
  }

  .footer-txt-line-2 {
    padding-bottom: 1rem;
    font-size: 1.5rem;
  }

  .res-logo-2 {
    width: 7.5%;

    padding: 0.7rem 1.3rem;
  }

  .section--footer-1 {
    min-height: calc(45vh+20vh);
    overflow: hidden;
  }

  .section--footer-2 {
    overflow: hidden;
    height: 10vh;
    padding-top: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-2-div {
    padding-left: 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-2-div--2 {
    width: 100%;
    padding-top: 0rem;
    transform: translate(1.3%, -10%) !important;
  }

  .footer-2-div--2>h1 {
    text-align: center;
    font-size: 1.3rem;
  }

  .footer-2-div--2>div {

    transform: translate(19%, -10%) !important;

  }

  .res-logo-3 {
    width: 9%;
    padding: 1rem 1.5rem 0rem 1.5rem;
  }

  .res-logo-3:hover {
    transform: scale(1.2) translateY(-3px);
    opacity: 0.85;
  }

  .abcd {
    display: none;
    width: 220%;
    padding-right: 1rem;
    padding-top: 13rem;
  }

  .abcd>h1 {
    font-size: 2rem;
  }

  .abcd2 {
    display: none;
    width: 180%;
    padding-top: 5rem;
    padding-right: 1rem;
  }

  .abcd2>h1 {
    font-size: 2rem;
  }

  .footer-2-div>h4 {
    display: none;
    font-size: 3rem;
    transform: rotateX(180deg);
  }



}

@media only screen and (max-width: 480px) {
  .search-result {
    width: 100%;
    grid-template: auto / repeat(auto-fit, minmax(180px, 1fr));
    transform: translateX(3.56%);
    padding: 0;
    grid-gap: 20px;
  }

  .item {
    width: 85%;
    border-radius: 8px;
    background-color: rgba(37, 37, 37, 0.27);
    background-color: rgba(0, 0, 0, 0.364);
    padding-top: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding-bottom: 0.5rem;
  }

  .item img {
    width: 9rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 50%;
  }

  .search-result .title {
    color: rgba(245, 245, 245, 0.691);
    margin: 0px 10px 0 0;
    font-size: 1.1rem;
    padding: 0 1rem 0.5rem 1rem;
    font-weight: 600;
    letter-spacing: 0.12rem;
  }

  .item-data {
    color: rgba(245, 245, 245, 0.544);
    display: block;
    font-size: 0.8rem;
    letter-spacing: 0.25rem;
    line-height: 2rem;
    font-weight: 300;
  }

  .view-btn {

    padding: 10px 0;

    font-size: 1.1rem;
    margin-top: 0px;
    border-radius: 4px;
  }

  .login--successed--text {
    padding: 1.5rem 4rem;
    border-radius: 2rem;
  }

  .login--successed--text>h1 {
    font-size: 1.8rem;
  }

  .login--successed--text>button {
    font-size: 1rem;
    margin-top: 1.3rem;
    padding: 0.55rem 1.8rem 0.55rem 1.8rem;

  }

  .login--sux {
    width: 75px !important;
    height: 75px !important;
  }

  .login--failed--text {
    padding: 1rem 5rem 1.5rem 5rem;
    border-radius: 1.8rem;
  }

  .login--failed--text>h1 {
    font-size: 1.5rem;
  }

  .login--failed--text>button {
    font-size: 0.6rem;
    margin-top: 1rem;
    padding: 0.4rem 1.3rem 0.4rem 1.3rem;

  }

  .login--fels {
    width: 75px !important;
    height: 75px !important;
  }

  .registeration--successed--text {
    padding: 1.3rem 2.6rem;
    border-radius: 2rem;
  }

  .registeration--successed--text>h1 {
    font-size: 1.6rem;
  }

  .registeration--successed--text>button {
    font-size: 1rem;
    margin-top: 1.3rem;
    padding: 0.55rem 1.8rem 0.55rem 1.8rem;
  }

  .regis--sux {
    width: 70px !important;
    height: 70px !important;
  }

  .registeration--failed--text {
    padding: 1.2rem 3.4rem;
    border-radius: 1.6rem;
  }

  .registeration--failed--text>h1 {
    font-size: 1.5rem;
  }

  .registeration--failed--text>button {
    font-size: 0.9rem;
    margin-top: 1.1rem;
    padding: 0.55rem 1.8rem 0.55rem 1.8rem;

  }

  .regis--fels {
    width: 75px !important;
    height: 75px !important;
  }

  .closes {
    top: -7.1%;
    right: -45%;
    font-size: 5rem;
  }

  .forms-section {
    margin-left: -4%;
    margin-top: 17.5%;
  }

  .form {
    min-width: 220px !important;
  }

  .form-login {
    padding-right: 15px;
    padding-left: 20px;

  }

  .switcher {
    font-size: 15px;
  }

  .form [type="submit"] {

    min-width: 0;
    line-height: 0;
    padding: 1rem 1.2rem;
    font-size: 0.7rem !important;

  }

  .cart--section--extended>div {
    transform: translate(-20px, 25px);
  }

  .extended--div-2 {
    transform: translateX(-45px) !important;
  }

  .disc-div-2>h2 {
    font-size: 1.2rem;
  }

  .next--links {

    transform: translateX(0px) !important;
  }

  .maps {
    height: 350px !important;

  }
}

@media only screen and (max-width: 460px) {
  .deliver--text {
    width: 70%;
    padding: 1.2rem 2.4rem;
    border-radius: 2.7rem;

  }

  .deliver--text>h1 {
    display: inline;
    font-size: 1.5rem;
  }

  .deliver--text>h2 {
    font-size: 0.7rem;
    transform: translate(3rem, -1.8rem);
  }

  .deliver--text>h3 {
    font-size: 0.7rem;
    transform: translate(5rem, -2.2rem);
  }

  .deliver--text>button {
    margin-top: 0.2rem;
    font-size: 0.9rem;
    padding: 0.6rem 2rem 0.6rem 2rem;

    transform: translateY(-13px);

  }

  .deliver--text>lord-icon {
    width: 80px !important;
    height: 80px !important;
  }
}

@media only screen and (max-width: 450px) {
  .texts {
    padding-left: 0em;
    padding-right: 0em;
  }

  .banner--text1 {
    width: 90% !important;
  }

  .search-result {
    grid-gap: 10px;
  }

  .container.initial .brand {
    font-size: 3.5rem !important;
    margin-bottom: 1rem;
    padding-top: 1rem;
  }

  .brand {
    font-size: 3.5rem !important;
    margin-bottom: 1rem;
    padding-top: 1rem;
  }

  ::placeholder {
    font-size: 0.8rem !important;
  }

  :-ms-input-placeholder {
    font-size: 0.8rem !important;
  }

  ::-ms-input-placeholder {
    font-size: 0.8rem !important;
  }

  .container.initial form input {
    padding: 1px;
    font-size: 0.8rem !important;
  }

  input {
    padding: 1px;
    font-size: 0.8rem !important;
  }

  .container.initial {
    padding-bottom: 0;
  }


  .switcher-signup {
    margin-left: 13%;
  }

  .closes {
    top: -7.1%;
    right: -45%;
    font-size: 5rem;
  }

  .forms-section {
    margin-left: -8%;
    margin-top: 17.5%;
  }

  .form {
    min-width: 220px !important;
  }

  .form-login {
    padding-right: 15px;
    padding-left: 20px;

  }

  .switcher {
    font-size: 15px;
  }

  .form [type="submit"] {

    min-width: 0;
    line-height: 0;
    padding: 1rem 1.2rem;
    font-size: 0.7rem !important;

  }

  .login--req {
    width: 80%;
    padding: 2.3rem 1.5rem 1.7rem 1.5rem;
  }

  .login--req>h1 {
    font-size: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .btn--login-2 {
    font-size: 0.6rem;
    padding: 0.6rem 1rem;
  }

  .max--limit {
    width: 90%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1.7rem;
    padding-top: 1.7rem;

  }

  .max--limit>h1 {
    font-size: 1.5rem;
  }

  .max--limit>h2 {
    font-size: 0.8rem;
    padding-top: 3px;

  }

  .max--limit>h3 {
    font-size: 0.7rem;
  }

  .ok--btn {
    font-size: 0.6rem;
    margin-top: 1.6rem;
    margin-bottom: 0.4rem;
    padding: 0.45rem 1.5rem;
  }

  #nembers {
    font-size: 0.6rem;
  }

  .cart--section--extended>h1 {
    font-size: 3rem;
    padding-top: 3rem;
    padding-bottom: 0rem;
  }


  .inr--extended--div-2 {
    transform: translate(8rem, -25rem);
  }

  .payment--btn {
    font-size: 0.8rem;
    padding: 0.6rem 1.2rem 0.5rem 1.2rem;
    transform: translate(7.6rem, -23rem);
  }

  .section--footer-1 {
    min-height: calc(45vh+20vh);
  }

  .footer-txt-line {
    padding-top: 1.8rem;
    padding-bottom: 1.8rem;
  }

  .res-logo-2 {
    width: 6.6%;

    padding: 0.7rem 1.3rem;
  }

  .footer-2-div--2>div {
    transform: translate(20%, -10%) !important;
  }

  .res-logo-3 {
    width: 8%;
    padding: 1rem 1.5rem 0rem 1.5rem;
  }

  .res-logo-3:hover {
    transform: scale(1.15) translateY(-1px);
    opacity: 0.85;
  }

  .navbar {
    height: 3.8rem;
  }

  .banner--text1 {
    padding: 0;
    width: 92%;
    margin-top: 50px;
    margin-bottom: 56px;
  }

  .welcome--text {
    font-size: 2.4rem;
    padding-top: 2.7rem;
    padding-bottom: 0.1rem;
  }

  .restaurent--name {
    font-size: 2.7rem;
    padding-top: 0.3rem;
  }

  .btn--back-to-home {
    background: none;

    border: none;
    font-family: "Dancing Script", cursive;
    border: 1.5px solid;
    border-radius: 2rem;
    padding: 0.5rem;
    cursor: pointer;

    font-size: 0.65rem;
    padding-left: 1.1rem;
    padding-right: 1.1rem;
    margin-bottom: 2rem;
  }

  .namber {
    padding: 0 0.5rem !important;
    font-size: 2.4rem !important;
  }

  .logo {
    width: 4.5rem;
    transform: translateX(-80px);
    padding-left: 0rem;
    animation-name: logo-anime--06;
    animation-delay: 8s;
    animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
    animation-duration: 5s;
  }

  @keyframes logo-anime--06 {
    0% {
      width: 4.5rem;
      transform: translateX(-80px);

    }

    60% {
      width: 5rem;
      transform: translateX(-70px) rotateZ(90deg);
      ;
    }
  }

  .nav-mobile {
    transform: translateX(150%) !important;
  }

  .nav-mobile>img {
    width: 122%;
  }

  .discover--menu>h1 {
    font-size: 3rem !important;
    padding-bottom: 2rem;
  }


  .map {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .discover--menu-2>h1 {
    font-size: 3rem;
  }

  .reserve>h1 {
    font-size: 3rem;
  }

  .for-table {
    font-size: 3rem !important;
  }

  .many-more--txt {
    font-size: 2rem !important;
  }

  .disc-div-2 {
    padding-left: 0;
    padding-right: 0;
  }

  .disc-div-2>h1 {
    font-size: 1.7rem;
  }

  .disc-div-2>h2 {
    font-size: 1.1rem;
  }


  .footer-txt-3 {
    font-size: 21px;
    width: 180px;
  }

  .res-logo {
    width: 90px !important;
  }

  .footer-txt-3:hover {
    transform: scale(1.1);
  }
}

@media only screen and (max-width: 434px) {

  .search-result {
    width: 100%;
    grid-template: auto / repeat(auto-fit, minmax(180px, 1fr));
    transform: translateX(3.16%);
    padding: 0;
    grid-gap: 20px;
  }

  .item {
    width: 85%;
    border-radius: 8px;
    background-color: rgba(37, 37, 37, 0.27);
    background-color: rgba(0, 0, 0, 0.364);
    padding-top: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding-bottom: 0.5rem;
  }

  .item img {
    width: 9rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 50%;
  }

  .search-result .title {
    color: rgba(245, 245, 245, 0.691);
    margin: 0px 10px 0 0;
    font-size: 1.1rem;
    padding: 0 1rem 0.5rem 1rem;
    font-weight: 600;
    letter-spacing: 0.12rem;
  }

  .item-data {
    color: rgba(245, 245, 245, 0.544);
    display: block;
    font-size: 0.8rem;
    letter-spacing: 0.25rem;
    line-height: 2rem;
    font-weight: 300;
  }

  .view-btn {

    padding: 10px 0;

    font-size: 1.1rem;
    margin-top: 0px;
    border-radius: 4px;
  }

  .closes {
    top: -9.1%;
    right: -45%;
    font-size: 5rem;
  }

  .forms-section {
    margin-left: -4%;
    margin-top: 17.5%;
  }

  .form {
    min-width: 200px !important;
  }

  .form-login {
    padding-right: 10px;
    padding-top: 15px;
    padding-right: 10px;
    padding-bottom: 25px;

  }

  .switcher {
    font-size: 15px;
  }

  .form [type="submit"] {

    min-width: 0;
    line-height: 0;
    padding: 1rem 1.2rem;
    font-size: 0.7rem !important;

  }

  .inr--extended--div-2>lord-icon {
    width: 30px !important;
    height: 30px !important;
  }

  .inr--extended--div-2>h1 {
    font-size: 1.2rem;
  }

  .inr--extended--div-2>span {
    font-size: 1.5rem;
    padding-right: 0;
  }

  #extended--total-amount {
    font-size: 1.7rem;
    padding-right: 15px;
  }

  .payment--btn {
    font-size: 0.8rem;
    padding: 0.6rem 1.2rem 0.5rem 1.2rem;
    transform: translate(7.6rem, -24rem);
  }

  .inner--extended--div-2 {
    padding-top: 1.175rem;
  }

  .inner--extended--div {
    font-size: 0.6rem !important;
    padding-top: 1.2rem;
  }

  .inner--extended--div>h2 {
    font-size: 1em;
  }

  .lord-icons-4 {
    width: 18px !important;
    height: 18px !important;
    padding-right: 6px !important;
    padding-bottom: 4px !important;
  }
}

@media only screen and (max-width: 424px) {

  .cart-div {
    width: 60%;
  }

  .cart-div>h1 {
    font-size: 15px;
    padding-right: 4px;
  }

  .cart-div>span {
    font-size: 15px;
    padding-left: 0;
  }

  #up--btn {
    position: absolute;
    width: 2em !important;
    border-left: 2.7rem solid transparent;
    border-right: 2.7rem solid transparent;
    border-bottom: 3.21rem solid rgba(255, 166, 0, 0.67);
    transform: translateY(-3.2rem);

  }

  .lord-icons {
    transform: translate(0, -25px);
    width: 35px !important;
    height: 35px !important;
  }

  .lord-icons-2 {
    width: 28px !important;
  }

  .lord-icons-3 {
    width: 28px !important;
  }

  .section--footer-1 {
    min-height: calc(40vh+20vh);
  }

  .section--footer-2 {
    height: 9vh;
    padding-top: 1.5rem;

  }

  .res-logo-2 {
    width: 6.3%;

    padding: 0.7rem 1.1rem;
  }

  .footer-2-div--2>div {
    transform: translate(18%, -10%) !important;
  }

  .res-logo-3 {
    width: 8%;
    padding: 1rem 1.5rem 0rem 1.5rem;
  }

  .res-logo-3:hover {
    transform: scale(1.15) translateY(-1px);
    opacity: 0.85;
  }

  .nav-mobile {
    transform: translateX(190%) !important;
  }

  .nav-mobile>img {
    width: 122%;
  }
}

@media only screen and (max-width: 414px) {
  .search-result {
    width: 100%;
    grid-template: auto / repeat(auto-fit, minmax(180px, 1fr));
    transform: translateX(3%);
    padding: 0;
    grid-gap: 20px;
  }

  .item {
    width: 85%;
    border-radius: 8px;
    background-color: rgba(37, 37, 37, 0.27);
    background-color: rgba(0, 0, 0, 0.364);
    padding-top: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding-bottom: 0.5rem;
  }

  .item img {
    width: 9rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 50%;
  }

  .search-result .title {
    color: rgba(245, 245, 245, 0.691);
    margin: 0px 10px 0 0;
    font-size: 1.1rem;
    padding: 0 1rem 0.5rem 1rem;
    font-weight: 600;
    letter-spacing: 0.12rem;
  }

  .item-data {
    color: rgba(245, 245, 245, 0.544);
    display: block;
    font-size: 0.8rem;
    letter-spacing: 0.25rem;
    line-height: 2rem;
    font-weight: 300;
  }

  .view-btn {

    padding: 10px 0;

    font-size: 1.1rem;
    margin-top: 0px;
    border-radius: 4px;
  }

  .deliver--text {
    width: 70%;
    padding: 1.1rem 2.4rem;
    border-radius: 2.7rem;

  }

  .deliver--text>h1 {
    display: inline;
    font-size: 1.4rem;
  }

  .deliver--text>h2 {
    font-size: 0.8rem;
    transform: translate(3rem, -1.8rem);
  }

  .deliver--text>h3 {
    font-size: 0.8rem;
    transform: translate(5rem, -2.2rem);
  }

  .deliver--text>button {
    margin-top: 0.2rem;
    font-size: 0.8rem;
    padding: 0.5rem 1.7rem 0.5rem 1.7rem;

    transform: translateY(-13px);

  }

  .deliver--text>lord-icon {
    width: 80px !important;
    height: 80px !important;
    transform: translateY(10px);
  }

  #login-mail {
    height: 1.4rem;
    font-size: 0.6rem;
  }

  #login-password {
    height: 1.4rem;
    font-size: 0.6rem;
  }

  #name {
    height: 1.4rem;
    font-size: 0.6rem;
  }

  #mail {
    height: 1.4rem;
    font-size: 0.6rem;
  }

  #password {
    height: 1.4rem;
    font-size: 0.6rem;
  }

  #address {
    height: 1.4rem;
    font-size: 0.6rem;
  }

  #phone {
    height: 1.4rem;
    font-size: 0.6rem;
  }

  .closes {
    top: -9.1%;
    right: -50%;
    font-size: 5rem;
  }

  .forms-section {
    margin-left: -12%;
    margin-top: 19.5%;
  }

  .form {
    min-width: 200px !important;
  }

  .form-login {
    padding-right: 10px;
    padding-top: 15px;
    padding-right: 10px;
    padding-bottom: 25px;

  }

  .switcher {
    font-size: 15px;
  }

  .form [type="submit"] {

    min-width: 0;
    line-height: 0;
    padding: 1rem 1.2rem;
    font-size: 0.7rem !important;

  }

  #extended--total-amount {
    font-size: 1.55rem;
    padding-right: 12px;
  }

  .payment--btn {
    font-size: 0.8rem;
    padding: 0.6rem 1.1rem 0.5rem 1.1rem;
    transform: translate(6.96rem, -23rem);
  }

  .extended--div {
    transform: translateX(-3.5rem) !important;
  }

  .extended--div-2 {
    transform: translate(-33px, -1.8px) !important;
  }

  .inner--extended--div-2 {
    padding-top: 1.195rem;
  }

  .inr--extended--div-2 {
    transform: translate(6.55rem, -25rem);
  }
}

@media only screen and (max-width: 404px) {
  .search-result {
    width: 100%;
    grid-template: auto / repeat(auto-fit, minmax(180px, 1fr));
    transform: translateX(2.6%);
    padding: 0;
    grid-gap: 20px;
  }

  .item {
    width: 85%;
    border-radius: 8px;
    background-color: rgba(37, 37, 37, 0.27);
    background-color: rgba(0, 0, 0, 0.364);
    padding-top: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding-bottom: 0.5rem;
  }

  .item img {
    width: 9rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 50%;
  }

  .search-result .title {
    color: rgba(245, 245, 245, 0.691);
    margin: 0px 10px 0 0;
    font-size: 1.1rem;
    padding: 0 1rem 0.5rem 1rem;
    font-weight: 600;
    letter-spacing: 0.12rem;
  }

  .item-data {
    color: rgba(245, 245, 245, 0.544);
    display: block;
    font-size: 0.8rem;
    letter-spacing: 0.25rem;
    line-height: 2rem;
    font-weight: 300;
  }

  .view-btn {

    padding: 10px 0;

    font-size: 1.1rem;
    margin-top: 0px;
    border-radius: 4px;
  }


  .closes {
    top: -9.1%;
    right: -50%;
    font-size: 5rem;
  }

  .forms-section {
    margin-left: -10%;
    margin-top: 18.5%;
  }

  .form {
    min-width: 200px !important;
  }

  .form-login {
    padding-right: 10px;
    padding-top: 15px;
    padding-right: 10px;
    padding-bottom: 25px;

  }

  .switcher {
    font-size: 15px;
  }

  .form [type="submit"] {

    min-width: 0;
    line-height: 0;
    padding: 1rem 1.2rem;
    font-size: 0.7rem !important;

  }

  .max--limit {
    width: 90%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1.3rem;
    padding-top: 1.7rem;

  }

  .max--limit>h1 {
    font-size: 1.4rem;
  }

  .max--limit>h2 {
    font-size: 0.8rem;
    padding-top: 3px;

  }

  .max--limit>h3 {
    font-size: 0.7rem;
  }

  .ok--btn {
    font-size: 0.6rem;
    margin-top: 1.4rem;
    margin-bottom: 0.4rem;
    padding: 0.45rem 1.5rem;
  }

  #nembers {
    font-size: 0.6rem;
  }

  .navbar {
    height: 3.4rem;
  }

  .logo {
    width: 4.5rem;
    transform: translateX(-75px);
    padding-left: 0rem;
    animation-name: logo-anime--07;
    animation-delay: 8s;
    animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
    animation-duration: 5s;
  }

  @keyframes logo-anime--07 {
    0% {
      width: 4.5rem;
      transform: translateX(-75px);

    }

    60% {
      width: 5rem;
      transform: translateX(-65px) rotateZ(90deg);
      ;
    }
  }

  .nav-mobile {
    transform: translateX(230%) !important;
  }

  .nav-mobile>img {
    width: 125%;
  }

  .disc-div-2>h1 {
    font-size: 1.6rem !important;
  }

  .disc-div-2>h2 {
    font-size: 1rem !important;
  }

  .disc-div>img {
    width: 72% !important;
  }

  .footer-txt-line {
    font-size: 7px;
  }

  .next--links>h1 {
    font-size: 1.2rem;
  }

  .next--links>h2 {
    font-size: 1rem;
    width: 130px !important;
  }

  .banner--text1 {
    padding: 0;
    width: 92%;
    margin-top: 50px;
    margin-bottom: 56px;
  }

  .welcome--text {
    font-size: 2.1rem;
    padding-top: 2.7rem;
    padding-bottom: 0.1rem;
  }

  .restaurent--name {
    font-size: 2.3rem;
    padding-top: 0.3rem;
  }

  .btn--back-to-home {
    background: none;

    border: none;
    font-family: "Dancing Script", cursive;
    border: 1px solid;
    border-radius: 2rem;
    padding: 0.5rem;
    cursor: pointer;

    font-size: 0.6rem;
    padding-left: 0.9rem;
    padding-right: 0.9rem;
    margin-bottom: 2rem;
  }

  .btn--explore {
    font-size: 0.55rem;
    text-align: center;
    padding: 0.4rem 1rem;
    margin: 0;
    margin-top: 2.5rem;


  }

  .namber {
    font-size: 2.25rem !important;
  }

  .map {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .section--footer-1 {
    min-height: calc(35vh+15vh);
  }

  .section--footer-2 {
    height: 9vh;
    padding-top: 1.5rem;

  }

  .res-logo-2 {
    width: 6.3%;

    padding: 0.7rem 1.1rem;
  }

  .footer-2-div--2>div {
    transform: translate(17.5%, -10%) !important;
  }

  .res-logo-3 {
    width: 8%;
    padding: 1rem 1.5rem 0rem 1.5rem;
  }

  .res-logo-3:hover {
    transform: scale(1.15) translateY(-1px);
    opacity: 0.85;
  }

  .footer-txt-line {
    padding: 1.8rem 0 !important;
  }

  .footer-div {
    padding-top: 2rem;
    padding-left: 2rem;
  }
}

@media only screen and (max-width: 390px) {

  .container.initial .brand {
    font-size: 3rem !important;
    margin-bottom: 1rem;
    padding-top: 1rem;
  }

  .brand {
    font-size: 3rem !important;
    margin-bottom: 1rem;
    padding-top: 1rem;
  }

  ::placeholder {
    font-size: 0.8rem !important;
  }

  :-ms-input-placeholder {
    font-size: 0.8rem !important;
  }

  ::-ms-input-placeholder {
    font-size: 0.8rem !important;
  }

  .container.initial form input {
    padding: 1px;
    font-size: 0.8rem !important;
  }

  input {
    padding: 1px;
    font-size: 0.8rem !important;
  }

  .search-result {
    width: 100%;
    grid-template: auto / repeat(auto-fit, minmax(180px, 1fr));
    transform: translateX(2.3%);
    padding: 0;
    grid-gap: 20px;
  }

  .item {
    width: 85%;
    border-radius: 8px;
    background-color: rgba(37, 37, 37, 0.27);
    background-color: rgba(0, 0, 0, 0.364);
    padding-top: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding-bottom: 0.5rem;
  }

  .item img {
    width: 9rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 50%;
  }

  .search-result .title {
    color: rgba(245, 245, 245, 0.691);
    margin: 0px 10px 0 0;
    font-size: 1.1rem;
    padding: 0 1rem 0.5rem 1rem;
    font-weight: 600;
    letter-spacing: 0.12rem;
  }

  .item-data {
    color: rgba(245, 245, 245, 0.544);
    display: block;
    font-size: 0.8rem;
    letter-spacing: 0.25rem;
    line-height: 2rem;
    font-weight: 300;
  }

  .view-btn {

    padding: 10px 0;

    font-size: 1.1rem;
    margin-top: 0px;
    border-radius: 4px;
  }

  .login--successed--text {
    padding: 1rem 3.5rem;
    border-radius: 1.7rem;
  }

  .login--successed--text>h1 {
    font-size: 1.2rem;
  }

  .login--successed--text>button {
    font-size: 0.7rem;
    margin-top: 1.1rem;
    padding: 0.45rem 1.3rem 0.45rem 1.3rem;

  }

  .login--sux {
    width: 60px !important;
    height: 60px !important;
  }

  .login--failed--text {
    padding: 1rem 4.5rem 1.5rem 4.5rem;
    border-radius: 1.4rem;
  }

  .login--failed--text>h1 {
    font-size: 1.1rem;
  }

  .login--failed--text>button {
    font-size: 0.6rem;
    margin-top: 1rem;
    padding: 0.3rem 1rem 0.3rem 1rem;

  }

  .login--fels {
    width: 70px !important;
    height: 70px !important;
  }

  .registeration--successed--text {
    padding: 1rem 2.2rem;
    border-radius: 1.6rem;
  }

  .registeration--successed--text>h1 {
    font-size: 1.2rem;
  }

  .registeration--successed--text>button {
    font-size: 0.7rem;
    margin-top: 1.1rem;
    padding: 0.45rem 1.3rem 0.45rem 1.3rem;
  }

  .regis--sux {
    width: 60px !important;
    height: 60px !important;
  }

  .registeration--failed--text {
    padding: 1rem 3.5rem;
    border-radius: 1.7rem;
  }

  .registeration--failed--text>h1 {
    font-size: 1.2rem;
  }

  .registeration--failed--text>button {
    font-size: 0.7rem;
    margin-top: 1.1rem;
    padding: 0.45rem 1.3rem 0.45rem 1.3rem;

  }

  .regis--fels {
    width: 60px !important;
    height: 60px !important;
  }

  .deliver--text {
    width: 70%;
    padding: 1rem 2.2rem;
    border-radius: 2.3rem;

  }

  .deliver--text>h1 {
    display: inline;
    font-size: 1.3rem;
  }

  .deliver--text>h2 {
    font-size: 0.7rem;
    transform: translate(3rem, -1.8rem);
  }

  .deliver--text>h3 {
    font-size: 0.7rem;
    transform: translate(5rem, -2.2rem);
  }

  .deliver--text>button {
    margin-top: 0.2rem;
    font-size: 0.8rem;
    padding: 0.5rem 1.7rem 0.5rem 1.7rem;

    transform: translateY(-13px);

  }

  .deliver--text>lord-icon {
    width: 80px !important;
    height: 80px !important;
    transform: translateY(10px);
  }

  .closes {
    top: -9.1%;
    right: -50%;
    font-size: 5rem;
  }

  .forms-section {
    margin-left: -15%;
    margin-top: 18.5%;
  }

  .form {
    min-width: 200px !important;
  }

  .form-login {
    padding-right: 10px;
    padding-top: 15px;
    padding-right: 10px;
    padding-bottom: 25px;

  }

  .switcher {
    font-size: 15px;
  }

  .form [type="submit"] {

    min-width: 0;
    line-height: 0;
    padding: 1rem 1.2rem;
    font-size: 0.7rem !important;

  }

  .extended--div>h1 {
    font-size: 1rem;
  }

  .extended--div-2>h1 {
    font-size: 1.1rem;
  }

  .extended--div-2 {
    transform: translate(-30px, -1px) !important;
  }

  .extended--div {
    transform: translateX(-2.8rem) !important;
  }

  .inr--extended--div-2 {
    transform: translate(7rem, -25rem);
  }

  .payment--btn {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem 0.4rem 0.8rem;
    transform: translate(7.05rem, -23rem);
  }

  .lord-icons-4 {
    width: 18px !important;
    height: 18px !important;
  }

  .cart-div {
    width: 60%;
  }

  .cart-div>h1 {
    font-size: 15px;
    padding-right: 4px;
  }

  .cart-div>span {
    font-size: 15px;
    padding-left: 0;
  }

  #up--btn {
    position: absolute;
    width: 1.9em !important;
    border-left: 2.7rem solid transparent;
    border-right: 2.7rem solid transparent;
    border-bottom: 3.21rem solid rgba(255, 166, 0, 0.67);
    transform: translateY(-3.2rem);

  }

  .lord-icons {
    transform: translate(0, -25px);
    width: 35px !important;
    height: 35px !important;
  }

  .lord-icons-2 {
    width: 28px !important;
  }

  .lord-icons-3 {
    width: 28px !important;
  }

  .footer-2-div--2>div {
    transform: translate(15.5%, -10%) !important;
  }

  .footer-txt-3 {
    font-size: 18px;
    width: 150px;
  }

  .res-logo {
    width: 70px !important;
  }

  .nav-mobile {
    transform: translateX(250%) !important;
  }

  .nav-mobile>img {
    width: 126%;
  }
}

@media only screen and (max-width: 372px) {
  .deliver--text {
    width: 70%;
    padding: 1rem 2rem;
    border-radius: 2.2rem;

  }

  .deliver--text>h1 {
    display: inline;
    font-size: 1.2rem;
  }

  .deliver--text>h2 {
    font-size: 0.6rem;
    transform: translate(3rem, -1.3rem);
  }

  .deliver--text>h3 {
    font-size: 0.6rem;
    transform: translate(5rem, -1.7rem);
  }

  .deliver--text>button {
    margin-top: 0.2rem;
    font-size: 0.65rem;
    padding: 0.4rem 1.5rem 0.4rem 1.5rem;

    transform: translateY(-10px);

  }

  .deliver--text>lord-icon {
    width: 60px !important;
    height: 60px !important;
    transform: translateY(10px);
  }

  .closes {
    top: -7.5%;
    right: -44%;
    font-size: 4rem;
  }

  .forms-section {
    margin-left: -10%;
    margin-top: 18.5%;
  }

  .form {
    min-width: 180px !important;
  }

  .form-login {
    padding-right: 10px;
    padding-top: 15px;
    padding-right: 10px;
    padding-bottom: 25px;

  }

  .switcher {
    font-size: 15px;
  }

  .form [type="submit"] {

    min-width: 0;
    line-height: 0;
    padding: 1rem 1.2rem;
    font-size: 0.7rem !important;

  }

  .login--req {
    width: 80%;
    padding: 1.7rem 1.5rem 1.4rem 1.5rem;
  }

  .login--req>h1 {
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
  }

  .btn--login-2 {
    font-size: 0.45rem;
    padding: 0.4rem 0.8rem;
  }

  .max--limit {
    width: 90%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1.3rem;
    padding-top: 1.7rem;

  }

  .max--limit>h1 {
    font-size: 1.2rem;
  }

  .max--limit>h2 {
    font-size: 0.7rem;
    padding-top: 3px;

  }

  .max--limit>h3 {
    font-size: 0.6rem;
  }

  .ok--btn {
    font-size: 0.5rem;
    margin-top: 1.2rem;
    margin-bottom: 0.4rem;
    padding: 0.25rem 1.2rem;
  }

  #nembers {
    font-size: 0.5rem;
  }

  .cart--section--extended>h1 {
    font-size: 2.4rem;
    padding-top: 4rem;
  }

  .payment--btn {
    font-size: 0.6rem;
    padding: 0.4rem 0.8rem 0.4rem 0.8rem;
    transform: translate(6.3rem, -23rem);
  }

  .lord-icons-4 {
    width: 14px !important;
    height: 14px !important;
  }

  .extended--div-2 {

    padding-top: 33px;
  }

  .inner--extended--div {

    padding-top: 1.3rem;
  }

  .inner--extended--div-2 {

    padding-top: 1.3rem;
  }

  .inner--extended--div-2>h2 {
    font-size: 10px !important;
  }

  .inner--extended--div>span {
    font-size: 10px !important;
  }

  .extended--div-2>h1 {
    font-size: 0.8rem;
  }

  .extended--div>h1 {
    font-size: 0.72rem;
  }

  .footer-2-div--2>div {
    transform: translate(14.5%, -10%) !important;
  }

  .navbar {
    height: 3rem;
  }

  .nav-mobile {
    transform: translateX(270%) !important;
  }

  .nav-mobile>img {
    width: 135%;
  }

  .namber {
    font-size: 2.05rem !important;
  }

  .logo {
    width: 4rem;
    transform: translateX(-75px);
    padding-left: 0rem;
    animation-name: logo-anime--08;
    animation-delay: 8s;
    animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
    animation-duration: 5s;
  }

  @keyframes logo-anime--08 {
    0% {
      width: 4rem;
      transform: translateX(-75px);

    }

    60% {
      width: 4.5rem;
      transform: translateX(-65px) rotateZ(90deg);
      ;
    }
  }

  .banner--text1 {
    padding: 0;
    width: 92%;
    margin-top: 40px;
    margin-bottom: 46px;
  }

  .welcome--text {
    font-size: 2rem;
    padding-top: 2.4rem;
    padding-bottom: 0.1rem;
  }

  .restaurent--name {
    font-size: 2rem;
    padding-top: 0.3rem;
  }

  .btn--back-to-home {
    background: none;

    border: none;
    font-family: "Dancing Script", cursive;
    border: 1px solid;
    border-radius: 2rem;
    padding: 0.4rem;
    cursor: pointer;

    font-size: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    margin-bottom: 1.6rem;
  }

  .btn--explore {
    font-size: 0.55rem;
    text-align: center;
    padding: 0.4rem 1rem;
    margin: 0;
    margin-top: 2.5rem;



  }

  .maps {
    height: 300px !important;

  }

  .discover--menu>h1 {
    font-size: 4rem;
  }

}

@media only screen and (max-width: 354px) {
  .closes {
    top: -7.5%;
    right: -44%;
    font-size: 4rem;
  }

  .forms-section {
    margin-left: -11%;
    margin-top: 18.5%;
  }

  .form {
    min-width: 170px !important;
  }

  .form-login {
    padding-right: 10px;
    padding-top: 15px;
    padding-right: 10px;
    padding-bottom: 25px;

  }

  .switcher {
    font-size: 15px;
  }

  .form [type="submit"] {

    min-width: 0;
    line-height: 0;
    padding: 1rem 1.2rem;
    font-size: 0.7rem !important;

  }

  .cart-div {
    width: 60%;
  }

  .cart-div>h1 {
    font-size: 12px;
    padding-right: 4px;
  }

  .cart-div>span {
    font-size: 12px;
    padding-left: 0;
  }

  #up--btn {
    position: absolute;
    width: 1.7em !important;
    border-left: 2.3rem solid transparent;
    border-right: 2.3rem solid transparent;
    border-bottom: 3.21rem solid rgba(255, 166, 0, 0.67);
    transform: translateY(-3.2rem);

  }

  .lord-icons {
    transform: translate(0, -25px);
    width: 35px !important;
    height: 35px !important;
  }

  .lord-icons-2 {
    width: 24px !important;
  }

  .lord-icons-3 {
    width: 24px !important;
  }

  .footer-2-div--2>div {
    transform: translate(13.5%, -10%) !important;
  }

  .res-logo-2 {
    width: 6.3%;

    padding: 0.7rem 0.8rem;
  }

  .navbar {
    height: 2.8rem;
  }

  .namber {
    font-size: 1.8rem !important;
  }

  .nav-mobile {
    transform: translateX(290%) !important;
  }

  .nav-mobile>img {
    width: 135%;
  }

  .logo {
    width: 3.5rem;
    transform: translateX(-75px);
    padding-left: 0rem;
    animation-name: logo-anime--09;
    animation-delay: 8s;
    animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
    animation-duration: 5s;
  }

  @keyframes logo-anime--09 {
    0% {
      width: 3.5rem;
      transform: translateX(-75px);

    }

    60% {
      width: 4rem;
      transform: translateX(-65px) rotateZ(90deg);
      ;
    }
  }

  .banner--text1 {
    padding: 0;
    width: 92%;
    margin-top: 30px;
    margin-bottom: 36px;
  }

  .welcome--text {
    font-size: 1.8rem !important;
    padding-top: 1.8rem;
    padding-bottom: 0.1rem;
  }

  .restaurent--name {
    font-size: 1.8rem;
    padding-top: 0.3rem;
  }

  .btn--back-to-home {
    background: none;

    border: none;
    font-family: "Dancing Script", cursive;
    border: 1px solid;
    border-radius: 2rem;
    padding: 0.35rem;
    cursor: pointer;

    font-size: 0.45rem;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    margin-bottom: 1.3rem;
  }

  .btn--explore {

    font-size: 0.5rem;
    text-align: center;
    padding: 0.3rem 0.8rem;
    margin: 0;
    margin-top: 2.5rem;


  }

  .discover--menu>h1 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .discover--menu-2>h1 {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }

  .reserve>h1 {

    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }

  .for-table {
    padding: 3rem 1rem !important;
  }
}

@media only screen and (max-width: 342px) {

  .container.initial .brand {
    font-size: 2.5rem !important;
    margin-bottom: 1rem;
    padding-top: 1rem;
  }

  .brand {
    font-size: 2.5rem !important;
    margin-bottom: 1rem;
    padding-top: 1rem;
  }

  ::placeholder {
    font-size: 0.6rem !important;
  }

  :-ms-input-placeholder {
    font-size: 0.6rem !important;
  }

  ::-ms-input-placeholder {
    font-size: 0.6rem !important;
  }

  .container.initial form input {
    padding: 0px;
    font-size: 0.6rem !important;
  }

  input {
    padding: 0px;
    font-size: 0.6rem !important;
  }

  .search-result {
    width: 100%;
    grid-template: auto / repeat(auto-fit, minmax(180px, 1fr));
    transform: translateX(2.3%);
    padding: 0;
    grid-gap: 20px;
  }

  .item {
    width: 85%;
    border-radius: 8px;
    background-color: rgba(37, 37, 37, 0.27);
    background-color: rgba(0, 0, 0, 0.364);
    padding-top: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding-bottom: 0.5rem;
  }

  .item img {
    width: 9rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 50%;
  }

  .search-result .title {
    color: rgba(245, 245, 245, 0.691);
    margin: 0px 10px 0 0;
    font-size: 1.1rem;
    padding: 0 1rem 0.5rem 1rem;
    font-weight: 600;
    letter-spacing: 0.12rem;
  }

  .item-data {
    color: rgba(245, 245, 245, 0.544);
    display: block;
    font-size: 0.8rem;
    letter-spacing: 0.25rem;
    line-height: 2rem;
    font-weight: 300;
  }

  .view-btn {

    padding: 10px 0;

    font-size: 1.1rem;
    margin-top: 0px;
    border-radius: 4px;
  }


  .form {
    min-width: 170px !important;
  }

  .extended--div {
    transform: translateX(-2rem) !important;
  }

  .inr--extended--div-2 {
    transform: translate(5.9rem, -25rem);
  }

  .payment--btn {
    font-size: 0.6rem;
    padding: 0.4rem 0.8rem 0.4rem 0.8rem;
    transform: translate(5.75rem, -23rem);
  }

  .footer-2-div--2>div {
    transform: translate(12.5%, -10%) !important;
  }

  .nav-mobile {
    transform: translateX(340%) !important;
  }

  .nav-mobile>img {
    width: 155%;
  }
}

@media only screen and (max-width: 333px) {
  .deliver--text {
    width: 70%;
    padding: 1rem 2rem;
    border-radius: 2.2rem;

  }

  .deliver--text>h1 {
    display: inline;
    font-size: 1rem;
  }

  .deliver--text>h2 {
    font-size: 0.55rem;
    transform: translate(3rem, -1.3rem);
  }

  .deliver--text>h3 {
    font-size: 0.55rem;
    transform: translate(3.9rem, -1.7rem);
  }

  .deliver--text>button {
    margin-top: 0.2rem;
    font-size: 0.55rem;
    padding: 0.35rem 1.3rem 0.35rem 1.3rem;

    transform: translateY(-8px);

  }

  .deliver--text>lord-icon {
    width: 60px !important;
    height: 60px !important;
    transform: translateY(10px);
  }

  .closes {
    top: -7.5%;
    right: -44%;
    font-size: 4rem;
  }

  .forms-section {
    margin-left: -17%;
    margin-top: 18.5%;
  }

  .form {
    min-width: 160px !important;
  }

  .form-login {
    padding-right: 10px;
    padding-top: 15px;
    padding-right: 10px;
    padding-bottom: 25px;

  }

  .switcher {
    font-size: 15px;
  }

  .form [type="submit"] {

    min-width: 0;
    line-height: 0;
    padding: 1rem 1.2rem;
    font-size: 0.7rem !important;

  }

  .footer-2-div--2>div {
    transform: translate(11.5%, -10%) !important;
  }

  .footer-txt-3 {
    font-size: 15px;
  }
}

@media only screen and (max-width: 324px) {
  .closes {
    top: -7.5%;
    right: -44%;
    font-size: 4rem;
  }

  .forms-section {
    margin-left: -13%;
    margin-top: 18.5%;
  }

  .form {
    min-width: 170px !important;
  }

  .form-login {
    padding-right: 10px;
    padding-top: 15px;
    padding-right: 10px;
    padding-bottom: 25px;

  }

  .switcher {
    font-size: 15px;
  }

  .form [type="submit"] {

    min-width: 0;
    line-height: 0;
    padding: 1rem 1.2rem;
    font-size: 0.7rem !important;

  }

  .max--limit {
    width: 90%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1.3rem;
    padding-top: 1.7rem;

  }

  .max--limit>h1 {
    font-size: 1.1rem;
  }

  .max--limit>h2 {
    font-size: 0.6rem;
    padding-top: 3px;

  }

  .max--limit>h3 {
    font-size: 0.5rem;
  }

  .ok--btn {
    font-size: 0.5rem;
    margin-top: 1.2rem;
    margin-bottom: 0.4rem;
    padding: 0.25rem 1.2rem;
  }

  #nembers {
    font-size: 0.4rem;
  }

  .navbar {
    height: 2.5rem;
  }

  .nav-mobile {
    transform: translateX(390%) !important;
  }

  .nav-mobile>img {
    width: 155%;
  }

  .logo {
    width: 3rem;
    transform: translateX(-75px);
    padding-left: 0rem;
    animation-name: logo-anime--10;
    animation-delay: 8s;
    animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
    animation-duration: 5s;
  }

  @keyframes logo-anime--10 {
    0% {
      width: 3rem;
      transform: translateX(-75px);

    }

    60% {
      width: 3.5rem;
      transform: translateX(-65px) rotateZ(90deg);
      ;
    }
  }

  .banner--text1 {
    padding: 0;
    width: 92%;
    margin-top: 25px;
    margin-bottom: 20px;
  }

  .welcome--text {
    font-size: 1rem;
    padding-top: 2.2rem;
    padding-bottom: 0.1rem;
  }

  .restaurent--name {
    font-size: 1.8rem;
    padding-top: 0.3rem;
  }

  .btn--explore {
    font-size: 0.45rem;
    text-align: center;
    padding: 0.4rem 1rem;
    margin: 0;
    margin-top: 2.5rem;
  }
}

@media only screen and (max-width: 314px) {
  .login--successed--text {
    padding: 1rem 3.5rem;
    border-radius: 1.7rem;
  }

  .login--successed--text>h1 {
    font-size: 1rem;
  }

  .login--successed--text>button {
    font-size: 0.5rem;
    margin-top: 1.1rem;
    padding: 0.35rem 1.1rem 0.35rem 1.1rem;

  }

  .login--sux {
    width: 50px !important;
    height: 50px !important;
  }

  .login--failed--text {
    padding: 0.7rem 4rem 1rem 4rem;
    border-radius: 1.4rem;
  }

  .login--failed--text>h1 {
    font-size: 0.9rem;
  }

  .login--failed--text>button {
    font-size: 0.5rem;
    margin-top: 1rem;
    padding: 0.2rem 0.8rem 0.2rem 0.8rem;

  }

  .login--fels {
    width: 60px !important;
    height: 60px !important;
  }

  .registeration--successed--text {
    padding: 0.6rem 2.2rem;
    border-radius: 1.2rem;
  }

  .registeration--successed--text>h1 {
    font-size: 1rem;
  }

  .registeration--successed--text>button {
    font-size: 0.5rem;
    margin-top: 0.8rem;
    padding: 0.35rem 1.1rem 0.35rem 1.1rem;

  }

  .regis--sux {
    width: 50px !important;
    height: 50px !important;
  }

  .registeration--failed--text {
    padding: 1rem 3.5rem;
    border-radius: 1.3rem;
  }

  .registeration--failed--text>h1 {
    font-size: 1rem;
  }

  .registeration--failed--text>button {
    font-size: 0.5rem;
    margin-top: 1.1rem;
    padding: 0.35rem 1.1rem 0.35rem 1.1rem;

  }

  .regis--fels {
    width: 50px !important;
    height: 50px !important;
  }

  .closes {
    top: -7.5%;
    right: -44%;
    font-size: 4rem;
  }

  .forms-section {
    margin-left: -11%;
    margin-top: 18.5%;
  }

  .form {
    min-width: 155px !important;
  }

  .form-login {
    padding-right: 10px;
    padding-top: 15px;
    padding-right: 10px;
    padding-bottom: 25px;

  }

  .switcher {
    font-size: 15px;
  }

  .form [type="submit"] {

    min-width: 0;
    line-height: 0;
    padding: 1rem 1.2rem;
    font-size: 0.7rem !important;

  }

  .login--req {
    width: 80%;
    padding: 1.7rem 1.5rem 1.4rem 1.5rem;
  }

  .login--req>h1 {
    font-size: 1.1rem;
    padding-bottom: 1.2rem;
  }

  .btn--login-2 {
    font-size: 0.45rem;
    padding: 0.4rem 0.8rem;
  }

  .inr--extended--div-2>h1 {
    font-size: 1rem;
  }

  .inr--extended--div-2>lord-icon {
    width: 25px !important;
    height: 25px !important;
    padding-bottom: 2px;
  }

  #extended--total-amount {
    font-size: 1.2rem;
    padding-right: 15px;
  }

  .payment--btn {
    font-size: 0.5rem;
    padding: 0.5rem 0.8rem 0.4rem 0.8rem;
    transform: translate(5.7rem, -23rem);
  }

  .lord-icons-4 {
    width: 10px !important;
    height: 10px !important;
  }

  .footer-2-div--2>div {
    transform: translate(10.5%, -10%) !important;
  }

  .nav-mobile {
    transform: translateX(390%) !important;
  }

  .nav-mobile>img {
    width: 175%;
  }

  .namber {
    font-size: 1.6rem !important;
  }
}

@media only screen and (max-width: 309px) {
  .footer-2-div--2>div {
    transform: translate(9.5%, -10%) !important;
  }

  .footer-txt-3 {
    font-size: 13px;
  }
}

@media only screen and (max-width: 300px) {
  .closes {
    top: -7.5%;
    right: -44%;
    font-size: 4rem;
  }

  .forms-section {
    margin-left: -11%;
    margin-top: 18.5%;
  }

  .form {
    min-width: 140px !important;
  }

  .form-login {
    padding-right: 10px;
    padding-top: 15px;
    padding-right: 10px;
    padding-bottom: 25px;

  }

  .switcher {
    font-size: 12px;
  }

  .form [type="submit"] {

    min-width: 0;
    line-height: 0;
    padding: 1rem 1.2rem;
    font-size: 0.7rem !important;

  }

  .extended--div-2 {
    transform: translate(-15px, -1px) !important;
  }

  .extended--div {
    transform: translateX(-1.3rem) !important;
  }

  .inr--extended--div-2 {
    transform: translate(4.6rem, -25rem);
  }

  .payment--btn {
    font-size: 0.5rem;
    padding: 0.5rem 0.8rem 0.4rem 0.8rem;
    transform: translate(5.4rem, -23rem);
  }

  .cart-div {
    width: 60%;
  }

  .cart-div>h1 {
    font-size: 12px;
    padding-right: 2px;
  }

  .cart-div>span {
    font-size: 12px;
    padding-left: 0;
  }

  #up--btn {
    position: absolute;
    width: 1.4em !important;
    border-left: 2.1rem solid transparent;
    border-right: 2.1rem solid transparent;
    border-bottom: 3rem solid rgba(255, 166, 0, 0.67);
    transform: translateY(-2.99rem);

  }

  .lord-icons {
    transform: translate(0, -25px);
    width: 30px !important;
    height: 30px !important;
  }

  .lord-icons-2 {
    width: 22px !important;
  }

  .lord-icons-3 {
    width: 22px !important;
  }

  .footer-2-div--2>div {
    transform: translate(8.5%, -10%) !important;
  }

  .banner--text1 {
    padding: 0;
    width: 92%;
    margin-top: 35px;
    margin-bottom: 30px;
  }

  .welcome--text {
    font-size: 1.6rem !important;
    padding-top: 1.3rem;
    padding-bottom: 0.1rem;
  }

  .restaurent--name {
    font-size: 1.6rem;
    padding-top: 0.3rem;
  }

  .btn--back-to-home {
    background: none;

    border: none;
    font-family: "Dancing Script", cursive;
    border: 1px solid;
    border-radius: 2rem;
    padding: 0.35rem;
    cursor: pointer;

    font-size: 0.45rem;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    margin-bottom: 1rem;
  }

  .btn--explore {
    font-size: 0.45rem;
    text-align: center;
    padding: 0.25rem 0.8rem;
    margin: 0;
    margin-top: 2.5rem;
  }

  .nav-mobile {
    transform: translateX(590%) !important;
  }

  .nav-mobile>img {
    width: 185%;
  }
}

@media only screen and (max-width: 295px) {
  .deliver--text {
    width: 70%;
    padding: 0.9rem 1.7rem;
    border-radius: 2rem;

  }

  .deliver--text>h1 {
    display: inline;
    font-size: 0.9rem;
  }

  .deliver--text>h2 {
    font-size: 0.55rem;
    transform: translate(3rem, -1rem);
  }

  .deliver--text>h3 {
    font-size: 0.55rem;
    transform: translate(3.9rem, -1.5rem);
  }

  .deliver--text>button {
    margin-top: 0.2rem;
    font-size: 0.55rem;
    padding: 0.35rem 1.3rem 0.35rem 1.3rem;

    transform: translateY(-8px);

  }

  .deliver--text>lord-icon {
    width: 50px !important;
    height: 50px !important;
    transform: translateY(10px);
  }

  .nav-mobile {
    transform: translateX(680%) !important;
  }

  .nav-mobile>img {
    width: 205%;
  }

  .footer-txt-3 {
    font-size: 10px;
  }
}

@media only screen and (max-width: 290px) {
  .nav-mobile {
    transform: translateX(780%) !important;
  }

  .nav-mobile>img {
    width: 235%;
  }

  .section--footer-2 {
    height: 8vh;
    padding-top: 1.2rem;
  }
}

@media only screen and (max-width: 285px) {
  .nav-mobile {
    transform: translateX(880%) !important;
  }

  .nav-mobile>img {
    width: 265%;
  }
}

@media only screen and (max-width: 280px) {

  .nav-mobile {
    transform: translateX(980%) !important;
  }

  .nav-mobile>img {
    width: 295%;
  }
}

@media only screen and (max-width: 275px) {
  .nav-mobile {
    transform: translateX(1080%) !important;
  }

  .nav-mobile>img {
    width: 325%;
  }
}

@media only screen and (max-width: 270px) {
  .nav-mobile {
    transform: translateX(1280%) !important;
  }

  .nav-mobile>img {
    width: 385%;
  }
}

@media only screen and (max-width: 265px) {
  .nav-mobile {
    transform: translateX(1480%) !important;
  }

  .nav-mobile>img {
    width: 455%;
  }
}

@media only screen and (max-width: 260px) {
  .nav-mobile {
    transform: translateX(1780%) !important;
  }

  .nav-mobile>img {
    width: 555%;
  }
}

@media only screen and (max-width: 255px) {
  .nav-mobile {
    transform: translateX(1080%) !important;
  }

  .nav-mobile>img {
    width: 755%;
  }
}


.nav--overlay {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 999999;
  background: #0abdc797;
  backdrop-filter: blur(10px); background-color: #00000036;
  backdrop-filter: blur(13px);

}

.overlay-nav-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 3rem;
}

.overlay-nav-link li {
  text-decoration: none;
  list-style: none;
  color: white !important;
}

.overlay-nav-link li a {
  font-weight: bold;

  color: rgba(255, 166, 0, 0.67);
  color: rgba(255, 166, 0, 0.8);




}
.overlay-nav-link li a:hover {
  font-weight: bold;
  color: rgba(255, 166, 0, 0.67);
  color: rgba(255, 166, 0);




}

.nav--overlay[data-visible="true"] {
  visibility: visible;
  transition: all 0.4s;
}

.nav--closes[data-visible="true"] {
  visibility: visible;

}

.nav--closes {
  z-index: 999999;


  position: absolute;
  font-size: 6rem;
  cursor: pointer;
  border: none;
  background: none;
  right: 10%;
  top: 4%;
  color: rgba(245, 237, 237, 0.513);
  color: rgba(255, 166, 0, 0.67);

  transition-duration: 300ms;
}

.nav--closes:hover {
  color: rgba(0, 0, 0, 0.335);
  color: rgb(245, 33, 86);
  color: white; color: rgba(255, 166, 0);

}

.hdn {
  display: none;
}

.nav-api-linker {
  color: #03e9f4;
  opacity: 1;
  transform: scale(1.9);
  border-bottom: 2px solid #03e9f4;
  padding-bottom: 1px;
  color: rgba(255, 166, 0);
  border-bottom: 2px solid rgba(255, 166, 0);
}
  `

  var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)