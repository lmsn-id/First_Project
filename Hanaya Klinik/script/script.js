const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
};
list.forEach((item) =>
item.addEventListener('click',activeLink ));


//Mode
const mode = document.querySelector('.mode');
const allElements = document.querySelectorAll("*");
mode.addEventListener('click', function(){
    document.body.classList.toggle('router');

    allElements.forEach(el => {
      el.classList.add("transition");
      setTimeout(() => {
        el.classList.remove("transition");
      }, 1000);
    });
});


//Swiper
//var swiper = new Swiper(".mySwiper", {
  //  effect: "coverflow",
  //  grabCursor: true,
  //  centeredSlides: true,
  //  loop: true,
  //  autoplay:{
  //    delay:2500,
  //    disableOnInteraction: false,
  //  },
  //  slidesPerView: "auto",
  //  coverflowEffect: {
  //    rotate: 50,
  //    stretch: 0,
  //    depth: 100,
  //    modifier: 1,
  //    slideShadows: true,
  //  },
  //  pagination: {
  //    el: ".swiper-pagination",
  //  },
  //});

  var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    autoplay:{
          delay:2500,
          disableOnInteraction: false,
        },
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        950:{
            slidesPerView: 3,
        },
    },
  });

const inputs = document.querySelectorAll(".contact-input");

inputs.forEach((ipt) =>{
  ipt.addEventListener("focus", () => {
    ipt.parentNode.classList.add("focus");
    ipt.parentNode.classList.add("focus2");
  });
  ipt.addEventListener("blur", () => {
    if (ipt.value == ""){
      ipt.parentNode.classList.remove("focus2");
    }
    ipt.parentNode.classList.remove("focus");
  });
});


const imageprofile = document.querySelector(".imageprofile");
const btnlogin = document.querySelector(".login");
const close = document.querySelector("#imgclose");
btnlogin.addEventListener("click", ()=>{
  imageprofile.classList.add("popup");
});
close.addEventListener("click", ()=>{
  imageprofile.classList.remove("popup");
});

const menubar = document.querySelector("#menu");
const closebar = document.querySelector("#close");
const barmenu = document.querySelector(".menubar");
const barclose = document.querySelector(".closebar");
const navigasion = document.querySelector(".nav");
menubar.addEventListener("click", ()=>{
  navigasion.classList.add("navsistem");
  barmenu.classList.add("navsistem");
  barclose.classList.add("navsistem");
});
closebar.addEventListener("click", ()=>{
  navigasion.classList.remove("navsistem");
  barmenu.classList.remove("navsistem");
  barclose.classList.remove("navsistem");
})


