/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
           navToggle = document.getElementById('nav-toggle'),
           navClose = document.getElementById('nav-close')
  /*========= menu show ========*/
  /* validate if constant exists */

  if(navToggle){
    navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
    })
  }

  /*========== menu hidden ==========*/
 /* validate if constant exists */
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*============= change background header ============*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
 }
   window.addEventListener('scroll', scrollHeader)
   
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

  /*============= Login Form ==============*/

  var loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}

  var LoginForm = document.getElementById("LoginForm");
    var RegForm = document.getElementById("RegForm");
    var Indicator = document.getElementById("Indicator");

        function register(){
             RegForm.style.transform = "translateX(0px)";
             LoginForm.style.transform = "translateX(0px)";
             Indicator.style.transform = "translateX(100px)";
        }
        function login(){
             RegForm.style.transform = "translateX(300px)";
             LoginForm.style.transform = "translateX(300px)";
             Indicator.style.transform = "translateX(0px)";
        }



 /*================= Collection Filter ===============*/

 const filter_btns = document.querySelectorAll(".collection__button");

 filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".collection__container").isotope({ filter: filterValue });
  })
);

$(".collection__container").isotope({
  itemSelector: ".collection__card",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,  
    // reset: true, // Animations repeat
})  

sr.reveal('.home__title, .home__description, .home__data', {interval: 100})
sr.reveal('.home__phone', {origin: 'left', delay: 1500})
sr.reveal('.home__comment', {origin: 'right', delay: 1800})
sr.reveal('.services__container, .customer__container', {delay: 600})
sr.reveal('.collection__container, .footer__container', {delay: 600, origin:'bottom', interval: 100})
sr.reveal('.featured__container', {delay: 500})
sr.reveal('.sale__data, .about__img',{origin: 'left'})
sr.reveal('.sale__img, .about__data',{origin: 'right'})
