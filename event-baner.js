const eventBanner = document.querySelector("#event-banner")
const closeBannerButton = document.querySelector("#close-event-banner")

// const closedEventBanner = JSON.parse(localStorage.getItem('closed_event_banner'))

closeBannerButton?.addEventListener('click', () => {
  // localStorage.setItem("closed_event_banner", true)
  eventBanner.hidden = true

  const navbar = document.querySelector("#navbar")

  document.documentElement.style.setProperty('--menuTop', eventBanner?.scrollHeight + navbar?.scrollHeight + 'px')
})
