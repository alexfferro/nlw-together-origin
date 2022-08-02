// ABRE E FECHA MENU QUANDO CLICAR NO HAMBURGUE R E X 
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

// QUANDO CLICLAR EM UM ITEM DO MENU, ESCONDER O MENU

const links = document.querySelectorAll('nav ul li a');

for(const link of links) {
  link.addEventListener('click', function(){
    nav.classList.remove('show');
  })
}

// MUDAR O HEADER DA PAGINA QUANDO ROLAR O SCROLL

const header = document.querySelector('#header');
const navHeight = header.offsetHeight


function changeHeaderWhenScroll() {
  if(this.window.scrollY >= navHeight){
    // MAIOR QUE A ALTURA DO HEADER
    header.classList.add('scroll')
  } else{
    // MENOR QUE A ALTURA DO HEADER
    header.classList.remove('scroll')
  }
}


/* TESTIMONIALS CARROUSEL */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767 : {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* SCROLL REVEAL */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(`
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social
`,

{ interval: 100})


/* BOTÃO DO BACK TO TOP */

const backToTopButton = document.querySelector('.back-to-top');



function backToTop(){
  if(window.scrollY >= 560){
    backToTopButton.classList.add('show');
  }else {
    backToTopButton.classList.remove('show');
  }
}

const sections = document.querySelectorAll('main section[id]');

function activateMenuAtCurrentSection(){
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd){
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
      
    }else {
      document.querySelector('nav ul li a[href*=' + sectionId +']').classList.remove('active')
    }
  }
}



window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})