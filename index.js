AOS.init();
/*script to do the cool phone stuff*/
const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

// Script for Fixed Navigation
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Script for those Colors
const widget = document.querySelector('.widget');
const control = document.querySelector('.control');

widget.addEventListener('click', ()=>{
  control.classList.toggle('open')
})

const colors = [...document.querySelectorAll('.colors span')]
document.querySelector(':root').style.setProperty('--customColor', '#0044FF')

colors.forEach(color => {
  color.addEventListener('click', ()=>{
    const currentColor = color.dataset.id;
    document.querySelector(':root').style.setProperty('--customColor', currentColor)
  })
})

window.addEventListener('scroll', ()=>{
  control.classList.remove('open')
})

// Scroll To script
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});

// Type it script to make the changing words 

new TypeIt("#type1", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Man", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Programmer", { delay: 400 })
  .pause(500)
  .delete(10)
  .type("3D Modeller", { delay: 400 })
  .pause(500)
  .delete(11)
  .type("Adobe User", { delay: 400 })
  .pause(500)
  .delete(10)
  .go();

new TypeIt("#type2", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Easy-going", { delay: 400 })
  .pause(500)
  .delete(10)
  .type("A Leader", { delay: 400 })
  .pause(500)
  .delete(8)
  .type("Encouraging", { delay: 400 })
  .pause(500)
  .delete(11)
  .type("Willing", { delay: 400 })
  .pause(500)
  .delete(7)
  .type("Hardworking", { delay: 400 })
  .pause(500)
  .delete(11)
  .type("A Teamworker", { delay: 400 })
  .pause(500)
  .delete(12)
  .type("The one", { delay: 400 })
  .pause(500)
  .delete(7)
  .go();

//Script for the gliding effect for Gallery
const glide = document.querySelector(".glide");
if (glide)
  new Glide(glide, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 30,
    hoverpause: true,
    autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      996: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();

//Script for scroll to top button
  //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, the button will show up
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll up when click on button
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
