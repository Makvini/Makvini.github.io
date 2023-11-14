const carousels = document.querySelectorAll('.designed-products-carousel')


const firstImages = [
  "new-assets/designed-products/desktop/wbt.svg",
  "new-assets/designed-products/desktop/fusecup.svg",
  "new-assets/designed-products/desktop/olyva.svg", 
  "new-assets/designed-products/desktop/hello-licence.svg",
  "new-assets/designed-products/desktop/kpx.svg",
  "new-assets/designed-products/desktop/job-maze.svg",
  "new-assets/designed-products/desktop/filecar.svg",
  "new-assets/designed-products/desktop/postwell.svg",
  "new-assets/designed-products/desktop/pielot.svg",
  "new-assets/designed-products/desktop/bluite.svg",
  "new-assets/designed-products/desktop/logoliveryai.svg",
  "new-assets/designed-products/desktop/my-works.svg",
  "new-assets/designed-products/desktop/uilearn.svg",
  "new-assets/designed-products/desktop/shortcuts.svg",
  "new-assets/designed-products/desktop/local-hero-box.svg",

  "new-assets/designed-products/desktop/wbt.svg",
  "new-assets/designed-products/desktop/fusecup.svg",
  "new-assets/designed-products/desktop/olyva.svg", 
  "new-assets/designed-products/desktop/hello-licence.svg",
  "new-assets/designed-products/desktop/kpx.svg",
  "new-assets/designed-products/desktop/job-maze.svg",
  "new-assets/designed-products/desktop/filecar.svg",
  "new-assets/designed-products/desktop/postwell.svg",
  "new-assets/designed-products/desktop/pielot.svg",
  "new-assets/designed-products/desktop/bluite.svg",
  "new-assets/designed-products/desktop/logoliveryai.svg",
  "new-assets/designed-products/desktop/my-works.svg",
  "new-assets/designed-products/desktop/uilearn.svg",
  "new-assets/designed-products/desktop/shortcuts.svg",
  "new-assets/designed-products/desktop/local-hero-box.svg",
]

carousels.forEach((carousel) => {
  const children = Array.from(carousel.children)

  children.forEach((item, index) => {
    item.style.backgroundImage = `url(${firstImages[index]})`
  })
})
