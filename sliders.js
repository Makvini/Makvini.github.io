const carousels = document.querySelectorAll("[data-carousel]");

const style = document.createElement("style");

const setCarousels = () =>
  carousels.forEach((carousel) => {
    const inverted = !!carousel.dataset.carouselInvertDirection;
    const animationName = carousel.dataset.carouselAnimationName;
    const halfWith = Array.from(carousel.children)
      .slice(0, carousel.children.length / 2)
      .reduce((acc, el) => {
        const styles = getComputedStyle(el);
        const margins =
          Number(styles.marginLeft.replace(/\D/g, "")) +
          Number(styles.marginRight.replace(/\D/g, "")) +
          Number(
            getComputedStyle(carousel.parentElement).gap.replace(/\D/g, "")
          );
        return acc + el.clientWidth + margins;
      }, 0);

    style.innerHTML += ` @keyframes ${animationName} {
      from {
        transform: translateX(${inverted ? -halfWith + "px" : "0px"});
      }
  
      to {
        transform: translateX(${inverted ? 0 : -halfWith}px)
      }
    }`;
  });

window.addEventListener("load", setCarousels);
document.head.appendChild(style);
