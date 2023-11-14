import "./style.scss";
import "./membership.scss";
import disableScroll from "disable-scroll";
import "./footer-animation";
import "./sliders";
import "./navbar";

const hiddenObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-animation");
      }
    });
  },
  { rootMargin: "-10px" }
);

const makeStagger = (el) => {
  const children = Array.from(el.children);

  children.forEach((item, index) => {
    item.classList.add("hidden-animation");
  });

  return children || [];
};

const app = () => {
  const staggers = document.querySelectorAll(".stagger");
  const hiddenElements = document.querySelectorAll(".hidden-animation");

  if (staggers.length) {
    staggers.forEach((el) => {
      const children = makeStagger(el);
      children.forEach((child) => {
        hiddenObserver.observe(child);
      });
    });
  }

  hiddenElements.forEach((el) => hiddenObserver.observe(el));
};

app();

let isOpen = false;
const burger = document.querySelector("#open-menu");
const burgerMenu = document.querySelector("#mobile-menu");
const burgerBg = document.querySelector("#menu-bg");

const links = Array.from(document.querySelectorAll("[data-mobile-nav-link]"));

const navbar = document.querySelector("#navbar");

const closeMenu = () => {
  isOpen = false;
  burgerBg.hidden = true;
  burgerMenu.hidden = true;
  disableScroll.off();

  burger.classList.remove("open");
  burger.classList.add("close");

  burgerMenu.classList.remove("open");
  burgerMenu.classList.add("close");

  burgerBg.classList.remove("open");
  burgerBg.classList.add("close");
};

burgerBg.addEventListener("click", closeMenu);

burger.addEventListener("click", () => {
  if (isOpen) {
    closeMenu();
  } else {
    document.documentElement.style.setProperty(
      "--menuTop",
      navbar?.scrollHeight + "px"
    );

    isOpen = true;
    disableScroll.on(document.documentElement);

    burger.classList.add("open");
    burger.classList.remove("close");

    burgerMenu.classList.add("open");
    burgerMenu.classList.remove("close");
    burgerMenu.hidden = false;

    burgerBg.classList.add("open");
    burgerBg.classList.remove("close");
    burgerBg.hidden = false;
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
    setTimeout(() => {
      const el = document.querySelector(`#${link.dataset.mobileNavLink}`);
      if (el) {
        const top = window.scrollY + el.getBoundingClientRect().top;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 100);
  });
});
