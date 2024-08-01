const header = document.querySelector("header");
let lastKnownScrollPosition = 0;
let ticking = false;

const doSomething = (scrollPos) => {
  // Do something with the scroll position

  if(scrollPos > 32) {
    header.classList.add("scrolled");

  }
  if(scrollPos <= 32) {
    header.classList.remove("scrolled");
  }
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
const scrolled = () => {

    header.classList.add("scrolled");
};

// document.addEventListener("scroll" {})
