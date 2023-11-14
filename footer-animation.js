const body = document.documentElement
const pageWrapper = document.querySelector('.page-wrapper')
const footerContent = document.querySelector('.footer-logo-content')

const eventBanner = document.querySelector('#event-banner')
const navbar = document.querySelector('#navbar')

window.pageWrapper = pageWrapper
window.footerContent = footerContent

function setHeight() {
  const height = pageWrapper.scrollHeight + (navbar?.scrollHeight || 0) + (eventBanner?.scrollHeight || 0)
  body.style.height = height + footerContent.scrollHeight + 'px'
}

window.addEventListener('resize', setHeight);
window.addEventListener('load', setHeight)
window.addEventListener('height-increase', setHeight)



