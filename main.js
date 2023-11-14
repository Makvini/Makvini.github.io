import "./style.scss";
import "./burger";
import "./reviews";
import "./navbar";
import "./sliders";
import "./textReveal";
import "./for-whom-slider";
import "./footer-animation";
import "./how-happen-carousel";
import "./create-cta-carousel";
import "./event-baner";
import "./pricing-links";
import "./new-assets/badge.png";

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
