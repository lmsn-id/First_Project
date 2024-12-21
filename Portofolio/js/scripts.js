const themeIcons = document.querySelectorAll(".theme-toggle");
const themeHamburger = document.getElementById("hamburger");
const body = document.body;
const headers = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelectorAll(".hamburger");
const list = document.querySelectorAll(".list");

themeIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    body.classList.toggle("dark");
    headers.classList.toggle("dark");
    themeHamburger.classList.toggle("dark");

    themeIcons.forEach((icon) => {
      if (body.classList.contains("dark")) {
        icon.classList.replace("bx-moon", "bx-sun");
      } else {
        icon.classList.replace("bx-sun", "bx-moon");
      }
    });
  });
});

hamburger[0].addEventListener("click", () => {
  hamburger[0].classList.toggle("open");
  navbar.classList.toggle("open");
  headers.classList.toggle("open");
});

const checkScreenSize = () => {
  if (window.innerWidth >= 768) {
    if (hamburger[0].classList.contains("open")) {
      hamburger[0].classList.remove("open");
      navbar.classList.remove("open");
      headers.classList.remove("open");
    }
  }
};

window.addEventListener("resize", checkScreenSize);
window.addEventListener("load", checkScreenSize);

const typed = new Typed(".typing", {
  strings: ["Backend Developer", "Framwork NextJS", "Django, ReactJS"],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", activeLink));

function showModal(element) {
  const modal = document.getElementById("videoModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalInfo = document.getElementById("modalInfo");

  modalImage.src = element.querySelector(".thumbnail").src;
  modalTitle.textContent = element.getAttribute("data-title");
  modalInfo.textContent = element.getAttribute("data-info");

  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("videoModal");
  modal.style.display = "none";
}
