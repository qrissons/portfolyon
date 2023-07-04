////HEADER////
function headshot(){
  let headshot = document.querySelector("header");
  headshot.style.display = "none";
}
document.onload = setTimeout(headshot, 8000);

function show(){
  let show = document.querySelector("main");
  show.style.display = "block";
}
document.onload = setTimeout(show,8000);

function navi(){
  let navi = document.querySelector("nav");
  navi.style.display = "block";
}
document.onload = setTimeout(navi,7500);



////compétences////
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  ////projets////
  let boite = document.querySelectorAll(".demo");
  let text = document.querySelectorAll(".txt");
  function form(a) {
    boite[a].classList.toggle("active");
    text[a].classList.toggle("active");
  }


  ////contact////
 
function doc(){
  let doc = document.querySelector(".cr");
  doc.classList.toggle("vue");
}
