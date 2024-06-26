///////////////////////////////////////
// Slider
// const slider = function () {
//   const slides = document.querySelectorAll(".slide");
//   const btnLeft = document.querySelector(".slider__btn--left");
//   const btnRight = document.querySelector(".slider__btn--right");
//   const dotContainer = document.querySelector(".dots");

//   let curSlide = 0;
//   const maxSlide = slides.length;

//   // Functions
//   const createDots = function () {
//     slides.forEach(function (_, i) {
//       dotContainer.insertAdjacentHTML(
//         "beforeend",
//         `<button class="dots__dot" data-slide="${i}"></button>`
//       );
//     });
//   };

//   const activateDot = function (slide) {
//     document
//       .querySelectorAll(".dots__dot")
//       .forEach((dot) => dot.classList.remove("dots__dot--active"));

//     document
//       .querySelector(`.dots__dot[data-slide="${slide}"]`)
//       .classList.add("dots__dot--active");
//   };

//   const goToSlide = function (slide) {
//     slides.forEach(

//       function (s, i) {
//         s.style.transform = `translateX(${100 * (i - slide)}%)`;
//       }
//     );
//   };

//   // Next slide
//   const nextSlide = function () {
//     if (curSlide === maxSlide - 1) {
//       curSlide = 0;
//     } else {
//       curSlide++;
//     }

//     goToSlide(curSlide);
//     activateDot(curSlide);
//   };

//   const prevSlide = function () {
//     if (curSlide === 0) {
//       curSlide = maxSlide - 1;
//     } else {
//       curSlide--;
//     }
//     goToSlide(curSlide);
//     activateDot(curSlide);
//   };

//   const init = function () {
//     goToSlide(0);
//     createDots();

//     activateDot(0);
//   };
//   init();

//   // Event handlers
//   btnRight.addEventListener("click", nextSlide);
//   btnLeft.addEventListener("click", prevSlide);

//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") prevSlide();
//     e.key === "ArrowRight" && nextSlide();
//   });

//   dotContainer.addEventListener("click", function (e) {
//     if (e.target.classList.contains("dots__dot")) {
//       const { slide } = e.target.dataset;
//       goToSlide(slide);
//       activateDot(slide);
//     }
//   });
// };
// slider();

// let xPos = 0;
// gsap
//   .timeline()
//   .set(".ring", { rotationY: 180, cursor: "grab" }) //set initial rotationY so the parallax jump happens off screen
//   .set(".img", {
//     // apply transform rotations to each image
//     rotateY: (i) => i * -36,
//     transformOrigin: "50% 50% 500px",
//     z: -500,
//     backgroundImage: (i) =>
//       "url(https://picsum.photos/id/" + (i + 32) + "/600/400/)",
//     backgroundPosition: (i) => getBgPos(i),
//     backfaceVisibility: "hidden",
//   })
//   .from(".img", {
//     duration: 1.5,
//     y: 200,
//     opacity: 0,
//     stagger: 0.1,
//     ease: "expo",
//   })
//   .add(() => {
//     $(".img").on("mouseenter", (e) => {
//       let current = e.currentTarget;
//       gsap.to(".img", {
//         opacity: (i, t) => (t == current ? 1 : 0.5),
//         ease: "power3",
//       });
//     });
//     $(".img").on("mouseleave", (e) => {
//       gsap.to(".img", { opacity: 1, ease: "power2.inOut" });
//     });
//   }, "-=0.5");
// $(window).on("mousedown touchstart", dragStart);
// $(window).on("mouseup touchend", dragEnd);
// function dragStart(e) {
//   if (e.touches) e.clientX = e.touches[0].clientX;
//   xPos = Math.round(e.clientX);
//   gsap.set(".ring", { cursor: "grabbing" });
//   $(window).on("mousemove touchmove", drag);
// }
// function drag(e) {
//   if (e.touches) e.clientX = e.touches[0].clientX;
//   gsap.to(".ring", {
//     rotationY: "-=" + ((Math.round(e.clientX) - xPos) % 360),
//     onUpdate: () => {
//       gsap.set(".img", { backgroundPosition: (i) => getBgPos(i) });
//     },
//   });
//   xPos = Math.round(e.clientX);
// }
// function dragEnd(e) {
//   $(window).off("mousemove touchmove", drag);
//   gsap.set(".ring", { cursor: "grab" });
// }
// function getBgPos(i) {
//   //returns the background-position string to create parallax movement in each image
//   return (
//     100 -
//     (gsap.utils.wrap(
//       0,
//       360,
//       gsap.getProperty(".ring", "rotationY") - 180 - i * 36
//     ) /
//       360) *
//       500 +
//     "px 0px"
//   );
// }

/////////////////////////////////////////

// var loggedIn = true;

/////////////////////////////////////////

// class parallaxTiltEffect {
//   constructor({ element, tiltEffect }) {
//     this.element = element;
//     this.container = this.element.querySelector(".container");
//     this.size = [300, 360];
//     [this.w, this.h] = this.size;
//     this.tiltEffect = tiltEffect;
//     this.mouseOnComponent = false;
//     this.handleMouseMove = this.handleMouseMove.bind(this);
//     this.handleMouseEnter = this.handleMouseEnter.bind(this);
//     this.handleMouseLeave = this.handleMouseLeave.bind(this);
//     this.defaultStates = this.defaultStates.bind(this);
//     this.setProperty = this.setProperty.bind(this);
//     this.init = this.init.bind(this);
//     this.init();
//   }
//   handleMouseMove(event) {
//     const { offsetX, offsetY } = event;
//     let X;
//     let Y;
//     if (this.tiltEffect === "reverse") {
//       X = (offsetX - this.w / 2) / 3 / 3;
//       Y = -(offsetY - this.h / 2) / 3 / 3;
//     } else if (this.tiltEffect === "normal") {
//       X = -(offsetX - this.w / 2) / 3 / 3;
//       Y = (offsetY - this.h / 2) / 3 / 3;
//     }
//     this.setProperty("--rY", X.toFixed(2));
//     this.setProperty("--rX", Y.toFixed(2));
//     this.setProperty("--bY", 80 - (X / 4).toFixed(2) + "%");
//     this.setProperty("--bX", 50 - (Y / 4).toFixed(2) + "%");
//   }
//   handleMouseEnter() {
//     this.mouseOnComponent = true;
//     this.container.classList.add("container--active");
//   }
//   handleMouseLeave() {
//     this.mouseOnComponent = false;
//     this.defaultStates();
//   }
//   defaultStates() {
//     this.container.classList.remove("container--active");
//     this.setProperty("--rY", 0);
//     this.setProperty("--rX", 0);
//     this.setProperty("--bY", "80%");
//     this.setProperty("--bX", "50%");
//   }
//   setProperty(p, v) {
//     return this.container.style.setProperty(p, v);
//   }
//   init() {
//     this.element.addEventListener("mousemove", this.handleMouseMove);
//     this.element.addEventListener("mouseenter", this.handleMouseEnter);
//     this.element.addEventListener("mouseleave", this.handleMouseLeave);
//   }
// }
// const $ = (e) => document.querySelector(e);
// const wrap1 = new parallaxTiltEffect({
//   element: $(".wrap--1"),
//   tiltEffect: "reverse",
// });
// const wrap2 = new parallaxTiltEffect({
//   element: $(".wrap--2"),
//   tiltEffect: "reverse",
// });
// const wrap3 = new parallaxTiltEffect({
//   element: $(".wrap--3"),
//   tiltEffect: "reverse",
// });

///////////////////////////////////////////////////////////////

const exploreButton = document.querySelector(".btn--explore");
const menuSection = document.querySelector("#menu--section");

exploreButton.addEventListener("click", function (e) {
  menuSection.scrollIntoView({ behavior: "smooth" });
});

//Login Page

// const labels = document.querySelectorAll(".form-control label");
// labels.forEach((label) => {
//   label.innerHTML = label.innerText
//     .split("")
//     .map(
//       (letter, idx) =>
//         `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
//     )
//     .join("");
// });

const switchers = [...document.querySelectorAll(".switcher")];

switchers.forEach((item) => {
  item.addEventListener("click", function () {
    switchers.forEach((item) =>
      item.parentElement.classList.remove("is-active")
    );
    this.parentElement.classList.add("is-active");
  });
});

/////////////////////////////////

const button = document.querySelector(".btn--login");
const overlay = document.querySelector(".overlayed");
const popup = document.querySelector(".forms");
const close = document.querySelector(".closes");

const openModal = function () {
  popup.classList.remove("hdn");
  overlay.classList.remove("hdn");
  close.classList.remove("hdn");
};

const closeModal = function () {
  popup.classList.add("hdn");
  overlay.classList.add("hdn");
  close.classList.add("hdn");
};

button.addEventListener("click", openModal);
// popup.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
close.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !popup.classList.contains("hdn")) {
    closeModal();
  }
});

/////////////////////////////////////////////////////////////
const loginSuccessed = document.querySelector(".login--successed");
const loginFailed = document.querySelector(".login--failed");
const registerationSuccessed = document.querySelector(
  ".registeration--successed"
);
const registerationFailed = document.querySelector(".registeration--failed");
const addDetails = document.querySelector(".address--details");
const nameDetails = document.querySelector(".name--details");
const phDetails = document.querySelector(".phone--details");
const mailDetails = document.querySelector(".mail--details");

//////////////////////////////////////////////////////////////////////

const okayLoginBtn = document.querySelector(".login-okay");
const okayNotLoginBtn = document.querySelector(".login-not-okay");
const okayRegisterBtn = document.querySelector(".register-okay");
const okayNotRegisternBtn = document.querySelector(".register-not-okay");

////////////////////////////////////////////////////////////////////////////

const inlogs = document.querySelector(".inlogs");
const avatarName = document.getElementById("avatar-name");
const avatarAddy = document.getElementById("avatar-addy");
// var loggedIn=false;

var loggedIn = true;


/////////////////////////////////////////////////////////////////
//FORM BACKEND
/////////////////////////////////////////////////////////////////

const Rform = document.getElementById("sign-form");
Rform.addEventListener("submit", registerUser);
async function registerUser(event) {
  event.preventDefault();
  var mail = document.getElementById("mail").value;
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  var address = document.getElementById("address").value;
  var phone = document.getElementById("phone").value;

  var result = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/JSON",
    },
    body: JSON.stringify({
      mail,
      name,
      phone,
      address,
      password,
    }),
  })
    .then((res) => {
      res = res.json();
      // console.log(res);

      return res;
    })
    .then((data) => {
      if (data.status === "ok") {
        // everythign went fine
        // alert("Success");
        registerationSuccessed.classList.remove("hdne");
        okayRegisterBtn.addEventListener("click", () =>
          registerationSuccessed.classList.add("hdne")
        );
      } else {
        // alert(result.error);
        registerationFailed.classList.remove("hdne");
        okayNotRegisternBtn.addEventListener("click", () =>
          registerationFailed.classList.add("hdne")
        );
      }
    });
}
const Lform = document.getElementById("log-form");
Lform.addEventListener("submit", login);

async function login(event) {
  event.preventDefault();
  var mail = document.getElementById("login-mail").value;
  var password = document.getElementById("login-password").value;

  var result = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mail,
      password,
    }),
  }).then((res) => res.json());

  if (result.status === "ok") {
    // everythign went fine
    // console.log("Got the token: ", result.data);
    localStorage.setItem("token", result.data);
    const Lname = result.data.uname;
    // console.log(Lname);
    const Laddress = result.data.uaddress;
    // const Laddress = result.data.uaddress;
    // const Lmail = result.data.umail;
    // const Lphone = result.data.uphone;
    loggedIn = true;
    avatarName.innerHTML = Lname;
    avatarAddy.innerHTML = Laddress;
    // addDetails.innerHTML = Laddress;
    // mailDetails.innerHTML = Lmail;
    // phDetails.innerHTML = Lphone;
    // nameDetails.innerHTML = Lname;
    button.setAttribute("data-visible", false);
    inlogs.setAttribute("data-visible", true);

    // alert("Success");

    loginSuccessed.classList.remove("hdne");
    okayLoginBtn.addEventListener("click", function () {
      closeModal();
      loginSuccessed.classList.add("hdne");
    });
  } else {
    // alert(result.error);
    loginFailed.classList.remove("hdne");
    okayNotLoginBtn.addEventListener("click", function () {
      loginFailed.classList.add("hdne");
    });
  }
}

//////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////

const plusBtn1 = document.getElementById("plus-btn-1");
const minusBtn1 = document.getElementById("minus-btn-1");
const cartItem1 = document.getElementById("cart-item-1");

const plusBtn2 = document.getElementById("plus-btn-2");
const minusBtn2 = document.getElementById("minus-btn-2");
const cartItem2 = document.getElementById("cart-item-2");

const plusBtn3 = document.getElementById("plus-btn-3");
const minusBtn3 = document.getElementById("minus-btn-3");
const cartItem3 = document.getElementById("cart-item-3");

const plusBtn4 = document.getElementById("plus-btn-4");
const minusBtn4 = document.getElementById("minus-btn-4");
const cartItem4 = document.getElementById("cart-item-4");

const plusBtn5 = document.getElementById("plus-btn-5");
const minusBtn5 = document.getElementById("minus-btn-5");
const cartItem5 = document.getElementById("cart-item-5");

const plusBtn6 = document.getElementById("plus-btn-6");
const minusBtn6 = document.getElementById("minus-btn-6");
const cartItem6 = document.getElementById("cart-item-6");

const plusBtn7 = document.getElementById("plus-btn-7");
const minusBtn7 = document.getElementById("minus-btn-7");
const cartItem7 = document.getElementById("cart-item-7");

const plusBtn8 = document.getElementById("plus-btn-8");
const minusBtn8 = document.getElementById("minus-btn-8");
const cartItem8 = document.getElementById("cart-item-8");

const plusBtn9 = document.getElementById("plus-btn-9");
const minusBtn9 = document.getElementById("minus-btn-9");
const cartItem9 = document.getElementById("cart-item-9");

const plusBtn10 = document.getElementById("plus-btn-10");
const minusBtn10 = document.getElementById("minus-btn-10");
const cartItem10 = document.getElementById("cart-item-10");

const plusBtn11 = document.getElementById("plus-btn-11");
const minusBtn11 = document.getElementById("minus-btn-11");
const cartItem11 = document.getElementById("cart-item-11");

const plusBtn12 = document.getElementById("plus-btn-12");
const minusBtn12 = document.getElementById("minus-btn-12");
const cartItem12 = document.getElementById("cart-item-12");

const plusBtn13 = document.getElementById("plus-btn-13");
const minusBtn13 = document.getElementById("minus-btn-13");
const cartItem13 = document.getElementById("cart-item-13");

const plusBtn14 = document.getElementById("plus-btn-14");
const minusBtn14 = document.getElementById("minus-btn-14");
const cartItem14 = document.getElementById("cart-item-14");

const plusBtn15 = document.getElementById("plus-btn-15");
const minusBtn15 = document.getElementById("minus-btn-15");
const cartItem15 = document.getElementById("cart-item-15");


const bestImgSelector1 = document.getElementById("best-img-1");
const bestImgSelector2 = document.getElementById("best-img-2");
const bestImgSelector3 = document.getElementById("best-img-3");
const imgSelector1 = document.getElementById("menu-img-1");
const imgSelector2 = document.getElementById("menu-img-2");
const imgSelector3 = document.getElementById("menu-img-3");
const imgSelector4 = document.getElementById("menu-img-4");
const imgSelector5 = document.getElementById("menu-img-5");
const imgSelector6 = document.getElementById("menu-img-6");
const imgSelector7 = document.getElementById("menu-img-7");
const imgSelector8 = document.getElementById("menu-img-8");
const imgSelector9 = document.getElementById("menu-img-9");
const imgSelector10 = document.getElementById("menu-img-10");
const imgSelector11 = document.getElementById("menu-img-11");
const imgSelector12 = document.getElementById("menu-img-12");
const imgSelector13 = document.getElementById("menu-img-13");
const imgSelector14 = document.getElementById("menu-img-14");

const imgSelector15 = document.getElementById("menu-img-15");
const imgSelector16 = document.getElementById("menu-img-16");
const imgSelector17 = document.getElementById("menu-img-17");
const imgSelector18 = document.getElementById("menu-img-18");
const imgSelector19 = document.getElementById("menu-img-19");
const imgSelector20 = document.getElementById("menu-img-20");
const imgSelector21 = document.getElementById("menu-img-21");

const cartSection = document.querySelector(".cart--section");

var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var counter5 = 0;
var counter6 = 0;
var counter7 = 0;
var counter8 = 0;
var counter9 = 0;
var counter10 = 0;
var counter11 = 0;
var counter12 = 0;
var counter13 = 0;
var counter14 = 0;

var totalCounter = 0;

var price1 = 359;
var price2 = 489;
var price3 = 299;
var price4 = 359;
var price5 = 259;
var price6 = 199;
var price7 = 199;
var price8 = 199;
var price9 = 199;
var price10 = 199;
var price11 = 289;
var price12 = 469;
var price13 = 299;
var price14 = 299;

const itemPriceFinal1 = document.getElementById("item--price--final-1");
const itemPriceFinal2 = document.getElementById("item--price--final-2");
const itemPriceFinal3 = document.getElementById("item--price--final-3");
const itemPriceFinal4 = document.getElementById("item--price--final-4");
const itemPriceFinal5 = document.getElementById("item--price--final-5");
const itemPriceFinal6 = document.getElementById("item--price--final-6");
const itemPriceFinal7 = document.getElementById("item--price--final-7");
const itemPriceFinal8 = document.getElementById("item--price--final-8");
const itemPriceFinal9 = document.getElementById("item--price--final-9");
const itemPriceFinal10 = document.getElementById("item--price--final-10");
const itemPriceFinal11 = document.getElementById("item--price--final-11");
const itemPriceFinal12 = document.getElementById("item--price--final-12");
const itemPriceFinal13 = document.getElementById("item--price--final-13");
const itemPriceFinal14 = document.getElementById("item--price--final-14");

var cartPrice1 = 0;
var cartPrice2 = 0;
var cartPrice3 = 0;
var cartPrice4 = 0;
var cartPrice5 = 0;
var cartPrice6 = 0;
var cartPrice7 = 0;
var cartPrice8 = 0;
var cartPrice9 = 0;
var cartPrice10 = 0;
var cartPrice11 = 0;
var cartPrice12 = 0;
var cartPrice13 = 0;
var cartPrice14 = 0;

const finalCartItemNumber1 = document.getElementById("cart--item-no--final-1");
const finalCartItemNumber2 = document.getElementById("cart--item-no--final-2");
const finalCartItemNumber3 = document.getElementById("cart--item-no--final-3");
const finalCartItemNumber4 = document.getElementById("cart--item-no--final-4");
const finalCartItemNumber5 = document.getElementById("cart--item-no--final-5");
const finalCartItemNumber6 = document.getElementById("cart--item-no--final-6");
const finalCartItemNumber7 = document.getElementById("cart--item-no--final-7");
const finalCartItemNumber8 = document.getElementById("cart--item-no--final-8");
const finalCartItemNumber9 = document.getElementById("cart--item-no--final-9");
const finalCartItemNumber10 = document.getElementById(
  "cart--item-no--final-10"
);
const finalCartItemNumber11 = document.getElementById(
  "cart--item-no--final-11"
);
const finalCartItemNumber12 = document.getElementById(
  "cart--item-no--final-12"
);
const finalCartItemNumber13 = document.getElementById(
  "cart--item-no--final-13"
);
const finalCartItemNumber14 = document.getElementById(
  "cart--item-no--final-14"
);

var totalAmountOfCart = 0;

const totalAmountId = document.getElementById("total--amount-id");

const totalAmountExtended = document.getElementById("extended--total-amount");

const totalItems = document.getElementById("total--item-id");


//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
bestImgSelector1.addEventListener("click", () =>
  imgSelector6.scrollIntoView({behavior:"smooth",block:"center"})
);
bestImgSelector1.addEventListener("click", () =>
  imgSelector17.scrollIntoView({behavior:"smooth",block:"center"})
);
bestImgSelector2.addEventListener("click", () =>
  imgSelector13.scrollIntoView({behavior:"smooth",block:"center"})
);

