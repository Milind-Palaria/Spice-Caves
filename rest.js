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
var loggedIn=false;
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
      console.log(res);

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
    console.log("Got the token: ", result.data);
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
  console.log(appearing2);
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
