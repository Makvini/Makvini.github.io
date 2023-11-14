const navbar = document.querySelector("#navbar");
const links = Array.from(document.querySelector("[data-nav]")?.children);

let scrollPos = window.scrollY;
let shown = false;

function throttle(fn, wait) {
  var time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

const handleNavbar = () => {
  const bottom = navbar.getBoundingClientRect().bottom;
  const current = window.scrollY;

  if (bottom >= current) {
    if (!shown) {
      navbar.classList.add("navbar-show");
      navbar.classList.remove("navbar-hide");
    }
    return;
  }

  if (scrollPos < window.scrollY) {
    if (shown) {
      navbar.classList.add("navbar-hide");
      navbar.classList.remove("navbar-show");
    }
    shown = false;
  } else if (scrollPos > window.scrollY) {
    if (!shown) {
      navbar.classList.add("navbar-show");
      navbar.classList.remove("navbar-hide");
    }
    shown = true;
  }

  scrollPos = window.scrollY;
};

window.addEventListener("load", () => {
  const bottom = navbar.getBoundingClientRect().bottom;
  const current = window.scrollY;

  shown = bottom > current;
  handleNavbar();
});
window.addEventListener("scroll", throttle(handleNavbar, 50));

links.forEach((link) => {
  link.addEventListener("click", () => {
    const el = document.querySelector(`#${link.dataset.navLink}`);
    if (el) {
      const top = window.scrollY + el.getBoundingClientRect().top;
      window.scrollTo({ top });
    }
  });
});