bestImgSelector3.addEventListener("click", () =>
  imgSelector4.scrollIntoView({behavior:"smooth",block:"center"})
);
bestImgSelector3.addEventListener("click", () =>
  imgSelector16.scrollIntoView({behavior:"smooth",block:"center"})
);
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
imgSelector1.addEventListener("click", function () {
  if (loggedIn) {
    if (counter1 !== 9) {
      counter1 += 1;

      totalCounter += 1;

      cartPrice1 += price1;
      itemPriceFinal1.innerHTML = `₹ ${cartPrice1}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price1;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber1.innerHTML = `${counter1} ×`;

      // console.log(totalAmountOfCart);

      if (counter1 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem1.innerHTML = `${counter1}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
imgSelector2.addEventListener("click", function () {
  if (loggedIn) {
    if (counter2 !== 9) {
      counter2 += 1;

      totalCounter += 1;

      cartPrice2 += price2;
      itemPriceFinal2.innerHTML = `₹ ${cartPrice2}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price2;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber2.innerHTML = `${counter2} ×`;

      if (counter2 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem2.innerHTML = `${counter2}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
imgSelector15.addEventListener("click", function () {
  if (loggedIn) {
    if (counter2 !== 9) {
      counter2 += 1;

      totalCounter += 1;

      cartPrice2 += price2;
      itemPriceFinal2.innerHTML = `₹ ${cartPrice2}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price2;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber2.innerHTML = `${counter2} ×`;

      if (counter2 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem2.innerHTML = `${counter2}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
imgSelector3.addEventListener("click", function () {
  if (loggedIn) {
    if (counter3 !== 9) {
      counter3 += 1;

      totalCounter += 1;

      cartPrice3 += price3;
      itemPriceFinal3.innerHTML = `₹ ${cartPrice3}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price3;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber3.innerHTML = `${counter3} ×`;
      if (counter3 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem3.innerHTML = `${counter3}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
imgSelector4.addEventListener("click", function () {
  if (loggedIn) {
    if (counter4 !== 9) {
      counter4 += 1;

      totalCounter += 1;

      cartPrice4 += price4;
      itemPriceFinal4.innerHTML = `₹ ${cartPrice4}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price4;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber4.innerHTML = `${counter4} ×`;

      if (counter4 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem4.innerHTML = `${counter4}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
imgSelector16.addEventListener("click", function () {
  if (loggedIn) {
    if (counter4 !== 9) {
      counter4 += 1;

      totalCounter += 1;

      cartPrice4 += price4;
      itemPriceFinal4.innerHTML = `₹ ${cartPrice4}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price4;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber4.innerHTML = `${counter4} ×`;

      if (counter4 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem4.innerHTML = `${counter4}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
imgSelector5.addEventListener("click", function () {
  if (loggedIn) {
    if (counter5 !== 9) {
      counter5 += 1;

      totalCounter += 1;

      cartPrice5 += price5;
      itemPriceFinal5.innerHTML = `₹ ${cartPrice5}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price5;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber5.innerHTML = `${counter5} ×`;

      if (counter5 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem5.innerHTML = `${counter5}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
  imgSelector6.addEventListener("click", function () {
   if (loggedIn) {
    if (counter6 !== 9) {
      counter6 += 1;

      totalCounter += 1;

      cartPrice6 += price6;
      itemPriceFinal6.innerHTML = `₹ ${cartPrice6}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price6;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber6.innerHTML = `${counter6} ×`;

      if (counter6 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem6.innerHTML = `${counter6}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
imgSelector17.addEventListener("click", function () {
  if (loggedIn) {
    if (counter6 !== 9) {
      counter6 += 1;

      totalCounter += 1;

      cartPrice6 += price6;
      itemPriceFinal6.innerHTML = `₹ ${cartPrice6}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price6;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber6.innerHTML = `${counter6} ×`;

      if (counter6 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem6.innerHTML = `${counter6}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
imgSelector7.addEventListener("click", function () {
  if (loggedIn) {
    if (counter7 !== 9) {
      counter7 += 1;

      totalCounter += 1;

      cartPrice7 += price7;
      itemPriceFinal7.innerHTML = `₹ ${cartPrice7}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price7;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber7.innerHTML = `${counter7} ×`;

      if (counter7 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem7.innerHTML = `${counter7}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
  imgSelector8.addEventListener("click", function () {
   if (loggedIn) {
    if (counter8 !== 9) {
      counter8 += 1;

      totalCounter += 1;

      cartPrice8 += price8;
      itemPriceFinal8.innerHTML = `₹ ${cartPrice8}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price8;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber8.innerHTML = `${counter8} ×`;

      if (counter8 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem8.innerHTML = `${counter8}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
imgSelector18.addEventListener("click", function () {
  if (loggedIn) {
    if (counter8 !== 9) {
      counter8 += 1;

      totalCounter += 1;

      cartPrice8 += price8;
      itemPriceFinal8.innerHTML = `₹ ${cartPrice8}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price8;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber8.innerHTML = `${counter8} ×`;

      if (counter8 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem8.innerHTML = `${counter8}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
imgSelector9.addEventListener("click", function () {
  if (loggedIn) {
    if (counter9 !== 9) {
      counter9 += 1;

      totalCounter += 1;

      cartPrice9 += price9;
      itemPriceFinal9.innerHTML = `₹ ${cartPrice9}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price9;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber9.innerHTML = `${counter9} ×`;

      if (counter9 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem9.innerHTML = `${counter9}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
  imgSelector10.addEventListener("click", function () {
   if (loggedIn) {
    if (counter10 !== 9) {
      counter10 += 1;

      totalCounter += 1;

      cartPrice10 += price10;
      itemPriceFinal10.innerHTML = `₹ ${cartPrice10}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price10;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber10.innerHTML = `${counter10} ×`;

      if (counter10 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem10.innerHTML = `${counter10}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
imgSelector19.addEventListener("click", function () {
  if (loggedIn) {
    if (counter10 !== 9) {
      counter10 += 1;

      totalCounter += 1;

      cartPrice10 += price10;
      itemPriceFinal10.innerHTML = `₹ ${cartPrice10}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price10;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber10.innerHTML = `${counter10} ×`;

      if (counter10 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem10.innerHTML = `${counter10}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
imgSelector11.addEventListener("click", function () {
  if (loggedIn) {
    if (counter11 !== 9) {
      counter11 += 1;

      totalCounter += 1;

      cartPrice11 += price11;
      itemPriceFinal11.innerHTML = `₹ ${cartPrice11}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price11;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber11.innerHTML = `${counter11} ×`;

      if (counter11 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem11.innerHTML = `${counter11}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
  imgSelector12.addEventListener("click", function () {
  if (loggedIn) {
    if (counter12 !== 9) {
      counter12 += 1;

      totalCounter += 1;

      cartPrice12 += price12;
      itemPriceFinal12.innerHTML = `₹ ${cartPrice12}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price12;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber12.innerHTML = `${counter12} ×`;

      if (counter12 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem12.innerHTML = `${counter12}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
imgSelector20.addEventListener("click", function () {
  if (loggedIn) {
    if (counter12 !== 9) {
      counter12 += 1;

      totalCounter += 1;

      cartPrice12 += price12;
      itemPriceFinal12.innerHTML = `₹ ${cartPrice12}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price12;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber12.innerHTML = `${counter12} ×`;

      if (counter12 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem12.innerHTML = `${counter12}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
imgSelector13.addEventListener("click", function () {
  if (loggedIn) {
    if (counter13 !== 9) {
      counter13 += 1;

      totalCounter += 1;

      cartPrice13 += price13;
      itemPriceFinal13.innerHTML = `₹ ${cartPrice13}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price13;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber13.innerHTML = `${counter13} ×`;

      if (counter13 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem13.innerHTML = `${counter13}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
imgSelector14.addEventListener("click", function () {
  if (loggedIn) {
    if (counter14 !== 9) {
      counter14 += 1;

      totalCounter += 1;

      cartPrice14 += price14;
      itemPriceFinal14.innerHTML = `₹ ${cartPrice14}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price14;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber14.innerHTML = `${counter14} ×`;

      if (counter14 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem14.innerHTML = `${counter14}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
imgSelector21.addEventListener("click", function () {
  if (loggedIn) {
    if (counter14 !== 9) {
      counter14 += 1;

      totalCounter += 1;

      cartPrice14 += price14;
      itemPriceFinal14.innerHTML = `₹ ${cartPrice14}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price14;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber14.innerHTML = `${counter14} ×`;

      if (counter14 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem14.innerHTML = `${counter14}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

plusBtn1.addEventListener("click", function () {
  if (loggedIn) {
    if (counter1 !== 9) {
      counter1 += 1;

      totalCounter += 1;

      cartPrice1 += price1;
      itemPriceFinal1.innerHTML = `₹ ${cartPrice1}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price1;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber1.innerHTML = `${counter1} ×`;

      // console.log(totalAmountOfCart);

      if (counter1 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem1.innerHTML = `${counter1}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
minusBtn1.addEventListener("click", function () {
  if (counter1 !== 0) {
    counter1 -= 1;

    totalCounter -= 1;

    cartPrice1 -= price1;
    itemPriceFinal1.innerHTML = `₹ ${cartPrice1}`;

    totalAmountOfCart -= price1;
    totalAmountId.innerHTML = `${totalAmountOfCart}`;

    totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

    totalItems.innerHTML = `${totalCounter}`;

    finalCartItemNumber1.innerHTML = `${counter1} ×`;

    // console.log(totalAmountOfCart);

    if (
      counter1 === 0 &&
      counter2 === 0 &&
      counter3 === 0 &&
      counter4 === 0 &&
      counter5 === 0 &&
      counter6 === 0 &&
      counter7 === 0 &&
      counter8 === 0 &&
      counter9 === 0 &&
      counter10 === 0 &&
      counter11 === 0 &&
      counter12 === 0 &&
      counter13 === 0 &&
      counter14 === 0
    ) {
      cartSection.setAttribute("data-visible", false);
    }

    cartItem1.innerHTML = `${counter1}`;
  }
});

plusBtn2.addEventListener("click", function () {
  if (loggedIn) {
    if (counter2 !== 9) {
      counter2 += 1;

      totalCounter += 1;

      cartPrice2 += price2;
      itemPriceFinal2.innerHTML = `₹ ${cartPrice2}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price2;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber2.innerHTML = `${counter2} ×`;

      if (counter2 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem2.innerHTML = `${counter2}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
minusBtn2.addEventListener("click", function () {
  if (counter2 !== 0) {
    counter2 -= 1;

    totalCounter -= 1;

    cartPrice2 -= price2;
    itemPriceFinal2.innerHTML = `₹ ${cartPrice2}`;

    totalAmountOfCart -= price2;
    totalAmountId.innerHTML = `${totalAmountOfCart}`;
    totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

    totalItems.innerHTML = `${totalCounter}`;

    finalCartItemNumber2.innerHTML = `${counter2} ×`;

    if (
      counter1 === 0 &&
      counter2 === 0 &&
      counter3 === 0 &&
      counter4 === 0 &&
      counter5 === 0 &&
      counter6 === 0 &&
      counter7 === 0 &&
      counter8 === 0 &&
      counter9 === 0 &&
      counter10 === 0 &&
      counter11 === 0 &&
      counter12 === 0 &&
      counter13 === 0 &&
      counter14 === 0
    ) {
      cartSection.setAttribute("data-visible", false);
    }

    cartItem2.innerHTML = `${counter2}`;
  }
});

plusBtn3.addEventListener("click", function () {
  if (loggedIn) {
    if (counter3 !== 9) {
      counter3 += 1;

      totalCounter += 1;

      cartPrice3 += price3;
      itemPriceFinal3.innerHTML = `₹ ${cartPrice3}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price3;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber3.innerHTML = `${counter3} ×`;
      if (counter3 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem3.innerHTML = `${counter3}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
minusBtn3.addEventListener("click", function () {
  if (counter3 !== 0) {
    counter3 -= 1;

    totalCounter -= 1;

    cartPrice3 -= price3;
    itemPriceFinal3.innerHTML = `₹ ${cartPrice3}`;

    totalAmountOfCart -= price3;
    totalAmountId.innerHTML = `${totalAmountOfCart}`;
    totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

    totalItems.innerHTML = `${totalCounter}`;

    finalCartItemNumber3.innerHTML = `${counter3} ×`;

    if (
      counter1 === 0 &&
      counter2 === 0 &&
      counter3 === 0 &&
      counter4 === 0 &&
      counter5 === 0 &&
      counter6 === 0 &&
      counter7 === 0 &&
      counter8 === 0 &&
      counter9 === 0 &&
      counter10 === 0 &&
      counter11 === 0 &&
      counter12 === 0 &&
      counter13 === 0 &&
      counter14 === 0
    ) {
      cartSection.setAttribute("data-visible", false);
    }

    cartItem3.innerHTML = `${counter3}`;
  }
});

plusBtn4.addEventListener("click", function () {
  if (loggedIn) {
    if (counter4 !== 9) {
      counter4 += 1;

      totalCounter += 1;

      cartPrice4 += price4;
      itemPriceFinal4.innerHTML = `₹ ${cartPrice4}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price4;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber4.innerHTML = `${counter4} ×`;

      if (counter4 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem4.innerHTML = `${counter4}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
minusBtn4.addEventListener("click", function () {
  if (counter4 !== 0) {
    counter4 -= 1;

    totalCounter -= 1;

    cartPrice4 -= price4;
    itemPriceFinal4.innerHTML = `₹ ${cartPrice4}`;

    totalAmountOfCart -= price4;
    totalAmountId.innerHTML = `${totalAmountOfCart}`;
    totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

    totalItems.innerHTML = `${totalCounter}`;

    finalCartItemNumber4.innerHTML = `${counter4} ×`;

    if (
      counter1 === 0 &&
      counter2 === 0 &&
      counter3 === 0 &&
      counter4 === 0 &&
      counter5 === 0 &&
      counter6 === 0 &&
      counter7 === 0 &&
      counter8 === 0 &&
      counter9 === 0 &&
      counter10 === 0 &&
      counter11 === 0 &&
      counter12 === 0 &&
      counter13 === 0 &&
      counter14 === 0
    ) {
      cartSection.setAttribute("data-visible", false);
    }

    cartItem4.innerHTML = `${counter4}`;
  }
});

plusBtn5.addEventListener("click", function () {
  if (loggedIn) {
    if (counter5 !== 9) {
      counter5 += 1;

      totalCounter += 1;

      cartPrice5 += price5;
      itemPriceFinal5.innerHTML = `₹ ${cartPrice5}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price5;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber5.innerHTML = `${counter5} ×`;

      if (counter5 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem5.innerHTML = `${counter5}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
minusBtn5.addEventListener("click", function () {
  if (counter5 !== 0) {
    counter5 -= 1;

    totalCounter -= 1;

    cartPrice5 -= price5;
    itemPriceFinal5.innerHTML = `₹ ${cartPrice5}`;

    totalAmountOfCart -= price5;
    totalAmountId.innerHTML = `${totalAmountOfCart}`;
    totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

    totalItems.innerHTML = `${totalCounter}`;

    finalCartItemNumber5.innerHTML = `${counter5} ×`;

    if (
      counter1 === 0 &&
      counter2 === 0 &&
      counter3 === 0 &&
      counter4 === 0 &&
      counter5 === 0 &&
      counter6 === 0 &&
      counter7 === 0 &&
      counter8 === 0 &&
      counter9 === 0 &&
      counter10 === 0 &&
      counter11 === 0 &&
      counter12 === 0 &&
      counter13 === 0 &&
      counter14 === 0
    ) {
      cartSection.setAttribute("data-visible", false);
    }

    cartItem5.innerHTML = `${counter5}`;
  }
});

plusBtn6.addEventListener("click", function () {
  if (loggedIn) {
    if (counter6 !== 9) {
      counter6 += 1;

      totalCounter += 1;

      cartPrice6 += price6;
      itemPriceFinal6.innerHTML = `₹ ${cartPrice6}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price6;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber6.innerHTML = `${counter6} ×`;

      if (counter6 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem6.innerHTML = `${counter6}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
minusBtn6.addEventListener("click", function () {
  if (counter6 !== 0) {
    counter6 -= 1;

    totalCounter -= 1;

    cartPrice6 -= price6;
    itemPriceFinal6.innerHTML = `₹ ${cartPrice6}`;

    totalAmountOfCart -= price6;
    totalAmountId.innerHTML = `${totalAmountOfCart}`;
    totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

    totalItems.innerHTML = `${totalCounter}`;

    finalCartItemNumber6.innerHTML = `${counter6} ×`;

    if (
      counter1 === 0 &&
      counter2 === 0 &&
      counter3 === 0 &&
      counter4 === 0 &&
      counter5 === 0 &&
      counter6 === 0 &&
      counter7 === 0 &&
      counter8 === 0 &&
      counter9 === 0 &&
      counter10 === 0 &&
      counter11 === 0 &&
      counter12 === 0 &&
      counter13 === 0 &&
      counter14 === 0
    ) {
      cartSection.setAttribute("data-visible", false);
    }

    cartItem6.innerHTML = `${counter6}`;
  }
});

plusBtn7.addEventListener("click", function () {
  if (loggedIn) {
    if (counter7 !== 9) {
      counter7 += 1;

      totalCounter += 1;

      cartPrice7 += price7;
      itemPriceFinal7.innerHTML = `₹ ${cartPrice7}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price7;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber7.innerHTML = `${counter7} ×`;

      if (counter7 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem7.innerHTML = `${counter7}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
minusBtn7.addEventListener("click", function () {
  if (counter7 !== 0) {
    counter7 -= 1;

    totalCounter -= 1;

    cartPrice7 -= price7;
    itemPriceFinal7.innerHTML = `₹ ${cartPrice7}`;

    totalAmountOfCart -= price7;
    totalAmountId.innerHTML = `${totalAmountOfCart}`;
    totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

    totalItems.innerHTML = `${totalCounter}`;

    finalCartItemNumber7.innerHTML = `${counter7} ×`;

    if (
      counter1 === 0 &&
      counter2 === 0 &&
      counter3 === 0 &&
      counter4 === 0 &&
      counter5 === 0 &&
      counter6 === 0 &&
      counter7 === 0 &&
      counter8 === 0 &&
      counter9 === 0 &&
      counter10 === 0 &&
      counter11 === 0 &&
      counter12 === 0 &&
      counter13 === 0 &&
      counter14 === 0
    ) {
      cartSection.setAttribute("data-visible", false);
    }

    cartItem7.innerHTML = `${counter7}`;
  }
});

plusBtn8.addEventListener("click", function () {
  if (loggedIn) {
    if (counter8 !== 9) {
      counter8 += 1;

      totalCounter += 1;

      cartPrice8 += price8;
      itemPriceFinal8.innerHTML = `₹ ${cartPrice8}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price8;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber8.innerHTML = `${counter8} ×`;

      if (counter8 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem8.innerHTML = `${counter8}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
minusBtn8.addEventListener("click", function () {
  if (counter8 !== 0) {
    counter8 -= 1;

    totalCounter -= 1;

    cartPrice8 -= price8;
    itemPriceFinal8.innerHTML = `₹ ${cartPrice8}`;

    totalAmountOfCart -= price8;
    totalAmountId.innerHTML = `${totalAmountOfCart}`;
    totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

    totalItems.innerHTML = `${totalCounter}`;

    finalCartItemNumber8.innerHTML = `${counter8} ×`;

    if (
      counter1 === 0 &&
      counter2 === 0 &&
      counter3 === 0 &&
      counter4 === 0 &&
      counter5 === 0 &&
      counter6 === 0 &&
      counter7 === 0 &&
      counter8 === 0 &&
      counter9 === 0 &&
      counter10 === 0 &&
      counter11 === 0 &&
      counter12 === 0 &&
      counter13 === 0 &&
      counter14 === 0
    ) {
      cartSection.setAttribute("data-visible", false);
    }

    cartItem8.innerHTML = `${counter8}`;
  }
});

plusBtn9.addEventListener("click", function () {
  if (loggedIn) {
    if (counter9 !== 9) {
      counter9 += 1;

      totalCounter += 1;

      cartPrice9 += price9;
      itemPriceFinal9.innerHTML = `₹ ${cartPrice9}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price9;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber9.innerHTML = `${counter9} ×`;

      if (counter9 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem9.innerHTML = `${counter9}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
minusBtn9.addEventListener("click", function () {
  if (counter9 !== 0) {
    counter9 -= 1;

    totalCounter -= 1;

    cartPrice9 -= price9;
    itemPriceFinal9.innerHTML = `₹ ${cartPrice9}`;

    totalAmountOfCart -= price9;
    totalAmountId.innerHTML = `${totalAmountOfCart}`;
    totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

    totalItems.innerHTML = `${totalCounter}`;

    finalCartItemNumber9.innerHTML = `${counter9} ×`;

    if (
      counter1 === 0 &&
      counter2 === 0 &&
      counter3 === 0 &&
      counter4 === 0 &&
      counter5 === 0 &&
      counter6 === 0 &&
      counter7 === 0 &&
      counter8 === 0 &&
      counter9 === 0 &&
      counter10 === 0 &&
      counter11 === 0 &&
      counter12 === 0 &&
      counter13 === 0 &&
      counter14 === 0
    ) {
      cartSection.setAttribute("data-visible", false);
    }

    cartItem9.innerHTML = `${counter9}`;
  }
});

plusBtn10.addEventListener("click", function () {
  if (loggedIn) {
    if (counter10 !== 9) {
      counter10 += 1;

      totalCounter += 1;

      cartPrice10 += price10;
      itemPriceFinal10.innerHTML = `₹ ${cartPrice10}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price10;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber10.innerHTML = `${counter10} ×`;

      if (counter10 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem10.innerHTML = `${counter10}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
minusBtn10.addEventListener("click", function () {
  if (counter10 !== 0) {
    counter10 -= 1;

    totalCounter -= 1;

    cartPrice10 -= price10;
    itemPriceFinal10.innerHTML = `₹ ${cartPrice10}`;

    totalAmountOfCart -= price10;
    totalAmountId.innerHTML = `${totalAmountOfCart}`;
    totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

    totalItems.innerHTML = `${totalCounter}`;

    finalCartItemNumber10.innerHTML = `${counter10} ×`;

    if (
      counter1 === 0 &&
      counter2 === 0 &&
      counter3 === 0 &&
      counter4 === 0 &&
      counter5 === 0 &&
      counter6 === 0 &&
      counter7 === 0 &&
      counter8 === 0 &&
      counter9 === 0 &&
      counter10 === 0 &&
      counter11 === 0 &&
      counter12 === 0 &&
      counter13 === 0 &&
      counter14 === 0
    ) {
      cartSection.setAttribute("data-visible", false);
    }

    cartItem10.innerHTML = `${counter10}`;
  }
});

plusBtn11.addEventListener("click", function () {
  if (loggedIn) {
    if (counter11 !== 9) {
      counter11 += 1;

      totalCounter += 1;

      cartPrice11 += price11;
      itemPriceFinal11.innerHTML = `₹ ${cartPrice11}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price11;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber11.innerHTML = `${counter11} ×`;

      if (counter11 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem11.innerHTML = `${counter11}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
minusBtn11.addEventListener("click", function () {
  if (counter11 !== 0) {
    counter11 -= 1;

    totalCounter -= 1;

    cartPrice11 -= price11;
    itemPriceFinal11.innerHTML = `₹ ${cartPrice11}`;

    totalAmountOfCart -= price11;
    totalAmountId.innerHTML = `${totalAmountOfCart}`;
    totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

    totalItems.innerHTML = `${totalCounter}`;

    finalCartItemNumber11.innerHTML = `${counter11} ×`;

    if (
      counter1 === 0 &&
      counter2 === 0 &&
      counter3 === 0 &&
      counter4 === 0 &&
      counter5 === 0 &&
      counter6 === 0 &&
      counter7 === 0 &&
      counter8 === 0 &&
      counter9 === 0 &&
      counter10 === 0 &&
      counter11 === 0 &&
      counter12 === 0 &&
      counter13 === 0 &&
      counter14 === 0
    ) {
      cartSection.setAttribute("data-visible", false);
    }

    cartItem11.innerHTML = `${counter11}`;
  }
});

plusBtn12.addEventListener("click", function () {
  if (loggedIn) {
    if (counter12 !== 9) {
      counter12 += 1;

      totalCounter += 1;

      cartPrice12 += price12;
      itemPriceFinal12.innerHTML = `₹ ${cartPrice12}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price12;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber12.innerHTML = `${counter12} ×`;

      if (counter12 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem12.innerHTML = `${counter12}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
minusBtn12.addEventListener("click", function () {
  if (counter12 !== 0) {
    counter12 -= 1;

    totalCounter -= 1;

    cartPrice12 -= price12;
    itemPriceFinal12.innerHTML = `₹ ${cartPrice12}`;

    totalAmountOfCart -= price12;
    totalAmountId.innerHTML = `${totalAmountOfCart}`;
    totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

    totalItems.innerHTML = `${totalCounter}`;

    finalCartItemNumber12.innerHTML = `${counter12} ×`;

    if (
      counter1 === 0 &&
      counter2 === 0 &&
      counter3 === 0 &&
      counter4 === 0 &&
      counter5 === 0 &&
      counter6 === 0 &&
      counter7 === 0 &&
      counter8 === 0 &&
      counter9 === 0 &&
      counter10 === 0 &&
      counter11 === 0 &&
      counter12 === 0 &&
      counter13 === 0 &&
      counter14 === 0
    ) {
      cartSection.setAttribute("data-visible", false);
    }

    cartItem12.innerHTML = `${counter12}`;
  }
});

plusBtn13.addEventListener("click", function () {
  if (loggedIn) {
    if (counter13 !== 9) {
      counter13 += 1;

      totalCounter += 1;

      cartPrice13 += price13;
      itemPriceFinal13.innerHTML = `₹ ${cartPrice13}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price13;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber13.innerHTML = `${counter13} ×`;

      if (counter13 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem13.innerHTML = `${counter13}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
minusBtn13.addEventListener("click", function () {
  if (counter13 !== 0) {
    counter13 -= 1;

    totalCounter -= 1;

    cartPrice13 -= price13;
    itemPriceFinal13.innerHTML = `₹ ${cartPrice13}`;

    totalAmountOfCart -= price13;
    totalAmountId.innerHTML = `${totalAmountOfCart}`;
    totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

    totalItems.innerHTML = `${totalCounter}`;

    finalCartItemNumber13.innerHTML = `${counter13} ×`;

    if (
      counter1 === 0 &&
      counter2 === 0 &&
      counter3 === 0 &&
      counter4 === 0 &&
      counter5 === 0 &&
      counter6 === 0 &&
      counter7 === 0 &&
      counter8 === 0 &&
      counter9 === 0 &&
      counter10 === 0 &&
      counter11 === 0 &&
      counter12 === 0 &&
      counter13 === 0 &&
      counter14 === 0
    ) {
      cartSection.setAttribute("data-visible", false);
    }

    cartItem13.innerHTML = `${counter13}`;
  }
});
plusBtn14.addEventListener("click", function () {
  if (loggedIn) {
    if (counter14 !== 9) {
      counter14 += 1;

      totalCounter += 1;

      cartPrice14 += price14;
      itemPriceFinal14.innerHTML = `₹ ${cartPrice14}`;

      totalItems.innerHTML = `${totalCounter}`;
      totalAmountOfCart += price14;
      totalAmountId.innerHTML = `${totalAmountOfCart}`;
      totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

      finalCartItemNumber14.innerHTML = `${counter14} ×`;

      if (counter14 !== 0) {
        cartSection.setAttribute("data-visible", true);
      }

      cartItem14.innerHTML = `${counter14}`;
    } else {
      maxLimit.classList.remove("hdne");
      overlayed3.classList.remove("hdne");
    }
  } else {
    lgPopUp.classList.remove("hdne");
    overlayed2.classList.remove("hdne");
    lgButton.classList.remove("hdne");
  }
});
minusBtn14.addEventListener("click", function () {
  if (counter14 !== 0) {
    counter14 -= 1;

    totalCounter -= 1;

    cartPrice14 -= price14;
    itemPriceFinal14.innerHTML = `₹ ${cartPrice14}`;

    totalAmountOfCart -= price14;
    totalAmountId.innerHTML = `${totalAmountOfCart}`;
    totalAmountExtended.innerHTML = `${totalAmountOfCart}`;

    totalItems.innerHTML = `${totalCounter}`;

    finalCartItemNumber14.innerHTML = `${counter14} ×`;

    if (
      counter1 === 0 &&
      counter2 === 0 &&
      counter3 === 0 &&
      counter4 === 0 &&
      counter5 === 0 &&
      counter6 === 0 &&
      counter7 === 0 &&
      counter8 === 0 &&
      counter9 === 0 &&
      counter10 === 0 &&
      counter11 === 0 &&
      counter12 === 0 &&
      counter13 === 0 &&
      counter14 === 0
    ) {
      cartSection.setAttribute("data-visible", false);
    }

    cartItem14.innerHTML = `${counter14}`;
  }
});

///////////////////////////////////////////

////////////////////////////////////////////

const lgButton = document.querySelector(".btn--login-2");
const lgPopUp = document.querySelector(".login--req");
const overlayed2 = document.querySelector(".overlayed2");

const openModal2 = function () {
  lgButton.classList.add("hdne");
  lgPopUp.classList.add("hdne");
  overlayed2.classList.add("hdne");
  popup.classList.remove("hdn");
  overlay.classList.remove("hdn");
  close.classList.remove("hdn");
};
const closeModal2 = function () {
  lgButton.classList.add("hdne");
  lgPopUp.classList.add("hdne");
  overlayed2.classList.add("hdne");
};

lgButton.addEventListener("click", openModal2);
overlayed2.addEventListener("click", closeModal2);

////////////////////////////////////////////////

const okBtn = document.querySelector(".ok--btn");
const overlayed3 = document.querySelector(".overlayed3");
const maxLimit = document.querySelector(".max--limit");

const closeModal3 = function () {
  // lgButton.classList.add("hdne");
  maxLimit.classList.add("hdne");
  overlayed3.classList.add("hdne");
};
okBtn.addEventListener("click", closeModal3);
overlayed3.addEventListener("click", closeModal3);

///////////////////////////////////////////////

const extendedCartSection = document.querySelector(".cart--section--extended");
const upBtn = document.getElementById("up--btn");
const closingBtn = document.querySelector(".close--btn");

upBtn.addEventListener("click", () => {
  const appearing = extendedCartSection.getAttribute("data-visible");

  ///////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // console.log(appearing);
  if (appearing === "false") {
    extendedCartSection.setAttribute("data-visible", true);
    // console.log(appearing);
    cartSection.setAttribute("data-visible", false);
  }
});

closingBtn.addEventListener("click", () => {
  const appearing2 = extendedCartSection.getAttribute("data-visible");
  extendedCartSection.setAttribute("data-visible", false);
  cartSection.setAttribute("data-visible", true);
  // console.log(appearing2);
});
///////////////////////////////////////////////////
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
  // loader.style.transitionDuration = "300ms";
});

/////////////////////////////////////////////////////

// console.log(scrollY);

// const heeder = document.querySelector(".head");

// const headCoords = heeder.getBoundingClientRect();
// console.log(headCoords);
// if (headCoords.top != 0) {
//   // backToTopBtn.setAttribute("data-visible", true);
//   console.log("berking");
// }

const backToTopBtn = document.querySelector(".back-to-top--btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    // console.log("berks");
    backToTopBtn.setAttribute("data-visible", true);
    // cartSection.setAttribute("data-visible", true);
  } else {
    // console.log("still berks");
    // cartSection.setAttribute("data-visible", false);
    backToTopBtn.setAttribute("data-visible", false);
  }
});

backToTopBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);
const downArrow = document.querySelector(".down-arrow");
window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    // console.log("berks");
    downArrow.setAttribute("data-visible", false);
    // cartSection.setAttribute("data-visible", true);
  }
});

// downArrow.addEventListener("click", () =>
//   window.scrollTo({ top: "20rem", behavior: "smooth" })
// );

///////////////////////////////////////////////

const paymentBtn = document.querySelector(".payment--btn");
const fnlBtn = document.querySelector(".fnl--btn");
const delivery = document.querySelector(".delivery");
const deliveryText = document.querySelector(".deliver--text");

paymentBtn.addEventListener("click", function () {
  //   extendedCartSection.setAttribute("data-visible", false);
  // cartSection.setAttribute("data-visible", false);
  delivery.classList.remove("hdne");
  deliveryText.classList.remove("hdne");
  // delivery.setAttribute("data-visible", true);
  // deliveryText.setAttribute("data-visible", true);
});

fnlBtn.addEventListener("click", function () {
  delivery.classList.add("hdne");
  deliveryText.classList.add("hdne");
  

  // delivery.setAttribute("data-visible", false);
  // deliveryText.setAttribute("data-visible", false);
  extendedCartSection.setAttribute("data-visible", false);
  cartSection.setAttribute("data-visible", false);
});



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

  var styles = `
  .btn--login {
    background: none;
    margin-left: 3rem;
    border: none;
    /* font-family: "Oswald", sans-serif; */
    font-family: "Dancing Script", cursive;
    border: 1.5px solid;
    border-radius: 2rem;
    padding: 1rem;
    /* background: linear-gradient(to top left, #31324285, #291f2780); */
    cursor: pointer;
    color: rgba(245, 237, 237, 0.513);
  
    font-size: 1.25rem;
  
    animation-name: lgin;
    animation-duration: 6s;
    animation-delay: 6s;
    /* animation-iteration-count: infinite; */
    /* animation-timing-function: ease-in-out; */
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
      /* transform: translateY(0rem); */
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
  
  /* 
  .overlay {
    background-color: #fff;
    z-index: 10;
  } */
  .head {
    min-height: calc(100vh+30vh) !important;
  }
  
  .texts {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  
  }
  
  .banner--text1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* padding-left: 40px; */
    /* padding-top: 2rem; */
    padding-left: 3rem;
    /* padding-bottom: 2rem; */
    padding-right: 3rem;
    /* margin: 30px; */
    /* margin-top: 8rem; */
    /* margin: 8rem 2rem 2rem 2rem; */
    /* margin-top: 8%;
    margin-bottom: 12%; */
    margin-top: 2em;
    margin-bottom: 2em;
  
    border: 8px solid rgba(255, 255, 255, 0.075);
    /* border: 8px solrgba(20, 20, 20, 0.173)42c; */
    border-radius: 15px;
    backdrop-filter: blur(8px);
    width: 70rem;
    color: rgba(255, 255, 255, 0.315);
    background-color: rgba(0, 0, 0, 0.506);
    box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
    font-family: "Dancing Script", cursive;
    font-size: 3rem;
    /* height: 30rem; */
    text-align: center;
  
    animation-name: banners;
    animation-duration: 12s;
    /* animation-iteration-count: infinite; */
  }
  
  @keyframes banners {
    0% {
      opacity: 0;
      /* transform: scaleX(-4rem); */
    }
  
    50% {
      opacity: 1;
    }
  
  }
  
  .about-linker {
    color: #03e9f4;
  }
  
  .welcome--text {
    padding-top: 4rem;
    /* padding-bottom: 0.5rem; */
    /* animation-delay: 5s; */
    /* animation-iteration-count: infinite; */
    /* opacity: 0; */
    /* transform: skewX(-5deg); */
    animation-name: welcome;
    animation-duration: 5s;
    animation-timing-function: ease-in-out;
  }
  
  @keyframes welcome {
    0% {
      transform: translateY(2rem);
      opacity: 0;
    }
  
    100% {
      transform: translateY(0rem);
      opacity: 1;
      /* transform: skewX(-5deg); */
    }
  }
  
  .restaurent--name--2 {
    font-family: "Monoton", cursive;
    /* padding-top: 0.5rem; */
    font-size: 4rem;
    transform: translateY(-1.5rem);
    animation-name: rest123;
    animation-duration: 5s;
    /* animation-delay: 5s; */
    animation-timing-function: ease-in-out;
  }
  
  .restaurent--name {
    font-family: "Monoton", cursive;
    /* padding-top: 0.5rem; */
    /* padding-bottom: 3rem; 
    */
    font-size: 7rem;
    padding-bottom: 3rem;
    animation-name: rest;
    animation-duration: 5s;
    /* animation-delay: 5s; */
    animation-timing-function: ease-in-out;
    text-align: center;
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
  
  @keyframes rest123 {
    0% {
      transform: translateY(-4rem);
      opacity: 0;
    }
  
    100% {
      transform: translateY(-1.5rem);
      opacity: 1;
    }
  }
  
  .btn--explore {
    background: none;
  
    border: none;
    /* font-family: "Oswald", sans-serif; */
    font-family: "Dancing Script", cursive;
    border: 1.5px solid;
    border-radius: 2rem;
    padding: 1rem;
    /* background: linear-gradient(to top left, #31324285, #291f2780); */
    /* background-color: rgba(245, 237, 237, 0.513); */
    /* backdrop-filter: blur(5px); */
    cursor: pointer;
    color: rgba(245, 237, 237, 0.513);
  
    font-size: 1.5rem;
    /* border: none; */
    padding-left: 3rem;
    padding-right: 3rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    transform: translateY(-2rem);
    animation-name: exp;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-delay: 10s;
    /* animation-timing-function: ease-in-out; */
    /* animation: exp2 4s linear infinite; */
    opacity: 0;
  
    /* transition-duration: 800ms; */
  }
  
  @keyframes exp {
    0% {
      /* transform: translateY(-2rem); */
      /* transform: scale(0rem); */
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
      /* padding-left: 3rem; */
      /* padding-right: 3rem; */
    }
  
    100% {
      opacity: 1;
      /* transform: translateY(0rem); */
      /* transform: scale(2rem); */
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
    padding-left: 3rem;
    padding-right: 3rem;
  }
  
  
  .section--1 {
    background-color: rgb(109, 109, 109);
    /* width: 100%; */
    background-image: url(sebastian-schuppik-H7xTpvBjJS4-unsplash.jpg);
  
    height: 50vh;
    height: 100vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 100vw; */
    overflow: hidden;
  }
  
  .abtus {
    background-color: rgba(0, 0, 0, 0.466);
    width: 100vw;
    height: 50vh;
    backdrop-filter: blur(4px);
    color: #03e8f4af;
    font-family: "Dancing Script", cursive;
    font-size: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .abtus>h1 {
    font-family: "Monoton", cursive;
  }
  
  /* .banner--text2 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 11rem;
    margin-bottom: 10rem;
    border: 8px solid rgba(255, 255, 255, 0.075);
    border-radius: 15px;
    backdrop-filter: blur(5px);
    width: 60rem;
    height: 4rem;
    color: rgba(255, 255, 255, 0.459);
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  } */
  
  .blurred--section {
    /* padding-left: 40px; */
    /* padding-top: 8rem; */
    /* padding-bottom: 20px; */
    /* margin: 30px; */
    /* border: 8px solid rgba(255, 255, 255, 0.075); */
    /* border-radius: 15px; */
    /* -webkit-backdrop-filter: blur(9px); */
    /* box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3); */
    width: 100%;
    height: 125vh;
    color: rgba(0, 0, 0, 0.856);
    /* background-color: rgba(0, 0, 0, 0.377); */
    /* backdrop-filter: blur(5px); */
    /* background-color: #fff; */
    background: linear-gradient(to top left, #28d4ffb6, #36a9adb7);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .discover {
    font-family: "Dancing Script", cursive;
    transform: translate(10rem, -20rem);
    font-size: 7rem;
    padding-bottom: 10rem;
    color: #be3c3c98;
  }
  
  .menus {
    /* font-family: "Monoton", cursive; */
    /* font-family: "Dancing Script", cursive; */
    /* font-family: "Oswald", sans-serif; */
    font-family: "Bebas Neue", cursive;
  
    /* transform: translateY(-14rem); */
    /* transform: translateX(-2rem); */
    font-size: 6rem;
    color: #ffffff38;
    padding-bottom: 10rem;
    transform: translate(-15rem, -12.75rem);
  }
  
  /* SLIDER */
  
  .slider {
    width: 100%;
    height: 125vh;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  
    /* IN THE END */
    overflow: hidden;
  }
  
  .slide {
    position: absolute;
    /* top: 0; */
    width: 50%;
    height: 50%;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: 0.95;
    /* THIS creates the animation! */
    transition: transform 1s;
    padding-top: 9rem;
  }
  
  .slide>img {
    /* Only for images that have different size than slide */
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    /* padding: 0 1rem 0 1rem; */
    /* margin-right: 3rem; */
    /* margin-left: 3rem; */
  }
  
  .cuisine {
    font-size: 3rem;
    margin: 1rem;
    /* text-transform: uppercase; */
    /* box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4; */
    color: rgba(245, 237, 237, 0.89);
    font-family: "Dancing Script", cursive;
  }
  
  .slider__btn {
    position: absolute;
    top: 50%;
    z-index: 10;
  
    border: none;
    background: rgba(255, 255, 255, 0.7);
    font-family: inherit;
    color: #333;
    border-radius: 50%;
    height: 5.5rem;
    width: 5.5rem;
    font-size: 3.25rem;
    cursor: pointer;
  }
  
  .slider__btn--left {
    left: 10rem;
    transform: translate(-50%, -50%);
  }
  
  .slider__btn--right {
    right: 10rem;
    transform: translate(50%, -50%);
  }
  
  .dots {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
  }
  
  .dots__dot {
    border: none;
    background-color: #5a5858;
    opacity: 0.7;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    margin-right: 1.75rem;
    cursor: pointer;
    transition: all 0.5s;
  
    /* Only necessary when overlying images */
    /* box-shadow: 0 0.6rem 1.5rem rgba(0, 0, 0, 0.7); */
  }
  
  .dots__dot:last-child {
    margin: 0;
  }
  
  .dots__dot--active {
    /* background-color: #fff; */
    background-color: rgb(255, 250, 250);
    opacity: 1;
    box-shadow: 0 0 5px #03e9f4, 0 0 15px #03e9f4, 0 0 30px #03e9f4,
      0 0 60px #03e9f4;
  }
  
  .section--3 {
    overflow: hidden;
  
    background-color: rgba(255, 255, 255, 0.65);
    /* backdrop-filter: invert(0.2); */
  
    /* backdrop-filter: blur(5px); */
    backdrop-filter: hue-rotate(180deg) blur(5px);
    height: 100vh;
    background: linear-gradient(to top left, #28d4ff52, #36a9ad54);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .about-texts {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* padding-top: 1rem; */
    padding-bottom: 3rem;
    /* font-family: "Monoton", cursive; */
    font-family: "Dancing Script", cursive;
    font-size: 2rem;
    /* font-family: "Oswald", sans-serif; */
    color: rgba(0, 0, 0, 0.411);
  }
  
  .about-texts>h1 {
    color: #e022228c;
    font-family: "Monoton", cursive;
    font-size: 6rem;
  }
  
  .about-texts>h2 {
    color: hsla(0, 67%, 59%, 0.828);
    /* font-family: "Monoton", cursive; */
    font-size: 3rem;
  }
  
  .main-div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .imgs {
    width: 20%;
    transform: translateX(24rem);
    border-radius: 1rem;
    opacity: 1;
  }
  
  .imgs:hover {
    opacity: 1;
  }
  
  .bigimg {
    width: 80%;
    transform: translateX(-14rem);
    border-radius: 1rem;
    opacity: 1;
  }
  
  .bigimg:hover {
    opacity: 1;
  }
  
  .finale {
    background-color: rgb(109, 109, 109);
    /* width: 100%; */
    background-image: url(pexels-rachel-claire-4577179.jpg);
  
    height: 60vh;
    /* height: 100vh; */
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .abutus {
    background-color: rgba(0, 0, 0, 0.466);
    width: 100vw;
    height: 60vh;
    backdrop-filter: blur(2px);
    color: #03e8f4af;
    font-family: "Dancing Script", cursive;
    font-size: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .src {
    color: rgba(221, 33, 33, 0.637);
  }
  
  .discover--menu {
    width: 100%;
    /* height: 100vh; */
    background-color: rgba(0, 0, 0, 0.281);
    backdrop-filter: blur(6px);
    font-family: "Dancing Script", cursive;
    padding-bottom: 5rem;
  }
  
  .discover--menu>h1 {
    text-align: center;
    font-size: 7rem;
    padding-top: 6rem;
    padding-bottom: 4rem;
  
    color: #f5f5f5bc;
  }
  
  .main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  
  .wrap {
    margin: 2rem;
    transform-style: preserve-3d;
    transform: perspective(100rem);
    cursor: pointer;
  }
  
  .container {
    --rX: 0;
    --rY: 0;
    --bX: 50%;
    --bY: 80%;
    width: 10rem;
    height: 16rem;
    border: 1px solid var(--background-color);
    border-radius: 1.6rem;
    padding: 4rem;
    display: flex;
    align-items: flex-end;
    position: relative;
    transform: rotateX(calc(var(--rX) * 1deg)) rotateY(calc(var(--rY) * 1deg));
    /* background: linear-gradient(hsla(0, 0%, 100%, 0.1), hsla(0, 0%, 0%, 0.1)); */
    background-position: var(--bX) var(--bY);
    /* background-size: 100rem; */
    box-shadow: 0 0 3rem 0.5rem hsla(0, 0%, 0%, 0.2);
    transition: transform 1s 0s;
    padding-bottom: 5rem;
    /* opacity: 0.85; */
  }
  
  .container::before,
  .container::after {
    content: "";
    width: 2rem;
    height: 2rem;
    border: 5px solid rgb(255, 255, 255);
    position: absolute;
    z-index: 2;
    opacity: 0.7;
    transition: 0.3s;
  }
  
  .container::before {
    top: 2rem;
    right: 2rem;
    border-bottom-width: 0;
    border-left-width: 0;
  }
  
  .container::after {
    bottom: 2rem;
    left: 2rem;
    border-top-width: 0;
    border-right-width: 0;
  
  }
  
  .container--active {
    transition: none;
  }
  
  .container--1 {
    background: url(assets/burger-big.jpg);
  
  }
  
  .container--2 {
    /* filter: hue-rotate(80deg) saturate(140%); */
    background: url(assets/ggged2.jpg);
    /* filter: brightness(0.6); */
  }
  
  .container--3 {
    background: url(assets/2.jpg);
    /* opacity: 0.9; */
    /* filter: hue-rotate(160deg) saturate(140%); */
  }
  
  .container p {
    color: hsl(187, 100%, 50%);
    color: rgba(221, 39, 33, 0.651);
    color: rgba(235, 235, 235, 0.733);
  
    text-shadow: 3px 3px 5px #000000;
    font-size: 2.2rem;
    opacity: 1 !important;
    transform: translateY(1rem);
  }
  
  .wrap:hover .container::before,
  .wrap:hover .container::after {
    width: calc(100% - 4rem);
    height: calc(100% - 4rem);
  }
  
  /* .abs-site-link {
    position: fixed;
    bottom: 20px;
    left: 20px;
    color: hsla(0, 0%, 0%, 0.6);
    font-size: 1.6rem;
  } */
  
  .discover--menu-2 {
    width: 100%;
    /* height: 1080vh; */
    background-color: rgba(0, 0, 0, 0.425);
    backdrop-filter: blur(6px);
    font-family: "Dancing Script", cursive;
  }
  
  .discover--menu-2>h1 {
    text-align: center;
    font-size: 9rem;
    /* padding-top: 0.5rem; */
    padding-top: 3rem;
    padding-bottom: 4rem;
  
    color: #f5f5f5bc;
  }
  
  .discover--menu-2>img {
    width: 45%;
    border-radius: 1rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    cursor: none;
    /* padding: auto; */
    /* margin: 0 auto; */
    /* align-items: center; */
    /* justify-content: center; */
    -moz-box-shadow: 10px 10px 5px rgba(10, 10, 10, 0.452);
    -webkit-box-shadow: 10px 10px 5px rgba(10, 10, 10, 0.452);
    box-shadow: 10px 10px 9px rgba(10, 10, 10, 0.631);
    animation-name: cui;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  
  
  
  @keyframes cui {
    0% {
      transform: translateY(0rem);
    }
  
    25% {
      transform: translateY(-1.5rem);
    }
  
    50% {
      transform: translateY(0rem);
    }
  
    75% {
      transform: translateY(-1.5rem);
    }
  
    100% {
      transform: translateY(0rem);
    }
  }
  
  .disc-div {
    display: flex;
    /* flex-wrap: wrap; */
    align-items: center;
    justify-content: center;
    /* padding-top: 2rem;
    padding-bottom: 2rem; */
    padding: 2rem;
  }
  
  .disc-div>img {
    width: 25%;
    opacity: 0.8;
    border-radius: 1rem;
    -moz-box-shadow: 10px 10px 5px rgba(10, 10, 10, 0.452);
    -webkit-box-shadow: 10px 10px 5px rgba(10, 10, 10, 0.452);
    box-shadow: 10px 10px 9px rgba(10, 10, 10, 0.631);
    transition-duration: 300ms;
  }
  
  .disc-div>img:hover {
    cursor: pointer;
    animation-name: cui;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  
  .disc-div-2 {
    display: flex;
    flex-wrap: wrap;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  
  .disc-div-2>h1 {
    color: #f5f5f5de;
    font-size: 3.8rem;
  }
  
  .disc-div-2>h2 {
    color: #f5f5f59f;
    font-size: 2.4rem;
    padding-top: 0.6rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
  
  .lefty {
    text-align: left;
  }
  
  .righty {
    text-align: right;
  }
  
  .reserve {
    width: 100%;
    /* height: 300vh; */
    background-color: rgba(0, 0, 0, 0.521);
    backdrop-filter: blur(6px);
    font-family: "Dancing Script", cursive;
    padding-bottom: 3rem;
  }
  
  .reserve>h1 {
    text-align: center;
    font-size: 9rem;
    /* padding-top: 0.5rem; */
    padding-top: 1rem;
    padding-bottom: 1rem;
  
    color: #f5f5f5bc;
  }
  
  .namber {
    font-family: "Monoton", cursive;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .reserve>img {
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 1rem;
    -moz-box-shadow: 10px 10px 5px rgba(10, 10, 10, 0.452);
    -webkit-box-shadow: 10px 10px 5px rgba(10, 10, 10, 0.452);
    box-shadow: 10px 10px 9px rgba(10, 10, 10, 0.631);
    animation-name: cui;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  
  #booktable {
    padding-top: 5rem;
    padding-bottom: 6rem;
  }
  
  #callus {
    padding-top: 6rem;
    padding-bottom: 4rem;
  }
  
  #orr {
    font-size: 5rem;
    padding-top: 3rem;
    padding-top: 3rem;
    padding-bottom: 4rem;
  }
  
  .hide {
    display: none;
  }
  
  .hideno {
    display: block;
  }
  
  
  
  .section--footer-1 {
    overflow: hidden;
  
    width: 100%;
    min-height: calc(77vh+23vh);
    background-color: rgba(0, 0, 0, 0.753);
    padding-bottom: 0rem;
    /* background-color: #f5f5f57e; */
    backdrop-filter: blur(5px);
    /* padding-top: 5rem; */
    font-family: "Dancing Script", cursive;
    /* font-size: 5rem; */
    /* padding-left: 1rem; */
    /* padding-right: 1rem; */
  }
  
  .footer-div {
    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-direction: column; */
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
    /* padding-left: 2rem; */
  }
  
  .footer-div>div {
    padding-right: 6rem;
  }
  
  .res-logo {
    z-index: 5;
    width: 22%;
    padding-right: 3rem;
    /* padding-left: 4rem; */
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
    /* cursor: crosshair; */
  }
  
  .footer-txt-1 {
    color: #f5f5f57e;
    font-family: "Monoton", cursive;
    font-size: 2rem;
    /* padding-top: 0; */
    /* padding-left: 6rem; */
  }
  
  .footer-txt-2 {
    color: rgba(221, 39, 33, 0.651);
    font-size: 1.8rem;
    /* padding-left: 6rem; */
  }
  
  .footer-txt-3 {
    z-index: 10;
    color: #f5f5f57e;
    font-family: "Monoton", cursive;
    /* color: rgba(221, 39, 33, 0.651); */
    font-size: 2.6rem;
    padding-left: 1rem;
    padding-top: 1.4rem;
    transition-duration: 550ms;
  }
  
  .footer-txt-3:hover {
    /* padding-left: 3.4rem; */
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
    /* padding-left: 3rem; */
    padding-right: 3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    opacity: 0.65;
    /* border-radius: 3rem; */
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
  }
  
  .res-logo-3:hover {
    transform: scale(1.3) translateX(5px);
    opacity: 0.85;
    /* cursor: crosshair; */
  }
  
  .footer-2-div>h1 {
    color: #f5f5f57e;
    font-size: 2.5rem;
    padding-top: 2rem;
    padding-right: 9rem;
  }
  
  .section--footer-2 {
    overflow: hidden;
  
    width: 100%;
    height: 24vh;
    background-color: rgba(221, 39, 33, 0.651);
    /* background-color: #ff0022; */
    backdrop-filter: blur(5px);
    /* padding-top: 5rem; */
    font-family: "Dancing Script", cursive;
    /* font-size: 5rem; */
    /* padding-left: 1rem; */
    /* padding-right: 10rem; */
    /* display: flex; */
    /* align-items: centers; */
    /* justify-content: center; */
  }
  
  .footer-2-div {
    display: flex;
    /* align-items: center; */
    justify-content: center;
    /* flex-direction: column; */
    padding-left: 8rem;
    /* padding-right: 10rem; */
  }
  
  /* .section--footer-2 > h1 {
    color: #f5f5f57e;
    font-size: 3rem;
    padding-right: 16rem;
    text-align: center;
  } */
  
  .footer-2-div--2 {
    padding-top: 2.3rem;
  }
  
  .footer-2-div--2>h1 {
    /* padding-top: 3rem; */
    font-size: 2rem;
    opacity: 0.8;
  }
  
  .abcd {
    width: 50%;
    padding-top: 2rem;
    padding-right: 10rem;
    text-align: center;
    /* padding-bottom: 2rem; */
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
    /* padding-bottom: 2rem; */
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
  
  .down-arrow {
    display: block;
    width: 100%;
    height: 100vh;
    background-color: #00000036;
    background-color: #08c5ff21;
    background-color: rgba(250, 19, 77, 0.15);
    background-color: transparent;
    /* backdrop-filter: blur(13px); */
    position: fixed;
    z-index: 100;
    animation-name: bannersoi;
    animation-duration: 10s;
  
  }
  
  @keyframes bannersoi {
    0% {
      opacity: 0;
    }
  
    50% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
  }
  
  .arrow-img {
    /* overflow: hidden; */
    width: 6% !important;
    position: relative;
    bottom: -30%;
    left: 45%;
    padding: 1.5%;
    border-radius: 50%;
    opacity: 0.8;
    /* background: rgba(255, 255, 255, 0.085); */
    /* color: rgba(245, 237, 237, 0.89); */
    /* color: #000000; */
    background: #02b3bd;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
    border: 1.5px solid #03e9f4;
    opacity: 0.9;
    transition-duration: 400ms;
    transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
  }
  
  .arrow-img:hover {
    background: #03e9f4;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
    border: 1.5px solid #03e9f4;
    cursor: pointer;
    transform: scale(1.15);
    color: #2d2d2d;
  }
  
  
  .overlayed {
    width: 100%;
    height: 100%;
    background-color: #08c5ff21;
    background-color: rgba(250, 19, 77, 0.15);
    background-color: #00000036;
    /* background-color: rgba(255, 166, 0, 0.67); */
    backdrop-filter: blur(13px);
    position: fixed;
    top: 0;
    z-index: 100;
  
    font-family: "Dancing Script", cursive;
  
  }
  
  .forms-section {
    font-family: "Dancing Script", cursive;
    /* width: 50%; */
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    top: 0;
    /* left: 30%; */
    position: fixed;
    /* display: block;
    margin-left: auto;
    margin-right: auto; */
    margin-left: 21%;
    padding-top: 3%;
  }
  
  .closes {
    /* transform: translate(44rem, -20rem); */
    z-index: 1001;
  
    position: absolute;
    top: 2.2%;
    right: -35%;
    /* top: 1rem;
    right: 2.5rem; */
    font-size: 6rem;
    color: rgba(241, 37, 88, 0.479);
    color: rgba(255, 166, 0, 0.67);
  
    transition-duration: 200ms;
  
    /* backdrop-filter: blur(13px); */
    cursor: pointer;
    border: none;
    background: none;
  }
  
  .closes:hover {
  
    color: rgba(0, 0, 0, 0.335);
    color: rgb(245, 33, 86);
    color: rgba(255, 166, 0, 0.944);
  
  }
  
  
  #mail {
    opacity: 0.7;
    margin-top: 0;
    border-radius: 2rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 1px;
    font-size: 1.1rem;
    color: #000000ed;
    margin-bottom: 6px;
    padding-left: 17px;
    width: 80%;
    height: 1.9rem;
  
  }
  
  #name {
    opacity: 0.7;
    margin-top: 0;
    border-radius: 2rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 1px;
    font-size: 1.1rem;
    color: #000000ed;
    margin-bottom: 6px;
    padding-left: 17px;
    width: 50%;
    height: 1.9rem;
  }
  
  #phone {
    opacity: 0.7;
    margin-top: 0;
    border-radius: 2rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 1px;
    font-size: 1.1rem;
    color: #000000ed;
    margin-bottom: 6px;
    padding-left: 17px;
    width: 60%;
    height: 1.9rem;
  
  }
  
  #address {
    opacity: 0.7;
    margin-top: 0;
    border-radius: 2rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 1px;
    font-size: 1.1rem;
    color: #000000ed;
    margin-bottom: 6px;
    padding-left: 17px;
    width: 70%;
    height: 1.9rem;
  
  }
  
  #password {
    opacity: 0.7;
    margin-top: 0;
    border-radius: 2rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 1px;
    font-size: 1.1rem;
    color: #000000ed;
    margin-bottom: 6px;
    padding-left: 17px;
    width: 90%;
    height: 1.9rem;
  
  }
  
  
  .ch-fn {
    letter-spacing: 0.8px;
  
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
    font-family: "Dancing Script", cursive;
    /* font-family: "Monoton", cursive; */
    font-size: 1.2rem !important;
    padding-left: 15px;
    color: #000000 !important;
  }
  
  .ch-fn-2 {
    font-family: "Monoton", cursive;
    font-family: "Dancing Script", cursive;
  
    font-size: 1.4rem;
    /* color: #000000 !important; */
    /* font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif; */
    /* font-family: "Dancing Script", cursive !important; */
  
  }
  
  /* label[for=signup-email]{
    
  
    font-size: 1.2rem !important;
  
  }
  label[for=signup-password]{
    
  
    font-size: 1.2rem !important;
  
  }
  label[for=signup-email]{
    
  
    font-size: 1.2rem !important;
  
  }
  label[for=signup-email]{
    
  
    font-size: 1.2rem !important;
  
  }
  label[for=signup-email]{
    
  
    font-size: 1.2rem !important;
  
  } */
  
  #login-mail {
    opacity: 0.7;
    margin-top: 2px;
    border-radius: 2rem;
    margin-bottom: 10px;
    font-family: "Dancing Script", cursive;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    /* font-family: "Oswald", sans-serif; */
  
    letter-spacing: 1px;
    font-size: 1.1rem;
    color: #000000ed;
    width: 80%;
    height: 1.9rem;
    height: 2rem;
  
  
    /* padding-left: 30px; */
  }
  
  #login-password {
    opacity: 0.7;
    margin-top: 2px;
    border-radius: 2rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    /* font-family: "Oswald", sans-serif; */
  
    letter-spacing: 1px;
    font-size: 1.1rem;
    color: #000000ed;
    width: 90%;
    height: 1.9rem;
    height: 2rem;
  
  }
  
  #login-2 {
    opacity: 0.7;
    margin-top: 20px;
    pointer-events: none;
    border-radius: 2rem;
  
    width: 50%;
    display: none;
  }
  
  #login-3 {
    opacity: 0.7;
    margin-top: 20px;
    pointer-events: none;
    border-radius: 2rem;
  
    width: 60%;
    display: none;
  }
  
  #login-4 {
    opacity: 0.7;
    margin-top: 20px;
    margin-bottom: 5px;
    pointer-events: none;
    border-radius: 2rem;
  
    width: 70%;
    display: none;
  }
  
  /* label[for=login-2]{
  visibility: hidden;
  }
  label[for=login-3]{
  visibility: hidden;
  }
  label[for=login-4]{
  visibility: hidden;
  } */
  
  
  
  
  .section-title {
    font-family: "Dancing Script", cursive !important;
  
    font-size: 32px;
    letter-spacing: 1px;
    color: rgb(247, 67, 112);
    color: rgba(255, 166, 0, 0.944);
  
  }
  
  .forms {
    /* z-index: 10000; */
    /* height: 60%; */
    width: 50vw;
    height: 77vh;
    display: flex;
    align-items: flex-start;
    /* margin-top: 30px; */
    background-color: #ffffff41;
    background-color: rgba(0, 0, 0, 0);
    /* backdrop-filter: blur(13px); */
    /* padding-top: 3.5rem; */
    padding-bottom: 1rem;
    border-radius: 2rem;
    padding-left: 0rem;
    padding-right: 5rem;
    font-family: "Dancing Script", cursive !important;
  
    /* padding-left: 2rem; */
  }
  
  .form-wrapper {
    animation: hideLayer 0.3s ease-out forwards;
  }
  
  .form-wrapper.is-active {
    animation: showLayer 0.3s ease-in forwards;
  }
  
  @keyframes showLayer {
    50% {
      z-index: 1;
    }
  
    100% {
      z-index: 1;
    }
  }
  
  @keyframes hideLayer {
    0% {
      z-index: 1;
    }
  
    49.999% {
      z-index: 1;
    }
  }
  
  .switcher {
    position: relative;
    cursor: pointer;
    display: block;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    /* text-transform: uppercase; */
    font-family: inherit;
    font-size: 22px;
    letter-spacing: 0.5px;
    color: rgb(0, 0, 0);
    background-color: transparent;
    border: none;
    outline: none;
    transform: translateX(0);
    transition: all 0.3s ease-out;
    color: rgba(255, 109, 145, 0.63);
    color: rgba(255, 166, 0, 0.599);
  
  }
  
  .switcher-login {
    margin-right: 20%;
  }
  
  .switcher-signup {
    margin-left: 10%;
    /* transform: translateX(90px); */
  
  }
  
  .form-wrapper.is-active .switcher-login {
    color: rgb(255, 51, 102);
    color: rgba(255, 166, 0, 0.956);
  
    transform: translateX(90%);
  }
  
  .form-wrapper.is-active .switcher-signup {
    color: #fff;
    color: rgb(245, 52, 100);
    color: rgb(255, 166, 0);
  
    transform: translateX(-60%);
  }
  
  #sign-form {
    height: 10%;
  }
  
  #log-form {
    height: 10% !important;
  }
  
  .underline {
    position: absolute;
    bottom: -5px;
    left: 0;
    overflow: hidden;
    pointer-events: none;
    width: 100%;
    height: 2px;
  }
  
  .underline::before {
    content: "";
    position: absolute;
    top: 0;
    left: inherit;
    display: block;
    width: inherit;
    height: inherit;
    background-color: currentColor;
    transition: transform 0.2s ease-out;
  }
  
  .switcher-login .underline::before {
    transform: translateX(101%);
  }
  
  .switcher-signup .underline::before {
    transform: translateX(-101%);
  }
  
  .form-wrapper.is-active .underline::before {
    transform: translateX(0);
  }
  
  .form {
    overflow: hidden;
    min-width: 260px;
    margin-top: 60px;
    padding: 40px 25px;
    border-radius: 1rem;
    transform-origin: top;
  }
  
  .form-login {
    animation: hideLogin 0.3s ease-out forwards;
    width: 26vw;
    /* height: 60vh; */
    padding-top: 20px;
    padding-bottom: 29px;
    -moz-box-shadow: 10px 10px 5px rgba(10, 10, 10, 0.226);
    -webkit-box-shadow: 10px 10px 5px rgba(10, 10, 10, 0.226);
    box-shadow: 10px 10px 12px rgba(10, 10, 10, 0.226);
    /* background-color: rgb(0, 0, 0); */
  }
  
  .form-wrapper.is-active .form-login {
    animation: showLogin 0.3s ease-in forwards;
  }
  
  @keyframes showLogin {
    0% {
      background: rgba(235, 97, 235, 0.363);
      background: rgba(245, 52, 100, 0.239);
      background: rgba(255, 166, 0, 0.375);
  
      backdrop-filter: blur(20px);
  
      transform: translate(40%, 10px);
    }
  
    50% {
      transform: translate(0, 0);
    }
  
    100% {
      background-color: rgba(235, 97, 235, 0.376);
      background-color: rgba(245, 52, 100, 0.226);
      background-color: rgba(255, 166, 0, 0.375);
  
  
      backdrop-filter: blur(20px);
      transform: translate(35%, -20px);
    }
  }
  
  @keyframes hideLogin {
    0% {
      /* background-color: #fff; */
      background-color: rgba(0, 0, 0, 0.52);
      background-color: rgba(235, 97, 235, 0.363);
      background-color: rgba(245, 52, 100, 0.226);
      background-color: rgba(255, 166, 0, 0.297);
  
  
      backdrop-filter: blur(20px);
      transform: translate(35%, -20px);
    }
  
    50% {
      transform: translate(0, 0);
    }
  
    100% {
      background: rgba(235, 97, 235, 0.226);
      background: rgba(245, 52, 100, 0.226);
      background: rgba(255, 166, 0, 0.298);
  
  
      backdrop-filter: blur(20px);
      transform: translate(40%, 10px);
    }
  }
  
  .form-signup {
    animation: hideSignup 0.3s ease-out forwards;
    width: 26vw;
    /* height: 56vh; */
    padding-right: 2.5rem;
    padding-top: 20px;
    padding-bottom: 23px;
    -moz-box-shadow: 10px 10px 5px rgba(10, 10, 10, 0.226);
    -webkit-box-shadow: 10px 10px 5px rgba(10, 10, 10, 0.233);
    box-shadow: -10px 10px 9px rgba(10, 10, 10, 0.219);
  }
  
  .form-wrapper.is-active .form-signup {
    animation: showSignup 0.3s ease-in forwards;
  }
  
  @keyframes showSignup {
    0% {
      background: rgba(235, 76, 76, 0.596);
      background: rgba(245, 52, 100, 0.226);
      background: rgba(255, 166, 0, 0.292);
  
      backdrop-filter: blur(20px);
  
      transform: translate(-40%, 10px) scaleY(0.8);
    }
  
    50% {
      transform: translate(0, 0) scaleY(0.8);
    }
  
    100% {
      /* background-color: #fff; */
      background-color: rgba(245, 52, 100, 0.226);
      background-color: rgba(255, 166, 0, 0.301);
  
      /* background-color: rgba(235, 97, 235, 0.376); */
  
      backdrop-filter: blur(20px);
      transform: translate(-35%, -20px) scaleY(1);
    }
  }
  
  @keyframes hideSignup {
    0% {
      /* background-color: #fff; */
      background-color: rgba(245, 52, 100, 0.226);
      background-color: rgba(255, 166, 0, 0.272);
  
  
      backdrop-filter: blur(20px);
      transform: translate(-35%, -20px) scaleY(1);
    }
  
    50% {
      transform: translate(0, 0) scaleY(0.8);
    }
  
    100% {
      background: rgba(245, 52, 100, 0.226);
      background: rgba(255, 166, 0, 0.289);
  
      backdrop-filter: blur(20px);
      transform: translate(-40%, 10px) scaleY(0.8);
    }
  }
  
  .form fieldset {
    position: relative;
    opacity: 0;
    margin: 0;
    padding: 0;
    border: 0;
    transition: all 0.3s ease-out;
  }
  
  .form-login fieldset {
    transform: translateX(-50%);
    padding-right: 2rem;
  }
  
  .form-signup fieldset {
    transform: translateX(50%);
  }
  
  .form-wrapper.is-active fieldset {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.4s ease-in, transform 0.35s ease-in;
  }
  
  .form legend {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    /* display: none; */
  }
  
  .input-block {
    /* margin-bottom: 20px; */
    line-height: 1.5;
  }
  
  .input-block label {
    font-size: 1.5rem;
    color: #a1b4b4;
    padding-top: 1rem;
    /* margin-top: 1rem; */
  }
  
  .input-block input {
    display: block;
    width: 100%;
    margin-top: 8px;
    padding-right: 15px;
    padding-left: 15px;
    font-size: 16px;
    line-height: 40px;
    color: #000000;
    background: #eef9fe2d;
  
    border: 1px solid #6e6f702c;
    border-radius: 2px;
    /* font-family: "Dancing Script", cursive; */
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  }
  
  .form [type="submit"] {
    opacity: 0;
    display: block;
    min-width: 120px;
    margin: 15px auto 10px;
    font-size: 1.5rem;
    line-height: 40px;
    /* border-radius: 25px; */
    border: none;
    transition: all 0.3s ease-out;
  }
  
  .form-wrapper.is-active .form [type="submit"] {
    opacity: 1;
    transform: translateX(0);
    /* transform: translate(-0.5rem, 7rem); */
  
    transition: all 0.4s ease-in;
  }
  
  .form-wrapper.is-active .form .btn-login {
    opacity: 1;
    transform: translateX(0);
    transform: translate(-0.5rem, 0.5rem);
  
    transition: all 0.4s ease-in;
  }
  
  
  .btn-login {
    background: #00000056;
    color: rgba(0, 0, 0, 0.788);
    background: #c2f51b18;
  
    transform: translate(-0.5rem, 7rem);
  
    font-size: 1.2rem !important;
    letter-spacing: 1px;
    /* margin-top: 10rem; */
    padding-left: 1.3rem;
    padding-right: 1.3rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
  
    -webkit-box-shadow: 7px 7px 7px rgba(10, 10, 10, 0.226);
    -moz-box-shadow: 7px 7px 7px rgba(10, 10, 10, 0.219);
    box-shadow: 7px 7px 7px rgba(10, 10, 10, 0.397);
    border-radius: 2.3rem;
    cursor: pointer;
  }
  
  .btn-login:hover {
    color: rgba(251, 253, 255, 0.876);
    color: rgba(0, 0, 0, 0.788);
  
    transform: translate(2rem, 4rem);
    -webkit-box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.479);
    -moz-box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.479);
    box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.479);
  }
  
  .btn-login:active {
    color: rgb(251, 253, 255);
    color: rgba(0, 0, 0, 0.788);
  
    /* transform: translate(1rem, 3rem); */
    -webkit-box-shadow: 3px 3px 3px rgba(10, 10, 10, 0.226);
  
    -moz-box-shadow: 3px 3px 3px rgba(10, 10, 10, 0.226);
  
    box-shadow: 3px 3px 3px rgba(10, 10, 10, 0.226);
  }
  
  .btn-signup {
    color: rgba(251, 253, 255, 0.788);
  
    background: #0000001e;
    background: #0000001e;
    color: rgba(0, 0, 0, 0.788);
    background: #c2f51b18;
  
  
    /* box-shadow: inset 0 0 0 2px #a7e245; */
    transform: translateX(30%);
    /* font-size: 19rem; */
    -webkit-box-shadow: -7px 7px 7px rgba(10, 10, 10, 0.226);
    -moz-box-shadow: -7px 7px 7px rgba(10, 10, 10, 0.226);
    box-shadow: -7px 7px 7px rgba(10, 10, 10, 0.397);
    border-radius: 1.7rem;
    font-size: 1.2rem !important;
    letter-spacing: 1px;
    /* margin-top: 10rem; */
    padding-left: 1.3rem;
    padding-right: 1.3rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    cursor: pointer;
  }
  
  .btn-signup:hover {
    color: rgba(251, 253, 255, 0.876);
    color: rgba(0, 0, 0, 0.788);
  
  
    transform: translateX(2rem);
    -webkit-box-shadow: -5px 5px 5px rgba(10, 10, 10, 0.479);
    -moz-box-shadow: -5px 5px 5px rgba(10, 10, 10, 0.479);
    box-shadow: -5px 5px 5px rgba(10, 10, 10, 0.479);
  }
  
  .btn-signup:active {
    color: rgb(251, 253, 255);
    color: rgba(0, 0, 0, 0.788);
  
  
    /* transform: translate(1rem, 3rem); */
    -webkit-box-shadow: -3px 3px 3px rgba(10, 10, 10, 0.226);
    -moz-box-shadow: -3px 3px 3px rgba(10, 10, 10, 0.226);
    box-shadow: -3px 3px 3px rgba(10, 10, 10, 0.226);
  }
  
  .hdn {
    /* opacity: 0; */
    display: none;
  }
  
  .map {
    padding-left: 4rem;
    padding-right: 4rem;
    /* padding-bottom: 13rem; */
  }
  
  .maps {
    width: 100%;
    opacity: 0.75;
    border-radius: 2rem;
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
    /* color: rgba(9, 255, 243, 0.534); */
  
    opacity: 0;
    transition: opacity 200ms;
  }
  
  .lenk:hover {
    transform: none;
  }
  
  .lenk:hover::before {
    opacity: 1;
  }
  
  .add-to-cart--button {
    display: none !important;
    width: 5.4rem;
    /* height: 5rem; */
    margin-top: 3rem;
    /* text-align: center; */
  
    margin-left: auto;
    margin-right: auto;
  
    border: none;
    background: none;
  
    border-radius: 3rem;
  
    background: rgba(255, 255, 255, 0.308);
    background: rgba(0, 255, 234, 0.315);
  
    backdrop-filter: blur(6px);
  
    cursor: pointer;
  
    font-size: 1.8rem;
  
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  
    padding: 1.2rem 1.2rem 1.2rem 1.2rem;
  
    /* padding-bottom: 2rem; */
    /* padding: auto; */
  
    /* display: none; */
    visibility: hidden;
  }
  
  .add-to-cart--button:hover {
    background: rgba(0, 255, 234, 0.664);
    backdrop-filter: blur(6px);
  }
  
  
  .cart-number {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  
    font-size: 1.9rem;
  
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
  
  .lord-icons {
    transform: translateY(-0.6rem);
  }
  
  .lord-icons-2 {
    transform: translateY(-0.2rem);
    padding-right: 0.5rem;
  }
  
  .lord-icons-3 {
    /* transform: translateY(-0.2rem); */
    padding-right: 0.5rem;
  }
  
  .lord-icons-4 {
    /* transform: translateY(-0.2rem); */
    padding-right: 1.5rem;
    /* padding-bottom: 0.6rem; */
  }
  
  .cart-btn {
    /* width: 4rem; */
    /* padding: 0.3rem 0.5rem 0.3rem 0.5rem; */
    /* padding: 0.2rem 0.2rem 0.2rem 0.2rem; */
    padding: 0.1rem;
  
    background: rgba(240, 34, 82, 0.492);
  
    background: rgba(255, 166, 0, 0.3);
  
    background: transparent;
  
    /* backdrop-filter: blur(6px); */
  
    cursor: pointer;
  
    font-size: 1.4rem;
  
    border-radius: 3rem;
  
    border: 2px rgba(0, 0, 0, 0.298) solid;
    border: none;
  
    transition-duration: 200ms;
  }
  
  .cart-btn:hover {
    /* background: rgba(0, 255, 234, 0.664);
    background: rgba(162, 23, 62, 0.816);
    background: rgba(230, 54, 95, 0.654);
    background: rgba(245, 23, 75, 0.492);
  
    background: rgba(255, 166, 0, 0.55); */
  
    /* backdrop-filter: blur(6px); */
    transform: scale(1.08);
    border: 2px rgba(0, 0, 0, 0.387) solid;
    border: none;
    /* border: 4px rgba(0, 0, 0, 0) solid; */
  }
  
  .cart-btn:active {
    background: rgba(188, 48, 88, 0.827);
    background: rgba(227, 72, 108, 0.654);
    background: rgba(165, 2, 40, 0.492);
  
    background: rgba(255, 166, 0, 0.489);
  
    transform: scale(0.95);
    border: none;
    border: 1px rgba(0, 0, 0, 0.387) solid;
  
    /* border: 4px rgba(0, 0, 0, 0) solid; */
    /* border: 3px rgba(0, 0, 0, 0.157) solid; */
  }
  
  .cart--buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  
    width: 10rem;
    height: 3.5rem;
  
    /* transform: translate(130%,50%); */
    z-index: 5;
    margin: auto;
  
    background: rgba(250, 0, 0, 0.377);
  
    background: rgba(255, 166, 0, 0.5);
    background: rgba(255, 166, 0, 0.655);
  
    backdrop-filter: blur(5px);
  
    border-radius: 3rem;
  
    /* visibility: hidden; */
  }
  
  .cart--buttons--1 {
    display: flex;
    align-items: center;
    justify-content: center;
  
    width: 10rem;
    height: 3.5rem;
  
    /* transform: translate(17rem, -4.5rem); */
    /* transform: translate(230%,50%); */
    margin: auto;
  
    z-index: 5;
  
    background: rgba(250, 0, 0, 0.377);
  
    border-radius: 3rem;
  
    /* visibility: hidden; */
    background: rgba(255, 166, 0, 0.5);
    backdrop-filter: blur(5px);
    background: rgba(255, 166, 0, 0.655);
  }
  
  .cart--buttons--2 {
    display: flex;
    align-items: center;
    justify-content: center;
  
    width: 10rem;
    height: 3.5rem;
  
    /* transform: translate(15.3rem, -4.5rem);
      transform: translate(160%,50%); */
    margin: auto;
  
    z-index: 5;
  
    background: rgba(250, 0, 0, 0.377);
  
    border-radius: 3rem;
  
    /* visibility: hidden; */
    background: rgba(255, 166, 0, 0.5);
    backdrop-filter: blur(5px);
    background: rgba(255, 166, 0, 0.655);
  }
  
  .cart--buttons--3 {
    display: flex;
    align-items: center;
    justify-content: center;
  
    width: 10rem;
    height: 3.5rem;
  
    /* transform: translate(19.4rem, -4.5rem); */
    z-index: 5;
    margin: auto;
  
  
    background: rgba(250, 0, 0, 0.377);
  
    border-radius: 3rem;
  
    /* visibility: hidden; */
    background: rgba(255, 166, 0, 0.5);
    backdrop-filter: blur(5px);
    background: rgba(255, 166, 0, 0.655);
  }
  
  .cart--buttons--4 {
    display: flex;
    align-items: center;
    justify-content: center;
  
    width: 10rem;
    height: 3.5rem;
  
    /* transform: translate(17rem, -4.5rem); */
    margin: auto;
  
    z-index: 5;
  
    background: rgba(250, 0, 0, 0.377);
  
    border-radius: 3rem;
  
    /* visibility: hidden; */
    background: rgba(255, 166, 0, 0.5);
    backdrop-filter: blur(5px);
    background: rgba(255, 166, 0, 0.655);
  }
  
  .cart--buttons--5 {
    display: flex;
    align-items: center;
    justify-content: center;
  
    width: 10rem;
    height: 3.5rem;
  
    /* transform: translate(22.5rem, -4.5rem); */
    margin: auto;
  
    z-index: 5;
  
    background: rgba(250, 0, 0, 0.377);
  
    border-radius: 3rem;
  
    /* visibility: hidden; */
    background: rgba(255, 166, 0, 0.5);
    backdrop-filter: blur(5px);
    background: rgba(255, 166, 0, 0.655);
  }
  
  .cart--buttons--6 {
    display: flex;
    align-items: center;
    justify-content: center;
  
    width: 10rem;
    height: 3.5rem;
  
    /* transform: translate(19.25rem, -4.5rem); */
    margin: auto;
  
    z-index: 5;
  
    background: rgba(250, 0, 0, 0.377);
  
    border-radius: 3rem;
  
    /* visibility: hidden; */
    background: rgba(255, 166, 0, 0.5);
    backdrop-filter: blur(5px);
    background: rgba(255, 166, 0, 0.655);
  }
  
  .cart--buttons--7 {
    display: flex;
    align-items: center;
    justify-content: center;
  
    width: 10rem;
    height: 3.5rem;
  
    /* transform: translate(16.3rem, -4.5rem); */
    margin: auto;
  
    z-index: 5;
  
    background: rgba(250, 0, 0, 0.377);
  
    border-radius: 3rem;
  
    /* visibility: hidden; */
    background: rgba(255, 166, 0, 0.5);
    backdrop-filter: blur(5px);
    background: rgba(255, 166, 0, 0.655);
  }
  
  .cart--buttons--8 {
    display: flex;
    align-items: center;
    justify-content: center;
  
    width: 10rem;
    height: 3.5rem;
  
    /* transform: translate(21rem, -4.5rem); */
    margin: auto;
  
    z-index: 5;
  
    background: rgba(250, 0, 0, 0.377);
  
    border-radius: 3rem;
  
    /* visibility: hidden; */
    background: rgba(255, 166, 0, 0.5);
    backdrop-filter: blur(5px);
    background: rgba(255, 166, 0, 0.655);
  }
  
  .cart--buttons--9 {
    display: flex;
    align-items: center;
    justify-content: center;
  
    width: 10rem;
    height: 3.5rem;
  
    /* transform: translate(15.7rem, -4.5rem); */
    margin: auto;
  
    z-index: 5;
  
    background: rgba(250, 0, 0, 0.377);
  
    border-radius: 3rem;
  
    /* visibility: hidden; */
    background: rgba(255, 166, 0, 0.5);
    backdrop-filter: blur(5px);
    background: rgba(255, 166, 0, 0.655);
  }
  
  .cart--buttons--10 {
    display: flex;
    align-items: center;
    justify-content: center;
  
    width: 10rem;
    height: 3.5rem;
  
    /* transform: translate(18rem, -4.5rem); */
    margin: auto;
  
    z-index: 5;
  
    background: rgba(250, 0, 0, 0.377);
  
    border-radius: 3rem;
  
    /* visibility: hidden; */
    background: rgba(255, 166, 0, 0.5);
    backdrop-filter: blur(5px);
    background: rgba(255, 166, 0, 0.655);
  }
  
  .cart--button--11 {
    display: flex;
    align-items: center;
    justify-content: center;
  
    width: 10rem;
    height: 3.5rem;
  
    /* transform: translate(18.6rem, -4.5rem); */
    margin: auto;
  
    z-index: 5;
  
    background: rgba(250, 0, 0, 0.377);
  
    border-radius: 3rem;
  
    /* visibility: hidden; */
    background: rgba(255, 166, 0, 0.5);
    backdrop-filter: blur(5px);
    background: rgba(255, 166, 0, 0.655);
  }
  
  .cart--button--12 {
    display: flex;
    align-items: center;
    justify-content: center;
  
    width: 10rem;
    height: 3.5rem;
  
    /* transform: translate(6.3rem, -4.5rem); */
    margin: auto;
  
    z-index: 5;
  
    background: rgba(250, 0, 0, 0.377);
  
    border-radius: 3rem;
  
    /* visibility: hidden; */
    background: rgba(255, 166, 0, 0.5);
    backdrop-filter: blur(5px);
    background: rgba(255, 166, 0, 0.655);
  }
  
  .cart--button--13 {
    display: flex;
    align-items: center;
    justify-content: center;
  
    width: 10rem;
    height: 3.5rem;
  
    /* transform: translate(19rem, -4.5rem); */
    margin: auto;
  
    z-index: 5;
  
    background: rgba(250, 0, 0, 0.377);
  
    border-radius: 3rem;
  
    /* visibility: hidden; */
    background: rgba(255, 166, 0, 0.5);
    backdrop-filter: blur(5px);
    background: rgba(255, 166, 0, 0.655);
  }
  
  .overlayed2 {
    width: 100%;
    height: 100%;
    background-color: #00000036;
    background-color: #08c5ff21;
    background-color: rgba(29, 28, 28, 0.06);
    backdrop-filter: blur(12px);
    position: fixed;
    top: 0;
    z-index: 100;
  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
  
  .login--req {
    background-color: rgba(0, 0, 0, 0.597);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  
    padding: 2.6rem 5rem 2.6rem 5rem;
  
    border-radius: 1.4rem;
  
    /* margin-bottom: 3rem; */
  
    font-family: "Dancing Script", cursive;
    color: #03e8f4ae;
    color: #03e8f491;
    color: #ffffff91;
  
    font-size: 2.4rem;
    text-align: center;
  }
  
  .login--req>h1 {
    padding-bottom: 3.3rem;
  }
  
  .btn--login-2 {
    background: none;
    /* margin-left: 3rem; */
    border: none;
    /* font-family: "Oswald", sans-serif; */
    font-family: "Dancing Script", cursive;
    border: 1.5px solid;
    border-radius: 2rem;
    padding: 1rem 1.5rem;
    /* background: linear-gradient(to top left, #31324285, #291f2780); */
    cursor: pointer;
    color: rgba(245, 237, 237, 0.513);
  
    font-size: 1.2rem;
    animation-name: exp;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-delay: 0s;
  
    /* animation-iteration-count: infinite; */
    /* animation-timing-function: ease-in-out; */
    /* transition-duration: 50ms; */
    /* z-index: 100000; */
  }
  
  .btn--login-2:hover {
    color: rgba(245, 237, 237, 0.89);
    background: #03e9f4;
    color: #000000;
    border-radius: 2rem;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
    border: 1.5px solid #03e9f4;
  }
  
  .hdne {
    visibility: hidden;
  }
  
  .overlayed3 {
    width: 100%;
    height: 100%;
    background-color: #00000036;
    background-color: #08c5ff21;
    background-color: rgba(0, 0, 0, 0.387);
    background-color: rgba(0, 0, 0, 0.192);
  
    backdrop-filter: blur(20px);
    position: fixed;
    top: 0;
    z-index: 100;
  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
  
  .max--limit {
    background-color: rgba(0, 0, 0, 0.597);
  
  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    /* width: 80%; */
    padding: 2.6rem 5rem 2.6rem 5rem;
  
    border-radius: 1.4rem;
  
    /* backdrop-filter: blur(25px); */
    /* margin-bottom: 3rem; */
  
    font-family: "Dancing Script", cursive;
    font-size: 4.7rem;
    text-align: center;
  }
  
  .max--limit>h1 {
    color: rgba(221, 33, 33, 0.623);
    font-size: 4.5rem;
    /* font-family: "Monoton", cursive; */
  }
  
  .max--limit>h2 {
    font-size: 2rem;
    color: #03e8f457;
    color: #ffffff57;
  }
  
  .max--limit>h3 {
    font-size: 1.5rem;
    /* padding-top: 5rem; */
    color: #03e8f469;
    color: #ffffff57;
  }
  
  #nembers {
    font-family: "Monoton", cursive;
    font-size: 1rem;
  }
  
  .ok--btn {
    background: none;
    /* margin-left: 3rem; */
    border: none;
    /* font-family: "Oswald", sans-serif; */
    font-family: "Dancing Script", cursive;
    border: 1.5px solid;
    border-radius: 2rem;
    margin-top: 3rem;
    margin-bottom: 0.6rem;
  
    padding: 0.7rem 2.4rem;
    /* background: linear-gradient(to top left, #31324285, #291f2780); */
    cursor: pointer;
    color: rgba(245, 237, 237, 0.513);
  
    font-size: 1.3rem;
  }
  
  .ok--btn:hover {
    color: rgba(245, 237, 237, 0.761);
    background: #03e9f4;
    color: #000000;
    border-radius: 2rem;
    box-shadow: 0 0 5px rgba(3, 232, 244, 0.781),
      0 0 25px rgba(3, 232, 244, 0.766), 0 0 50px rgba(3, 232, 244, 0.768),
      0 0 100px rgba(3, 232, 244, 0.774);
    border: 1.5px solid #03e9f4;
  }
  
  .cart--section {
    /* overflow: hidden; */
  
    width: 100%;
    bottom: 0;
    height: 6rem;
    background-color: rgba(255, 166, 0, 0.67);
    backdrop-filter: blur(7px);
    position: fixed;
    z-index: 10;
  
    display: flex;
    /* align-items: center; */
    justify-content: center;
    /* visibility: hidden; */
    transform: translateY(200%);
    transition-duration: 300ms;
  }
  
  .cart--section>button {
    position: absolute;
    height: 1rem;
    font-size: 5rem;
    transform: translateY(-5rem);
    background: rgb(0, 0, 0);
    border: none;
  
    /* border-top-left-radius: 10.1rem; */
    /* border-top-right-radius: 10.1rem; */
    cursor: pointer;
    background: none;
    border-bottom: 5.003rem solid rgba(255, 166, 0, 0.67);
    border-left: 4rem solid transparent;
    border-right: 4rem solid transparent;
    backdrop-filter: blur(7px);
    /* height: 0; */
    /* width: 100px; */
    width: 17rem;
    /* visibility: hidden; */
    /* transform: translateY(100%); */
    transition-duration: 300ms;
  }
  
  .cart-div {
    /* width: 50%; */
    padding: 0 1rem;
  }
  
  #cart-id--1 {
    padding-right: 6rem;
  }
  
  #cart-id--2 {
    padding-left: 6rem;
  
  }
  
  .cart--section[data-visible="true"] {
    transform: translateY(0%);
  }
  
  .cart--section--extended {
    overflow: hidden;
  
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    background-color: rgba(255, 166, 0, 0.67);
    backdrop-filter: blur(7px);
    position: fixed;
    z-index: 12;
  
    /* transform: translateY(88%); */
    transform: translateY(100%);
    transition-duration: 600ms;
    /* visibility: hidden; */
  
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    text-align: center;
  }
  
  .close--btn {
    position: absolute;
    right: 3%;
  
  
    top: 2%;
    /* right: 0; */
    /* transform: translate(45vw, 2vh); */
    font-size: 6rem;
    cursor: pointer;
    border: none;
    background: none;
    color: #000000cb;
    display: none;
  }
  
  .close--btn:hover {
    color: #000000;
  }
  
  .cart--section--extended[data-visible="true"] {
    transform: translateY(0%);
  }
  
  .cart--section--extended[data-visible="true"]>.close--btn {
    display: block;
  }
  
  .cart--section--extended>h1 {
    padding-top: 1rem;
    font-size: 5rem;
    font-family: "Dancing Script", cursive;
    border-bottom: 5px solid black;
    /* border-style:dashed; */
    border-bottom-style: dashed;
  }
  
  .cart--section--extended>div {
    transform: translate(-15%,-2%);
    display: flex;
    /* align-items: center; */
    /* justify-content: space-around; */
    text-align: center;
  }
  
  .extended--div {
    /* width: 100%; */
    padding: 2rem 4rem 2rem 0rem;
    font-family: "Dancing Script", cursive;
    text-align: center;
    transform: translateX(-5rem);
  }
  
  .extended--div>h1 {
    font-size: 2rem;
  }
  
  .inner--extended--div {
    font-size: 0.8rem;
    font-family: "Oswald", sans-serif;
    padding-top: 0.6rem;
  }
  
  .inner--extended--div-2 {
  
    font-size: 0.8rem;
    font-family: "Oswald", sans-serif;
    padding-top: 0.61rem;
    /* padding-bottom: 1rem; */
  }
  
  .inner--extended--div>h2 {
    display: inline;
  }
  
  .inner--extended--div>span {
    font-size: 1rem;
    padding-left: 0.3rem;
    padding-bottom: 2rem;
    padding-top: 0;
  }
  
  /* .inner--extended--div > span {
    display: inline;
  } */
  
  .extended--div-2 {
    text-align: center;
    /* width: 100%; */
    padding: 2rem 10rem 2rem 0rem;
    font-family: "Dancing Script", cursive;
    transform: translateX(-2.6rem);
  }
  
  .extended--div-2>h1 {
    font-size: 2rem;
  }
  
  .inr--extended--div-2 {
    transform: translate(28rem, -36rem);
  }
  
  .inr--extended--div-2>h1 {
    font-size: 2.3rem;
  }
  
  .inr--extended--div-2>h2 {
    font-size: 4.4rem;
    font-family: "Oswald", sans-serif;
    display: inline;
  }
  
  .inr--extended--div-2>span {
    display: inline;
    font-size: 3.2rem;
    font-family: "Oswald", sans-serif;
    padding-right: 0.3rem;
  }
  
  
  
  .cart-div {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .cart-div>h1 {
    font-size: 2.5rem;
    padding-right: 0.5rem;
    font-family: "Dancing Script", cursive;
  }
  
  .cart-div>span {
    font-size: 2rem;
    padding-top: 0rem;
    padding-left: 0.6rem;
    color: #17f7c3;
    font-family: "Oswald", sans-serif;
  }
  
  .payment--btn {
    height: 2.5rem;
    /* bottom: 0; */
    /* margin-top: 35%; */
    /* margin-right: 20%; */
    background: none;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    border: none;
    background: rgba(0, 0, 0, 0.701);
    backdrop-filter: blur(7px);
    color: #ffa600ab;
    /* color: #ffa500; */
  
    border-radius: 2rem;
    font-family: "Dancing Script", cursive;
    padding: 0.8rem 2.2rem 3.2rem 2rem;
    font-size: 2rem;
    transform: translate(21.75rem, -33rem);
    cursor: pointer;
  
    -moz-box-shadow: 10px 10px 5px rgba(10, 10, 10, 0.356);
    -webkit-box-shadow: 10px 10px 5px rgba(10, 10, 10, 0.329);
    box-shadow: 10px 10px 9px rgba(10, 10, 10, 0.336);
  }
  
  .payment--btn:active {
  
    /* transform: translate(28.1rem, -29.9rem); */
    -moz-box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.356);
    -webkit-box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.329);
    box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.336);
  }
  
  /* .back-to-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: transparent;
    position: fixed;
    z-index: 1;
  
  } */
  .back-to-top--btn {
    bottom: 8%;
    right: 4%;
  
    /* font-size: 6rem; */
    background: none;
    border: none;
    background: rgba(255, 166, 0, 0.543);
  
    backdrop-filter: blur(5px);
    border-radius: 50%;
    padding: 0.6rem;
    z-index: 11;
  
    position: fixed;
  
    cursor: pointer;
  
    /* margin-left: 90%; */
    /* margin-top: 40%; */
    /* left: 100%; */
  
    transition-duration: 400ms;
  
    /* -moz-box-shadow: 10px 10px 5px rgba(10, 10, 10, 0.356);
    -webkit-box-shadow: 10px 10px 5px rgba(10, 10, 10, 0.329);
    box-shadow: 10px 10px 9px rgba(10, 10, 10, 0.336); */
  
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
  
    /* -moz-box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.356);
    -webkit-box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.329);
    box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.336); */
  }
  
  
  .back-to-top--btn[data-visible="true"] {
    visibility: visible;
    transform: translateY(0rem);
  }
  
  
  
  .btn--login[data-visible="false"] {
    display: none;
  }
  
  .inlogs {
    margin-left: 3rem;
    font-family: "Dancing Script", cursive;
    color: rgba(245, 237, 237, 0.513);
    opacity: 0.7;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  
  .licon {
    opacity: 1;
    display: inline;
    border-radius: 50%;
  
    background: #01c5cf;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
    border: 2.5px solid #03e9f4;
    transition-duration: 450ms;
  }
  
  .licon:hover {
    background: #03e9f4;
  
  }
  
  #avatar-name {
    text-align: center;
    font-size: 1.8rem;
    display: inline;
    padding-left: 0.36rem;
    font-family: "Dancing Script", cursive;
    color: rgba(245, 237, 237, 0.707);
    transform: translateY(0.2rem);
  }
  
  .inlogs[data-visible="false"] {
    /* visibility: hidden; */
    display: none;
    margin-left: 3rem;
    font-size: 1.25rem;
    font-family: "Dancing Script", cursive;
    color: rgba(245, 237, 237, 0.513);
  }
  
  .delivery {
    width: 100%;
    height: 100%;
  
    top: 0;
    left: 0;
  
    position: fixed;
    background: transparent;
    /* background: #000; */
  
    z-index: 1000;
  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  
    /* flex-direction: column; */
  
    /* display: none; */
    backdrop-filter: blur(7px);
    /* transform: translateY(200%); */
  }
  
  .deliver--text {
    padding: 2.1rem 6rem 2.5rem 6rem;
    background: rgba(0, 0, 0, 0.34);
    border-radius: 3rem;
    backdrop-filter: blur(7px);
  
    -moz-box-shadow: 7px 10px 7px rgba(10, 10, 10, 0.498);
    -webkit-box-shadow: 7px 10px 7px rgba(10, 10, 10, 0.498);
    box-shadow: 6px 7px 10px rgba(10, 10, 10, 0.498);
  }
  .deliver--text>div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  
  .deliver--text>div>div>h1 {
    display: inline;
    font-size: 2.8rem;
    font-family: "Dancing Script", cursive;
  
    color: #ee8f66;
  
    /* padding-top: 4rem; */
    padding-left: 0.4rem;
  
    /* transform: translateY(-15rem) !important; */
  margin-top: -5rem !important;
  
    text-align: center;
    text-shadow: 2px 2px 8px rgba(10, 10, 10, 0.498);
  }
  
  .deliver--text>div>div>h2 {
    font-size: 1.6rem;
    font-family: "Dancing Script", cursive;
    /* transform: translate(7rem, -3rem); */
  
    color: #d1815e;
  
    /* padding-top: 4rem; */
    /* padding-left: 0.4rem; */
  
    text-align: center;
    text-shadow: 2px 2px 8px rgba(10, 10, 10, 0.498);
  }
  
  .deliver--text>div>div>h3 {
    font-size: 1.6rem;
    font-family: "Dancing Script", cursive;
    /* transform: translate(11rem, -3rem); */
  
    color: #e29c7e;
  
    padding-top: 0.4rem;
    /* padding-left: 0.4rem; */
  
    text-align: center;
    text-shadow: 2px 2px 8px rgba(10, 10, 10, 0.498);
  }
  #avatar-addy{
    text-decoration: underline !important;
    color: #d07a55 !important;
  
  }
  .deliver--text>button {
    display: block;
    margin-left: auto;
    margin-right: auto;
  
    padding: 0.6rem 2.5rem 0.6rem 2.5rem;
  
    font-family: "Dancing Script", cursive;
  
    font-size: 1.9rem;
    background: none;
    border-radius: 3rem;
    border: none;
    cursor: pointer;
    /* background: #ee8f66; */
    backdrop-filter: blur(5px);
  
    color: #ee8f66b7;
    margin-top: 1rem;
  
    box-shadow: 4.5px 4.5px 9px rgba(10, 10, 10, 0.498);
  
    /* transition-duration: 400ms; */
  }
  
  .deliver--text>button:active {
    box-shadow: 2px 2px 8px rgba(10, 10, 10, 0.498);
  }
  
  .deliver--text>lord-icon {
    transform: translateY(6px);
  
  }
  
  .login--successed {
    width: 100%;
    height: 100%;
  
    top: 0;
    left: 0;
  
    position: fixed;
    background: rgba(30, 30, 30, 0.026);
    /* background: #000; */
  
    z-index: 10000000;
  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  
    /* flex-direction: column; */
  
    /* display: none; */
    backdrop-filter: blur(16px);
    /* transform: translateY(200%); */
  }
  
  .login--successed--text {
    padding: 2rem 6rem;
    background: rgba(0, 0, 0, 0.374);
    border-radius: 3rem;
    backdrop-filter: blur(7px);
  
    -moz-box-shadow: 7px 10px 7px rgba(10, 10, 10, 0.498);
    -webkit-box-shadow: 7px 10px 7px rgba(10, 10, 10, 0.498);
    box-shadow: 6px 7px 10px rgba(10, 10, 10, 0.498);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
  
  .login--successed--text>h1 {
    /* display: inline; */
    font-size: 3.3rem;
    font-family: "Dancing Script", cursive;
  
    color: #08a88a;
    /* color: #ee8f66; */
  
    /* padding-top: 4rem; */
    padding-left: 0.4rem;
  
    text-align: center;
    text-shadow: 2px 2px 8px rgba(10, 10, 10, 0.498);
  }
  
  .login--successed--text>button {
    display: block;
    margin-left: auto;
    margin-right: auto;
  
    padding: 0.6rem 2.5rem 0.6rem 2.5rem;
  
    font-family: "Dancing Script", cursive;
  
    font-size: 1.9rem;
    background: none;
    border-radius: 3rem;
    border: none;
    cursor: pointer;
    /* background: #ee8f66; */
    backdrop-filter: blur(5px);
  
    /* color: #ee8f66b7; */
    color: #08a88a;
    margin-top: 3rem;
  
    box-shadow: 4.5px 4.5px 9px rgba(10, 10, 10, 0.498);
  
    /* transition-duration: 400ms; */
  }
  
  .login--successed--text>button:active {
    box-shadow: 2px 2px 8px rgba(10, 10, 10, 0.498);
  }
  
  .login--failed {
    width: 100%;
    height: 100%;
  
    top: 0;
    left: 0;
  
    position: fixed;
    background: transparent;
    background: rgba(30, 30, 30, 0.026);
  
    /* background: #000; */
  
    z-index: 10000000;
  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  
    /* flex-direction: column; */
  
    /* display: none; */
    backdrop-filter: blur(16px);
    /* transform: translateY(200%); */
  }
  
  .login--failed--text {
    padding: 2rem 10rem;
    background: rgba(0, 0, 0, 0.34);
    background: rgba(0, 0, 0, 0.374);
  
    border-radius: 3rem;
    backdrop-filter: blur(7px);
  
    -moz-box-shadow: 7px 10px 7px rgba(10, 10, 10, 0.498);
    -webkit-box-shadow: 7px 10px 7px rgba(10, 10, 10, 0.498);
    box-shadow: 6px 7px 10px rgba(10, 10, 10, 0.498);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
  
  .login--failed--text>h1 {
    /* display: inline; */
    font-size: 3.3rem;
    font-family: "Dancing Script", cursive;
  
    /* color: #08a88a; */
  
    color: #c71f16;
    /* color: #ee8f66; */
  
    /* padding-top: 4rem; */
    padding-left: 0.4rem;
  
    text-align: center;
    text-shadow: 2px 2px 8px rgba(10, 10, 10, 0.498);
  }
  
  .login--failed--text>button {
    display: block;
    margin-left: auto;
    margin-right: auto;
  
    padding: 0.6rem 2.5rem 0.6rem 2.5rem;
  
    font-family: "Dancing Script", cursive;
  
    font-size: 1.9rem;
    background: none;
    border-radius: 3rem;
    border: none;
    cursor: pointer;
    /* background: #ee8f66; */
    backdrop-filter: blur(5px);
  
    /* color: #ee8f66b7; */
    /* color: #08a88a; */
    color: #c71f16;
    margin-top: 3rem;
  
    box-shadow: 4.5px 4.5px 9px rgba(10, 10, 10, 0.498);
  
    /* transition-duration: 400ms; */
  }
  
  .login--failed--text>button:active {
    box-shadow: 2px 2px 8px rgba(10, 10, 10, 0.498);
  }
  
  .registeration--successed {
    width: 100%;
    height: 100%;
  
    top: 0;
    left: 0;
  
    position: fixed;
    background: transparent;
    background: rgba(30, 30, 30, 0.026);
  
    /* background: #000; */
  
    z-index: 10000000;
  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  
    /* flex-direction: column; */
  
    /* display: none; */
    backdrop-filter: blur(16px);
    /* transform: translateY(200%); */
  }
  
  .registeration--successed--text {
    padding: 2rem 6rem;
    background: rgba(0, 0, 0, 0.34);
    background: rgba(0, 0, 0, 0.374);
  
    border-radius: 3rem;
    backdrop-filter: blur(7px);
  
    -moz-box-shadow: 7px 10px 7px rgba(10, 10, 10, 0.498);
    -webkit-box-shadow: 7px 10px 7px rgba(10, 10, 10, 0.498);
    box-shadow: 6px 7px 10px rgba(10, 10, 10, 0.498);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
  
  .registeration--successed--text>h1 {
    /* display: inline; */
    font-size: 3.3rem;
    font-family: "Dancing Script", cursive;
  
    color: #08a88a;
    /* color: #ee8f66; */
  
    /* padding-top: 4rem; */
    padding-left: 0.4rem;
  
    text-align: center;
    text-shadow: 2px 2px 8px rgba(10, 10, 10, 0.498);
  }
  
  .registeration--successed--text>button {
    display: block;
    margin-left: auto;
    margin-right: auto;
  
    padding: 0.6rem 2.5rem 0.6rem 2.5rem;
  
    font-family: "Dancing Script", cursive;
  
    font-size: 1.9rem;
    background: none;
    border-radius: 3rem;
    border: none;
    cursor: pointer;
    /* background: #ee8f66; */
    backdrop-filter: blur(5px);
  
    /* color: #ee8f66b7; */
    color: #08a88a;
    margin-top: 3rem;
  
    box-shadow: 4.5px 4.5px 9px rgba(10, 10, 10, 0.498);
  
    /* transition-duration: 400ms; */
  }
  
  .registeration--successed--text>button:active {
    box-shadow: 2px 2px 8px rgba(10, 10, 10, 0.498);
  }
  
  .registeration--failed {
    width: 100%;
    height: 100%;
  
    top: 0;
    left: 0;
  
    position: fixed;
    background: transparent;
    background: rgba(30, 30, 30, 0.026);
  
    /* background: #000; */
  
    z-index: 10000000;
  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  
    /* flex-direction: column; */
  
    /* display: none; */
    backdrop-filter: blur(16px);
    /* transform: translateY(200%); */
  }
  
  .registeration--failed--text {
    padding: 2rem 6rem;
    background: rgba(0, 0, 0, 0.34);
    background: rgba(0, 0, 0, 0.374);
  
    border-radius: 3rem;
    backdrop-filter: blur(7px);
  
    -moz-box-shadow: 7px 10px 7px rgba(10, 10, 10, 0.498);
    -webkit-box-shadow: 7px 10px 7px rgba(10, 10, 10, 0.498);
    box-shadow: 6px 7px 10px rgba(10, 10, 10, 0.498);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
  
  .registeration--failed--text>h1 {
    /* display: inline; */
    font-size: 3.3rem;
    font-family: "Dancing Script", cursive;
  
    /* color: #08a88a; */
  
    color: #c71f16;
    /* color: #ee8f66; */
  
    /* padding-top: 4rem; */
    padding-left: 0.4rem;
  
    text-align: center;
    text-shadow: 2px 2px 8px rgba(10, 10, 10, 0.498);
  }
  
  .registeration--failed--text>button {
    display: block;
    margin-left: auto;
    margin-right: auto;
  
    padding: 0.6rem 2.5rem 0.6rem 2.5rem;
  
    font-family: "Dancing Script", cursive;
  
    font-size: 1.9rem;
    background: none;
    border-radius: 3rem;
    border: none;
    cursor: pointer;
    /* background: #ee8f66; */
    backdrop-filter: blur(5px);
  
    /* color: #ee8f66b7; */
    /* color: #08a88a; */
    color: #c71f16;
    margin-top: 3rem;
  
    box-shadow: 4.5px 4.5px 9px rgba(10, 10, 10, 0.498);
  
    /* transition-duration: 400ms; */
  }
  
  .registeration--failed--text>button:active {
    box-shadow: 2px 2px 8px rgba(10, 10, 10, 0.498);
  }
  
  .profile--area {
    width: 100%;
    height: 100%;
  
    top: 0;
    left: 0;
  
    position: fixed;
    background: transparent;
    background: rgba(0, 0, 0, 0.273);
  
    z-index: 1000;
  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  
    /* flex-direction: column; */
  
    /* display: none; */
    backdrop-filter: blur(7px);
    /* transform: translateY(200%); */
  }
  
  .profile--area--text {
    padding: 2.5rem 6rem;
    background: rgba(255, 255, 255, 0.283);
    border-radius: 3rem;
    backdrop-filter: blur(12px);
  
    -moz-box-shadow: 7px 10px 7px rgba(10, 10, 10, 0.498);
    -webkit-box-shadow: 7px 10px 7px rgba(10, 10, 10, 0.498);
    box-shadow: 6px 7px 10px rgba(10, 10, 10, 0.498);
    font-family: "Dancing Script", cursive;
  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  }
  
  .profile--area--text>h1 {
    /* display: inline; */
    font-size: 2.8rem;
    font-family: "Monoton", cursive;
  
    color: #ee8f66;
  
    /* padding-top: 4rem; */
    padding-left: 0.4rem;
  
    text-align: center;
    text-shadow: 2px 2px 8px rgba(10, 10, 10, 0.498);
  }
  
  .profile--area--text>button {
    display: block;
    margin-left: auto;
    margin-right: auto;
  
    padding: 0.6rem 2.5rem 0.6rem 2.5rem;
  
    font-family: "Dancing Script", cursive;
  
    font-size: 1.4rem;
    background: none;
    border-radius: 3rem;
    border: none;
    cursor: pointer;
    background: #00000092;
    backdrop-filter: blur(3px);
  
    /* color: #ee8f66b7; */
    /* color: #08a88a; */
    color: #ee8f66;
    margin-top: 1rem;
    text-shadow: 3px 3px 5px rgba(10, 10, 10, 0.61);
  
    box-shadow: 4.5px 4.5px 9px rgba(10, 10, 10, 0.498);
  
    /* transition-duration: 400ms; */
  }
  
  .profile--area--text>button:active {
    box-shadow: 2px 2px 6px rgba(10, 10, 10, 0.498);
  }
  
  .profile--details {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    padding-bottom: 2rem;
  }
  
  .profile--details-2 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .profile--details-2>h2 {
    font-size: 1.8rem;
    font-family: "Dancing Script", cursive;
    /* transform: translate(5rem, -2.5rem); */
  
    color: #242424c5;
  
    /* padding-top: 4rem; */
    padding-right: 0.4rem;
  
    text-align: center;
    text-shadow: 2px 2px 4px rgba(10, 10, 10, 0.498);
    font-family: "Oswald", sans-serif;
  }
  
  .profile--details-2>h3 {
    font-size: 1.4rem;
    font-family: "Dancing Script", cursive;
    /* transform: translate(5rem, -2.5rem); */
    font-family: "Oswald", sans-serif;
  
    color: #d1815ec0;
  
    /* padding-top: 4rem; */
    padding-left: 0.3rem;
  
    text-align: center;
    text-shadow: 2px 2px 8px rgba(10, 10, 10, 0.498);
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
    /* background: rgba(255, 255, 255, 0.085); */
    /* color: rgba(245, 237, 237, 0.89); */
    /* color: #000000; */
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
      /* width: 100%; */
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
  
    .forms-section {
      margin-left: 18%;
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
      /* padding: 1rem 2rem; */
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
  
      /* transform: translateX(-100px); */
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
  
    /*
  .abcd{
    transform: translateX(80px);
  
  } */
    .footer-2-div>h4 {
      transform: translate(-270px, 30px)
    }
  }
  
  @media only screen and (max-width: 1030px) {
  
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
      /* background: linear-gradient(to top left, #31324285, #291f2780); */
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
  
      /* transform: translateX(-100px); */
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
    .login--successed--text {
      padding: 1.8rem 6rem;
      border-radius: 3rem;
    }
  
    .login--successed--text>h1 {
      /* display: inline; */
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
      /* display: inline; */
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
      /* display: inline; */
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
      /* display: inline; */
      font-size: 2.7rem;
    }
  
    .registerationn--failed--text>button {
      font-size: 1.5rem;
      margin-top: 2rem;
    }
  
    .deliver--text>div>div>h1 {
      display: inline;
      font-size: 2.2rem;
    }
  
    .deliver--text>div>div>h2 {
      font-size: 1.2rem;
    }
  
    .deliver--text>div>div>h3 {
      font-size: 1.2rem;
    }
  
    .deliver--text>div>button {
      margin-top: 0.2rem;
      font-size: 1.3rem;
  
    }
  
    .closes {
      top: -4.1%;
      right: -35%;
    }
  
    .forms-section {
      margin-left: 15%;
      margin-top: 5%;
    }
  
    /* .forms{
    margin: auto;
    margin-left: auto;
  } */
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
      margin-top: 3em;
      margin-bottom: 3em;
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
      /* animation-iteration-count: infinite; */
      /* animation-timing-function: ease-in-out; */
      transition-duration: 500ms;
    }
  
    @keyframes lgin-mobile {
      0% {
        /* transform: translateY(-2rem); */
        transform: scale(0rem);
        /* opacity: 0; */
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
        /* transform: translateY(0rem); */
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
  
    /* .btn--login{
        display: none;
      } */
    .btn--login {
      transform: translateX(-30%);
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
      height: 1.5rem;
      font-size: 1.3rem;
      padding: 0.7rem 1.5rem 2.3rem 1.5rem;
  
      transform: translate(13.8rem, -29rem);
  gap: 10px;
    }
  
    .cart--section {
      height: 5rem;
    }
  
    .cart-div {
      width: 60%;
    }
  
    .cart-div>h1 {
      /* display: none; */
      font-size: 24px;
      padding-right: 4px;
    }
  
    .cart-div>span {
      font-size: 24px;
      padding-left: 0;
    }
  
    /* .cart--section>button{
    } */
    #up--btn {
      /* display: none; */
      position: absolute;
      width: 2.4em !important;
      border-left: 2.7rem solid transparent;
      border-right: 2.7rem solid transparent;
      border-bottom: 3.71rem solid rgba(255, 166, 0, 0.67);
      /* font-size: 4rem; */
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
    .lord-icons-4 {
      width: 20px !important;
      /* padding-right: 1rem !important; */
      margin-top: -0.5rem;
    }
  
    .cart-div {
      /* width: 50%; */
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
      /*  animation-iteration-count: infinite; */
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
      /* height: 80vh; */
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
  
    /* .payment--btn {
      font-size: 1.3rem;
      padding: 0.7rem 2rem 2.8rem 2rem;
      transform: translate(13.5rem, -29rem);
  
    } */
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
      transform: translateX(-5rem) !important;
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
      /* display: none; */
      font-size: 24px;
      padding-right: 4px;
    }
  
    .cart-div>span {
      font-size: 24px;
      padding-left: 0;
    }
  
    /* .cart--section>button{
    } */
    #up--btn {
      /* display: none; */
      position: absolute;
      width: 2.4em !important;
      border-left: 2.7rem solid transparent;
      border-right: 2.7rem solid transparent;
      border-bottom: 3.71rem solid rgba(255, 166, 0, 0.67);
      /* font-size: 4rem; */
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
      margin-top: 2em;
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
      /*  animation-iteration-count: infinite; */
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
    .deliver--text>div>div>h1 {
      display: inline;
      font-size: 2.2rem;
    }
  
    .deliver--text>div>div>h2 {
      font-size: 1.2rem;
    }
  
    .deliver--text>div>div>h3 {
      font-size: 1.2rem;
    }
  
    .deliver--text>div>button {
      margin-top: 0.2rem;
      font-size: 1.3rem;
  
    }
  
    .deliver--text>div>lord-icon {
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
      /* font-size: 2rem; */
      padding-right: 20px;
  
    }
  
    .payment--btn {
      /* font-size: 1.1rem;
      padding: 0.6rem 1.6rem 2.2rem 1.6rem; */
      transform: translate(12.7rem, -29rem);
    }
  
    /* .lord-icons-4 {
      width: 27px !important;
      height: 27px !important;
      padding-right: 8px !important;
      padding-bottom: 4px !important;
    } */
  
    .texts {
      padding-top: 1.5em;
      padding-bottom: 1.5em;
    }
  
    .licon {
      /* height: 90px !important; */
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
      /* height: 80vh; */
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
    .login--successed--text {
      padding: 1.6rem 5.6rem;
      border-radius: 2.8rem;
    }
  
    .login--successed--text>h1 {
      /* display: inline; */
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
      /* display: inline; */
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
      /* display: inline; */
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
      /* display: inline; */
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
  
    .deliver--text>div>div>h1 {
      display: inline;
      font-size: 2.1rem;
    }
  
    .deliver--text>div>div>h2 {
      font-size: 1.2rem;
    }
  
    .deliver--text>div>div>h3 {
      font-size: 1.2rem;
    }
  
    .deliver--text>div>button {
      margin-top: 0.2rem;
      font-size: 1.3rem;
  
    }
  
    .deliver--text>div>lord-icon {
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
      /* padding-top: 15px; */
      /* transform: translateY(10px) !important; */
    }
    .extended--div{
      transform: translateX(-3rem) !important;
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
      /* display: none; */
      font-size: 24px;
      padding-right: 4px;
    }
  
    .cart-div>span {
      font-size: 24px;
      padding-left: 0;
    }
  
    /* .cart--section>button{
    } */
    #up--btn {
      /* display: none; */
      position: absolute;
      width: 2.4em !important;
      border-left: 2.7rem solid transparent;
      border-right: 2.7rem solid transparent;
      border-bottom: 3.71rem solid rgba(255, 166, 0, 0.67);
      /* font-size: 4rem; */
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
      /*  animation-iteration-count: infinite; */
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
      /* height: 75vh; */
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
      /* display: none; */
      font-size: 24px;
      padding-right: 4px;
    }
  
    .cart-div>span {
      font-size: 24px;
      padding-left: 0;
    }
  
    /* .cart--section>button{
    } */
    #up--btn {
      /* display: none; */
      position: absolute;
      width: 2.4em !important;
      border-left: 2.7rem solid transparent;
      border-right: 2.7rem solid transparent;
      border-bottom: 3.71rem solid rgba(255, 166, 0, 0.67);
      /* font-size: 4rem; */
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
      font-size: 2em;
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
      /* height: 70vh; */
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
    .deliver--text {
      width: 70%;
      padding: 2rem 3rem;
    }
  
    .deliver--text>div>div>h1 {
      display: inline;
      font-size: 1.8rem;
      /* padding-bottom: 30px !important; */
    }
  
    .deliver--text>div>div>h2 {
      font-size: 1.1rem;
      /* transform: translate(5rem, -2rem); */
    }
  
    .deliver--text>div>div>h3 {
      font-size: 1.1rem;
      /* transform: translate(8rem, -2.4rem); */
    }
  
    .deliver--text>button {
      margin-top: 1rem;
      font-size: 1rem;
      /* transform: translateY(-15px); */
  
    }
  
    .deliver--text>div>lord-icon {
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
      /* padding-top: 15px; */
      /* transform: translateY(10px) !important; */
    }
  
    .inr--extended--div-2 {
      transform: translate(10.1rem, -30rem);
    }
  
    .extended--div {
      transform: translateX(-3.7rem) !important;
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
      padding-left: 0;
    }
  
  
    .nav-mobile {
      transform: translateX(80%);
    }
  
    .nav-mobile>img {
      width: 110%;
    }
  }
  
  
  @media only screen and (max-width: 550px) {
    .login--successed--text {
      padding: 1.6rem 4rem;
      border-radius: 2.8rem;
    }
  
    .login--successed--text>h1 {
      /* display: inline; */
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
      /* display: inline; */
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
      /* display: inline; */
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
      /* display: inline; */
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
     /* padding: 0.6rem 1.2rem 0.5rem 1.2rem; */
      transform: translate(8.76rem, -23rem);
      padding-bottom: 1.7rem;
      padding-left: 1rem;
      padding-right: 1rem;
      gap: 5px;
    }
  
    .lord-icons-4 {
      width: 15px !important;
      height: 15px !important;
      /* padding-right: 6px !important;
      padding-bottom: 4px !important; */
      margin-top: 0;
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
      transform: translateX(-2.3rem) !important;
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
      /* display: none; */
      font-size: 18px;
      padding-right: 4px;
    }
  
    .cart-div>span {
      font-size: 18px;
      padding-left: 0;
    }
  
    /* .cart--section>button{
    } */
    #up--btn {
      /* display: none; */
      position: absolute;
      width: 2em !important;
      border-left: 2.7rem solid transparent;
      border-right: 2.7rem solid transparent;
      border-bottom: 3.2rem solid rgba(255, 166, 0, 0.67);
      /* font-size: 4rem; */
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
      /*  animation-iteration-count: infinite; */
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
    .deliver--text {
      width: 70%;
      padding: 1.7rem 2.7rem;
    }
  
    .deliver--text>div>div>h1 {
      display: inline;
      font-size: 1.8rem;
      /* padding-bottom: 30px !important; */
    }
  
    .deliver--text>div>div>h2 {
      font-size: 1rem;
      /* transform: translate(3rem, -1.8rem); */
    }
  
    .deliver--text>div>div>h3 {
      font-size: 1rem;
      /* transform: translate(5rem, -2.2rem); */
    }
  
    .deliver--text>button {
      margin-top: 1.2rem;
      font-size: 1.05rem;
      /* transform: translateY(-15px); */
  
    }
  
    .deliver--text>div>lord-icon {
      width: 80px !important;
      height: 80px !important;
    }
  }
  
  @media only screen and (max-width: 500px) {
    .inlogs {
      width: 130px;
      position: absolute;
      flex-direction: column;
      transform: translate(-90%, -50%);
    }
  
    #avatar-name {
      font-size: 0.85rem;
    }
  
    .btn--login {
      font-size: 0.8rem;
      padding: 0.6rem;
      transform: translateX(-60%);
    }
  
    .licon {
      /* height: 90px !important; */
      width: 25px !important;
      height: 25px !important;
    }
  
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
  
    .bg--video {
      z-index: -10;
  
      /* top: 0%; */
      /* left: 0%; */
      width: 100%;
      height: 110%;
      object-fit: cover;
      position: fixed;
    }
  
    .logos {
      /* display: none !important; */
  
      display: flex;
      align-items: center;
      /* justify-content: center; */
      width: 6rem;
  
      /* animation-name: logo-anime-2; */
      animation-delay: 6s;
      /* animation-iteration-count: infinite; */
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
      /* margin-bottom: 2rem; */
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
      /* display: none !important; */
  
      width: 5rem;
      transform: translateX(-70px);
      padding-left: 0rem;
      /* border-radius: 1rem; */
      opacity: 0.7;
      animation-name: logo-anime--05;
      animation-delay: 8s;
      animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
      animation-duration: 5s;
      /*  animation-iteration-count: infinite; */
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
      /* height: 20% !important; */
      margin-top: 60px;
      margin-bottom: 66px;
  
      border: 4px solid rgba(255, 255, 255, 0.075) !important;
    }
  
    .welcome--text {
      font-size: 1.5rem;
      padding-top: 2.7rem;
      padding-bottom: 0.1rem;
      animation-name: welcome2;
      animation-duration: 5s;
      animation-timing-function: ease-in-out;
      /* transform: translateY(-5px); */
    }
  
    @keyframes welcome2 {
      0% {
        transform: translateY(20px);
        opacity: 0;
      }
  
      100% {
        transform: translateY(0);
        opacity: 1;
        /* transform: skewX(-5deg); */
      }
    }
  
    .restaurent--name {
      font-size: 2.7rem;
      padding-top: 0.3rem;
      animation-name: restname;
      animation-duration: 6s;
      /* animation-delay: 3s; */
      animation-timing-function: ease-in-out;
      text-align: center;
      /* opacity: 0; */
    }
  
    @keyframes restname {
      0% {
        transform: translateY(-5px);
        opacity: 0;
      }
  
      40% {
        opacity: 0;
  
      }
  
      100% {
        transform: translateY(0);
        opacity: 1;
      }
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
      /* animation-timing-function: ease-in-out; */
      /* animation: exp2 4s linear infinite; */
      opacity: 0;
  
      /* transition-duration: 800ms; */
    }
  
    @keyframes exppp {
      0% {
        /* transform: translateY(-2rem); */
        /* transform: scale(0rem); */
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
        /* padding-left: 3rem; */
        /* padding-right: 1rem; */
      }
  
      100% {
        opacity: 1;
        /* transform: translateY(0rem); */
        /* transform: scale(2rem); */
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
  
  
    /* .discover--menu {
      width: 225%;
      height: 140vh;
    } */
    /* .discover--menu-2 {
      width: 225%;
      height: 1790vh;
    }
    .discover--menu-2 > h1 {
      font-size: 7rem;
    }
    .discover--menu-2 > img {
      width: 70%;
    } */
    /* .disc-div {
      flex-direction: column;
    }
    .disc-div > img {
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
    .reserve {
      width: 225%;
      height: 290vh;
    }
    .reserve > h1 {
      font-size: 5rem;
    }
    .reserve > img {
      width: 70%;
    }
    #callus {
      padding-top: 8rem;
      padding-bottom: 1rem;
    }
    #orr {
      font-size: 3rem;
      padding-top: 9rem;
    } */
    .discover--menu {
      padding-bottom: 2rem;
  
  
    }
  
    .discover--menu>h1 {
      font-size: 4rem !important;
      padding-top: 3rem;
      animation-name: bannersing;
      /* animation-delay: 8s; */
      animation-duration: 7s;
    }
  
    @keyframes bannersing {
      0% {
        opacity: 0;
      }
  
      50% {
        opacity: 0;
      }
  
      100% {
        opacity: 1;
      }
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
  
    .container {
      width: 04rem;
      height: 7rem;
      border-radius: 1rem;
  
      padding: 3rem;
    }
  
    .container p {
      color: hsl(187, 100%, 50%);
      color: rgba(221, 39, 33, 0.651);
      color: rgba(235, 235, 235, 0.863);
  
      text-shadow: 2px 2px 4px #000000;
      font-size: 1.1rem;
      opacity: 1 !important;
      transform: translate(-1rem, 1.3rem) !important;
    }
  
    .container::before,
    .container::after {
      content: "";
      width: 1rem;
      height: 1rem;
      border: 3.5px solid rgb(255, 255, 255);
      border: 3px solid rgba(235, 235, 235, 0.945);
      position: absolute;
      z-index: 2;
      opacity: 0.7;
      transition: 0.3s;
    }
  
    .container::before {
      top: 1rem;
      right: 1rem;
      border-bottom-width: 0;
      border-left-width: 0;
    }
  
    .container::after {
      bottom: 1rem;
      left: 1rem;
      border-top-width: 0;
      border-right-width: 0;
  
    }
  
    .wrap:hover .container::before,
    .wrap:hover .container::after {
      width: calc(100% - 1.9rem);
      height: calc(100% - 1.9rem);
    }
  
    .container--1 {
      background-size: cover;
    }
  
    .container--2 {
      background-size: cover;
  
    }
  
    .container--3 {
      background-size: cover;
  
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
      /* width: 70%; */
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
      /* height: 65vh; */
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
  
    /* 
     .forms-section {
      margin-left: 15%;
      margin-top: 50%;
    }
  
    .form {
      width: 100%;
    } */
    /* .overlayed {
      width: 225%;
      height: 100%;
      width: 100%;
    }
    .overlayed2 {
      width: 225%;
      height: 100%;
      width: 100%;
    } */
    /* .closes {
      transform: translate(30rem, -30.3rem);
      font-size: 8rem;
    } */
  
    /* 
    .cart--section--extended > h1 {
      padding-bottom: 2rem;
    }
  
    .extended--div {
      padding: 2rem 4rem 2rem 0rem;
      font-family: "Dancing Script", cursive;
      text-align: center;
      transform: translateX(5rem);
    }
    .extended--div > h1 {
      font-size: 2.5rem;
      padding-bottom: 1rem;
      width: 110%;
    }
    .extended--div-2 > h1 {
      font-size: 2.5rem;
      padding-bottom: 1rem;
    }
  
    .extended--div-2 {
      text-align: center;
      padding: 2rem 10rem 2rem 0rem;
      font-family: "Dancing Script", cursive;
      transform: translateX(5rem);
    }
    .inr--extended--div-2 {
      padding-top: 8rem;
      padding-bottom: 3rem;
      transform: translate(-10rem, 0rem);
    }
    .inner--extended--div {
      font-size: 1.1rem;
      font-family: "Oswald", sans-serif;
      padding-top: 0.7rem;
    }
    .inner--extended--div > span {
      font-size: 1.6rem;
      padding-left: 1rem;
    }
    .inner--extended--div-2 {
      font-size: 1.1rem;
      font-family: "Oswald", sans-serif;
      padding-top: 0.7rem;
    }
    .payment--btn {
      transform: translate(0rem, 0rem);
    }
    .payment--btn:active {
      transform: translate(0rem, 0rem);
      -moz-box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.356);
      -webkit-box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.329);
      box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.336);
    }
  
    .close--btn {
      font-size: 8rem;
      transform: translateX(20rem);
    }
    .payment--btn {
      transform: translateY(-20%);
    } */
  
    /* .back-to-top--btn {
      top: 87%;
      left: 82%;
    } */
    /* .inlogs {
      margin-left: 1.7rem;
    } */
  }
  
  @media only screen and (max-width: 480px) {
    .login--successed--text {
      padding: 1.5rem 4rem;
      border-radius: 2rem;
    }
  
    .login--successed--text>h1 {
      /* display: inline; */
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
      /* display: inline; */
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
      /* display: inline; */
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
      /* display: inline; */
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
    .inlogs {
      width: 130px;
      position: absolute;
      flex-direction: column;
      transform: translate(-95%, -50%);
    }
  
    #avatar-name {
      font-size: 0.85rem;
    }
  
    .licon {
      /* height: 90px !important; */
      width: 25px !important;
      height: 25px !important;
    }
  
    .deliver--text {
      width: 70%;
      padding: 1.2rem 2.4rem;
      border-radius: 2.7rem;
  
    }
  
    .deliver--text>div>div>h1 {
      display: inline;
      font-size: 1.5rem;
      /* padding-bottom: 30px !important; */
    }
  
    .deliver--text>div>div>h2 {
      font-size: 0.8rem;
      padding-top: 0.5rem;
      /* transform: translate(3rem, -1.8rem); */
    }
  
    .deliver--text>div>div>h3 {
      font-size: 0.8rem;
      /* transform: translate(5rem, -2.2rem); */
    }
  
    .deliver--text>button {
      margin-top: 1.2rem;
      font-size: 0.9rem;
      padding: 0.6rem 2rem 0.6rem 2rem;
  
      /* transform: translateY(-13px); */
  
    }
  
    .deliver--text>div>lord-icon {
      width: 80px !important;
      height: 80px !important;
    }
  }
  
  @media only screen and (max-width: 450px) {
    .btn--login{
      font-size: 0.5rem;
          padding: 0.6rem;
          transform: translateX(-90%);
    }
  
    .switcher-signup {
      margin-left: 13%;
      /* transform: translateX(90px); */
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
    /*  font-size: 0.8rem;
      padding: 0.6rem 1.2rem 0.5rem 1.2rem;*/
      transform: translate(7.6rem, -23rem);
    } 
  
    .section--footer-1 {
      min-height: calc(45vh+20vh);
      /* height: 61vh; */
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
      /* cursor: crosshair; */
    }
  
    .navbar {
      height: 3.8rem;
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
      /*  animation-iteration-count: infinite; */
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
  
    .container {
      width: 7rem;
      height: 12.5rem;
      border-radius: 1rem;
  
      padding: 3rem;
    }
  
    .container p {
      color: hsl(187, 100%, 50%);
      color: rgba(221, 39, 33, 0.651);
      color: rgba(235, 235, 235, 0.863);
  
      text-shadow: 2px 2px 4px #000000;
      font-size: 1.1rem;
      opacity: 1 !important;
      transform: translate(-1rem, 1.3rem) !important;
    }
  
    .container::before,
    .container::after {
      content: "";
      width: 1rem;
      height: 1rem;
      border: 3.5px solid rgb(255, 255, 255);
      border: 3px solid rgba(235, 235, 235, 0.945);
      position: absolute;
      z-index: 2;
      opacity: 0.7;
      transition: 0.3s;
    }
  
    .container::before {
      top: 1rem;
      right: 1rem;
      border-bottom-width: 0;
      border-left-width: 0;
    }
  
    .container::after {
      bottom: 1rem;
      left: 1rem;
      border-top-width: 0;
      border-right-width: 0;
  
    }
  
    .wrap:hover .container::before,
    .wrap:hover .container::after {
      width: calc(100% - 1.9rem);
      height: calc(100% - 1.9rem);
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
      /* font-size: 0.8rem;
      padding: 0.6rem 1.2rem 0.5rem 1.2rem; */
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
  
    /* .lord-icons-4 {
      width: 18px !important;
      height: 18px !important;
      padding-right: 6px !important;
      padding-bottom: 4px !important;
    } */
  }
  
  @media only screen and (max-width: 424px) {
  
    .cart-div {
      width: 60%;
    }
  
    .cart-div>h1 {
      /* display: none; */
      font-size: 15px;
      padding-right: 4px;
    }
  
    .cart-div>span {
      font-size: 15px;
      padding-left: 0;
    }
  
    /* .cart--section>button{
    } */
    #up--btn {
      /* display: none; */
      position: absolute;
      width: 2em !important;
      border-left: 2.7rem solid transparent;
      border-right: 2.7rem solid transparent;
      border-bottom: 3.21rem solid rgba(255, 166, 0, 0.67);
      /* font-size: 4rem; */
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
      /* height: 60vh; */
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
      /* cursor: crosshair; */
    }
  
    .nav-mobile {
      transform: translateX(190%) !important;
    }
  
    .nav-mobile>img {
      width: 122%;
    }
  }
  
  @media only screen and (max-width: 414px) {
    .deliver--text {
      width: 70%;
      padding: 1.1rem 2.4rem;
      border-radius: 2.7rem;
  
    }
  
    .deliver--text>div>div>h1 {
      display: inline;
      font-size: 1.4rem;
      /* padding-bottom: 30px !important; */
    }
  
    .deliver--text>div>div>h2 {
      font-size: 0.8rem;
      /* transform: translate(3rem, -1.8rem); */
    }
  
    .deliver--text>div>div>h3 {
      font-size: 0.8rem;
      /* transform: translate(5rem, -2.2rem); */
    }
  
    .deliver--text>button {
      margin-top: 1rem;
      font-size: 0.8rem;
      padding: 0.5rem 1.7rem 0.5rem 1.7rem;
  
      /* transform: translateY(-13px); */
  
    }
  
    .deliver--text>div>lord-icon {
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
      /* font-size: 0.8rem; */
      /* padding: 0.6rem 1.1rexm 0.5rem 1.1rem; */
      transform: translate(6.96rem, -23rem);
    }
  
    .extended--div {
      transform: translateX(-2.4rem) !important;
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
    .btn--login{
      font-size: 0.4rem;
          padding: 0.4rem;
          transform: translateX(-26%);
    }
    .logos{
      width: 0rem;
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
      /*  animation-iteration-count: infinite; */
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
      /* height: 20% !important; */
      margin-top: 50px;
      margin-bottom: 56px;
    }
  
    .welcome--text {
      font-size: 1.3rem;
      padding-top: 2.7rem;
      padding-bottom: 0.1rem;
    }
  
    .restaurent--name {
      font-size: 2.55rem;
      padding-top: 0.3rem;
    }
  
    .btn--explore {
      font-size: 0.55rem;
      text-align: center;
      padding: 0.4rem 1rem;
      margin: 0;
      margin-top: 2.5rem;
  
  
      /* transition-duration: 800ms; */
    }
  
    .namber {
      font-size: 2.25rem !important;
    }
  
    .map {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  
    .section--footer-1 {
      /* height: 50vh; */
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
      /* cursor: crosshair; */
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
    .login--successed--text {
      padding: 1rem 3.5rem;
      border-radius: 1.7rem;
    }
  
    .login--successed--text>h1 {
      /* display: inline; */
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
      /* display: inline; */
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
      /* display: inline; */
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
      /* display: inline; */
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
  
    .deliver--text>div>div>h1 {
      display: inline;
      font-size: 1.3rem;
      /* padding-bottom: 30px !important; */
    }
  
    .deliver--text>div>div>h2 {
      font-size: 0.7rem;
      /* transform: translate(3rem, -1.8rem); */
    }
  
    .deliver--text>div>div>h3 {
      font-size: 0.7rem;
      /* transform: translate(5rem, -2.2rem); */
    }
  
    .deliver--text>button {
      margin-top: 1rem;
      font-size: 0.8rem;
      padding: 0.5rem 1.7rem 0.5rem 1.7rem;
  
      /* transform: translateY(-13px); */
  
    }
  
    .deliver--text>div>lord-icon {
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
      transform: translateX(-1.8rem) !important;
    }
  
    .inr--extended--div-2 {
      transform: translate(7rem, -25rem);
    }
  
    .payment--btn {
      font-size: 0.8rem !important;
      padding: 0.4rem 0.8rem 1.5rem 0.8rem;
      transform: translate(7.05rem, -23rem);
    }
  
    .lord-icons-4 {
      width: 12px !important;
      height: 12px !important;
  }
  
    .cart-div {
      width: 60%;
    }
  
    .cart-div>h1 {
      /* display: none; */
      font-size: 15px;
      padding-right: 4px;
    }
  
    .cart-div>span {
      font-size: 15px;
      padding-left: 0;
    }
  
    /* .cart--section>button{
    } */
    #up--btn {
      /* display: none; */
      position: absolute;
      width: 1.9em !important;
      border-left: 2.7rem solid transparent;
      border-right: 2.7rem solid transparent;
      border-bottom: 3.21rem solid rgba(255, 166, 0, 0.67);
      /* font-size: 4rem; */
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
    .inlogs {
      width: 130px;
      position: absolute;
      flex-direction: column;
      transform: translate(-98%, -50%);
    }
  
    #avatar-name {
      font-size: 0.75rem;
    }
  
    .licon {
      /* height: 90px !important; */
      width: 20px !important;
      height: 20px !important;
    }
  
    .deliver--text {
      width: 70%;
      padding: 1rem 2rem;
      border-radius: 2.2rem;
  
    }
  
    .deliver--text>div>div>h1 {
      display: inline;
      font-size: 1.2rem;
      /* padding-bottom: 30px !important; */
    }
  
    .deliver--text>div>div>h2 {
      font-size: 0.6rem;
      /* transform: translate(3rem, -1.3rem); */
    }
  
    .deliver--text>div>div>h3 {
      font-size: 0.6rem;
      /* transform: translate(5rem, -1.7rem); */
    }
  
    .deliver--text>button {
      margin-top: 1rem;
      font-size: 0.65rem;
      padding: 0.4rem 1.5rem 0.4rem 1.5rem;
  
      /* transform: translateY(-10px); */
  
    }
  
    .deliver--text>div>lord-icon {
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
      /* padding-bottom: 1rem; */
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
      /*  animation-iteration-count: infinite; */
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
      /* height: 20% !important; */
      margin-top: 40px;
      margin-bottom: 46px;
    }
  
    .welcome--text {
      font-size: 1.2rem;
      padding-top: 2.4rem;
      padding-bottom: 0.1rem;
    }
  
    .restaurent--name {
      font-size: 2rem;
      padding-top: 0.3rem;
    }
  
    .btn--explore {
      font-size: 0.55rem;
      text-align: center;
      padding: 0.4rem 1rem;
      margin: 0;
      margin-top: 2.5rem;
  
  
      /* transition-duration: 800ms; */
  
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
      /* display: none; */
      font-size: 12px;
      padding-right: 4px;
    }
  
    .cart-div>span {
      font-size: 12px;
      padding-left: 0;
    }
  
    /* .cart--section>button{
    } */
    #up--btn {
      /* display: none; */
      position: absolute;
      width: 1.7em !important;
      border-left: 2.3rem solid transparent;
      border-right: 2.3rem solid transparent;
      border-bottom: 3.21rem solid rgba(255, 166, 0, 0.67);
      /* font-size: 4rem; */
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
  
    .inlogs {
      width: 130px;
      position: absolute;
      flex-direction: column;
      transform: translate(-100%, -50%);
    }
  
    #avatar-name {
      font-size: 0.7rem;
    }
  
    .licon {
      /* height: 90px !important; */
      width: 17px !important;
      height: 17px !important;
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
      /*  animation-iteration-count: infinite; */
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
      /* height: 20% !important; */
      margin-top: 30px;
      margin-bottom: 36px;
    }
  
    .welcome--text {
      font-size: 1.2rem !important;
      padding-top: 1.8rem;
      padding-bottom: 0.1rem;
    }
  
    .restaurent--name {
      font-size: 1.8rem;
      padding-top: 0.3rem;
    }
  
    .btn--explore {
      font-size: 0.5rem;
      text-align: center;
      padding: 0.3rem 0.8rem;
      margin: 0;
      margin-top: 2.5rem;
  
  
      /* transition-duration: 800ms; */
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
      /* font-size: 0.6rem;
      padding: 0.4rem 0.8rem 0.4rem 0.8rem; */
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
  
    .deliver--text>div>div>h1 {
      display: inline;
      font-size: 1rem;
      /* padding-bottom: 30px !important; */
    }
  
    .deliver--text>div>div>h2 {
      font-size: 0.55rem;
      /* transform: translate(3rem, -1.3rem); */
    }
  
    .deliver--text>div>div>h3 {
      font-size: 0.55rem;
      /* transform: translate(3.9rem, -1.7rem); */
    }
  
    .deliver--text>button {
      margin-top: 1rem;
      font-size: 0.55rem;
      padding: 0.35rem 1.3rem 0.35rem 1.3rem;
  
      /* transform: translateY(-8px); */
  
    }
  
    .deliver--text>div>lord-icon {
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
  
    /* .form-signup{
    padding-right: 10px;
    padding-top: 15px;
    padding-right: 10px;
    padding-bottom: 25px;
  
  } */
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
  
    .inlogs {
      width: 130px;
      position: absolute;
      flex-direction: column;
      transform: translate(-100%, -50%);
    }
  
    #avatar-name {
      font-size: 0.6rem;
    }
  
    .licon {
      /* height: 90px !important; */
      width: 15px !important;
      height: 15px !important;
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
      /*  animation-iteration-count: infinite; */
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
      /* height: 20% !important; */
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
      /* display: inline; */
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
      /* display: inline; */
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
      /* display: inline; */
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
      /* display: inline; */
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
      /* font-size: 0.5rem;
      padding: 0.5rem 0.8rem 0.4rem 0.8rem; */
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
    .inlogs {
      width: 130px;
      position: absolute;
      flex-direction: column;
      transform: translate(-95%, -50%);
    }
  
    #avatar-name {
      font-size: 0.6rem;
    }
  
    .licon {
      /* height: 90px !important; */
      width: 15px !important;
      height: 15px !important;
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
      /* font-size: 0.5rem;
      padding: 0.5rem 0.8rem 0.4rem 0.8rem; */
      transform: translate(5.4rem, -23rem);
    }
  
    .cart-div {
      width: 60%;
    }
  
    .cart-div>h1 {
      /* display: none; */
      font-size: 12px;
      padding-right: 2px;
    }
  
    .cart-div>span {
      font-size: 12px;
      padding-left: 0;
    }
  
    /* .cart--section>button{
    } */
    #up--btn {
      /* display: none; */
      position: absolute;
      width: 1.4em !important;
      border-left: 2.1rem solid transparent;
      border-right: 2.1rem solid transparent;
      border-bottom: 3rem solid rgba(255, 166, 0, 0.67);
      /* font-size: 4rem; */
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
      /* height: 20% !important; */
      margin-top: 35px;
      margin-bottom: 30px;
    }
  
    .welcome--text {
      font-size: 0.8rem !important;
      padding-top: 1.7rem;
      padding-bottom: 0.1rem;
    }
  
    .restaurent--name {
      font-size: 1.6rem;
      padding-top: 0.3rem;
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
  
    .deliver--text>div>div>h1 {
      display: inline;
      font-size: 0.9rem;
      /* padding-bottom: 30px !important; */
    }
  
    .deliver--text>div>div>h2 {
      font-size: 0.55rem;
      /* transform: translate(3rem, -1rem); */
    }
  
    .deliver--text>div>div>h3 {
      font-size: 0.55rem;
      /* transform: translate(3.9rem, -1.5rem); */
    }
  
    .deliver--text>button {
      margin-top: 1rem;
      font-size: 0.55rem;
      padding: 0.35rem 1.3rem 0.35rem 1.3rem;
  
      /* transform: translateY(-8px); */
  
    }
  
    .deliver--text>div>lord-icon {
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
    /* background: #000; */
    /* background-color: rgb(245, 237, 237); */
    background: #0abdc797;
    backdrop-filter: blur(10px);
    /* background-color: #02b3bd; */
    background-color: #00000036;
    backdrop-filter: blur(13px);
  
    /* visibility: hidden; */
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
    /* color: white !important; */
    /* color: #dd2721a6; */
    font-weight: bold;
    color: rgba(255, 166, 0, 0.67);
    color: rgba(255, 166, 0, 0.8);
  
  
  
  
  }
  .overlay-nav-link li a:hover {
    /* color: white !important; */
    /* color: #dd2721a6; */
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
    /* transform: translate(44rem, -18.3rem); */
    z-index: 999999;
  
  
    position: absolute;
    /* top: 1rem;
    right: 2.5rem; */
    font-size: 6rem;
    /* color: rgba(241, 37, 88, 0.479); */
    /* backdrop-filter: blur(13px); */
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
    color: white;
    color: rgba(255, 166, 0);
  
  }
  
  .nav-home-linker {
    color: #03e9f4;
    opacity: 1;
    transform: scale(1.9);
    /* text-decoration: underline 2px; */
    border-bottom: 2px solid #03e9f4;
    padding-bottom: 1px;
    color: rgba(255, 166, 0);
    border-bottom: 2px solid rgba(255, 166, 0);
  
  
  }
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)