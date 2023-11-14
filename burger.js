import disableScroll from 'disable-scroll'

let isOpen = false
const burger = document.querySelector('#open-menu')
const burgerMenu = document.querySelector('#mobile-menu')
const burgerBg = document.querySelector('#menu-bg')

const links = Array.from(document.querySelectorAll('[data-mobile-nav-link]'))

const eventBanner = document.querySelector("#event-banner")
const navbar = document.querySelector("#navbar")

const closedEventBanner = JSON.parse(localStorage.getItem('closed_event_banner'))

if (closedEventBanner === true) {
  eventBanner.hidden = true
} else {
  eventBanner.hidden = false
}

document.documentElement.style.setProperty('--menuTop', eventBanner?.scrollHeight + navbar?.scrollHeight + 'px')

const closeMenu = () => {
  isOpen = false
  burgerBg.hidden = true;
  burgerMenu.hidden = true
  disableScroll.off()

  burger.classList.remove('open')
  burger.classList.add('close')

  burgerMenu.classList.remove('open')
  burgerMenu.classList.add('close')

  burgerBg.classList.remove('open')
  burgerBg.classList.add('close')
}

burgerBg.addEventListener('click', closeMenu)

burger.addEventListener('click', () => {
  if (isOpen) {
    closeMenu()
  }
  else {
    if (window.scrollY > eventBanner?.scrollHeight) {
      document.documentElement.style.setProperty('--menuTop', navbar?.scrollHeight + 'px')
    } else {
      document.documentElement.style.setProperty('--menuTop', eventBanner?.scrollHeight + navbar?.scrollHeight + 'px')
    }
    isOpen = true
    disableScroll.on(document.documentElement)

    burger.classList.add('open')
    burger.classList.remove('close')

    burgerMenu.classList.add('open')
    burgerMenu.classList.remove('close')
    burgerMenu.hidden = false;


    burgerBg.classList.add('open')
    burgerBg.classList.remove('close')
    burgerBg.hidden = false;
  }
})


links.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu()
    setTimeout(() => {
      const el = document.querySelector(`#${link.dataset.mobileNavLink}`)
      if (el) {
        const top = window.scrollY + el.getBoundingClientRect().top
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }, 100)
  })
})


