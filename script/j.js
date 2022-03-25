const portfolioContent = document.querySelector(".portfolio-content");
const mainFo = document.querySelector(".size-img");
const specialImg = document.querySelector(".special-img");
const overlay = document.querySelector(".overlay-img");
const titleImg = document.querySelector(".size-img h1");
const cross2 = document.querySelector(".cross-2");
const footerSearch = document.querySelector(".search-input input");
const scrollUp = document.querySelector(".scrool-up i");
const footer = document.querySelector(".footer");
const header = document.querySelector(".header");
const cross1 = document.querySelector(".cross-1");
const mainSearch = document.querySelector(".search-1");
const bars = document.querySelector(".fa-bars");
const sideList = document.querySelector(".mini-list");
const concelList = document.querySelector(".cancel-1");
const overlaySlide = document.querySelector(".overlay-list-content");
const overlayImg = document.querySelector(".overlay-pro");

// Toggle the side menu
bars.addEventListener("click", () => {
  sideList.classList.add("mini-list-show");
  overlaySlide.classList.add("overlay-list-show");
});

concelList.addEventListener("click", () => {
  sideList.classList.remove("mini-list-show");
  overlaySlide.classList.remove("overlay-list-show");
});

// Show Large Screen Image
const globalImg = function () {
  portfolioContent.addEventListener("click", (e) => {
    if (e.target.getAttribute("src")) {
      mainFo.classList.add("size-img-show");
      overlayImg.classList.add("overlay-pro-show");
      specialImg.src = e.target.getAttribute("src");
      titleImg.innerHTML = e.target.getAttribute("data-img");
      overlay.style.display = "block";
    }
  });

  mainFo.addEventListener("click", (e) => {
    if (e.target.classList.contains("cancel-2")) {
      mainFo.classList.remove("size-img-show");
      overlayImg.classList.remove("overlay-pro-show");
    }
  });
};
globalImg();

// Show Footer Search
cross2.addEventListener("click", () => {
  footerSearch.classList.toggle("input-show");
  console.log("clicked");
});

// Scroll Up
scrollUp.addEventListener("click", () => {
  header.scrollIntoView({ behavior: "smooth" });
});

const fnOne = function (enter) {
  const [E] = enter;
  if (E.isIntersecting) {
    scrollUp.style.bottom = "13px";
  }
};
const scrollOne = new IntersectionObserver(fnOne, {
  root: null,
  threshold: 0.9,
});
scrollOne.observe(footer);

const fnTwo = function (enter) {
  const [E] = enter;
  console.log(E);
  if (E.isIntersecting) {
    scrollUp.style.bottom = "-34px";
  }
};
const scrollTwo = new IntersectionObserver(fnTwo, {
  root: null,
  threshold: 0.9,
});
scrollTwo.observe(home);

// Show Header Search
cross1.addEventListener("click", () => {
  mainSearch.classList.toggle("search-show");
});
