import Swiper from "swiper";
import { Autoplay } from 'swiper/modules'

const toggleContainer = document.querySelector('#for-whom-toggles')
const toggles = Array.from(document.querySelector('#for-whom-toggles').children)

const swiper = new Swiper('#for-whom-carousel', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    waitForTransition: true
  },
  speed: 500,
  noSwipingClass: 'swiper-slide',
  noSwiping: true,
  modules: [Autoplay],
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      swiper.slideTo(0)
    }
  })
})

observer.observe(toggleContainer)

swiper.init()

swiper.on('slideChange', () => {
  toggles.forEach((toggle, index) => {
    if (index === swiper.activeIndex) {
      toggle.classList.remove('idle')
      toggle.classList.add('active')
    } else {
      toggle.classList.add('idle')
      toggle.classList.remove('active')
    }
  })
})

swiper.on('autoplayPause', () => {
  const toggle = toggles.at(swiper.activeIndex)
  const progress = toggle.querySelector('.progress')
  if (!progress) return
  progress.style.animationPlayState = 'paused'
})

swiper.on('autoplayResume', () => {
  const toggle = toggles.at(swiper.activeIndex)
  const progress = toggle.querySelector('.progress')
  if (!progress) return
  progress.style.animationPlayState = 'running'
})

toggles.forEach((toggle, index) => {
  toggle.addEventListener('click', () => {
    swiper.slideTo(index)
  })
})

