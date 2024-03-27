// //  Scroll To Top
// let span = document.querySelector(".up");

// window.onscroll = function () {
//   window.scrollY <= 100
//     ? span.classList.remove("show")
//     : span.classList.add("show");
// };

// span.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };
//------------------------------------------

// Click Toggle
let toggler = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");

toggler.onclick = function () {
  nav.classList.toggle("open");
};

close.onclick = function () {
  this.parentElement.classList.remove("open");
};

document.onkeyup = function (e) {
  if (e.key === "Escape") {
    nav.classList.remove("open");
  }
};
