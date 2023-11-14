import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

const togglesContainer = document.querySelector('#how-it-happen-toggles')
const toggles = Array.from(document.querySelectorAll('.how-it-happen-toggle'))

const swiper = new Swiper('#how-happen-carousel', {
  speed: 400,
  noSwiping: true,
  noSwipingClass: 'swiper-slide',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
})
swiper.init()

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      swiper.slideTo(0)
    }
  })
})

observer.observe(togglesContainer)

swiper.on('slideChange', (swiper) => {
  const activeToggle = toggles[swiper.activeIndex]
  const parent = activeToggle.parentElement

  parent.scrollTo({ left: activeToggle.scrollWidth * swiper.activeIndex })
  
  toggles.forEach((toggle, index) => {
    if(swiper.activeIndex === index) {
      toggle.classList.add('active')
    } else {
      toggle.classList.remove('active')
    }
  })
})

toggles.forEach((toggle, index) => {
  toggle.addEventListener('click', () => {
    swiper.slideTo(index)
  })
})

