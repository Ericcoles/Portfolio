const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const scrollUp = document.querySelector("#scroll-up");
// const scrollUp1 = document.querySelector("#scroll-up1");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// scrollUp1.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// });
