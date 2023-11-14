const style = document.createElement('style')
const carousel = document.querySelector('#cta-carousel')

window.addEventListener('load', () => {
  const setCarousels = () => {
    const halfHeight = Array.from(carousel.children).slice(0, carousel.children.length / 2)
      .reduce((acc, el) => {
        const styles = getComputedStyle(el)
        const margins = Number(styles.marginTop.replace(/\D/g, '')) + Number(styles.marginBottom.replace(/\D/g, ''))
        return acc + el.clientHeight + margins
      }, 0)

    const halfWidth = Array.from(carousel.children).slice(0, carousel.children.length / 2)
      .reduce((acc, el) => {
        const styles = getComputedStyle(el)
        const margins = Number(styles.marginLeft.replace(/\D/g, '')) + Number(styles.marginRight.replace(/\D/g, ''))
        return acc + el.clientWidth + margins
      }, 0)


    style.innerHTML += ` @keyframes readyToCarouselHorizontal {
        from {
          transform: translate(0px, 0px);
        }
    
        to {
          transform: translate(${-halfWidth}px, 0px);
        }
      }`

    style.innerHTML += ` @keyframes readyToCarouselVertical {
      from {
        transform: translate(0px, 0px);
      }
  
      to {
        transform: translate(0px, ${-halfHeight}px);
      }
    }`

  }

  setCarousels()
  document.head.appendChild(style)
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((item) => {
    if (item.isIntersecting) {
      carousel.style.animationPlayState = 'running'
    } else {
      carousel.style.animationPlayState = 'paused'
    }
  })
})

observer.observe(carousel.parentElement)

