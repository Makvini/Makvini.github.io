const textRevealTarget = document.querySelector("#text-reveal");
const textRevealText = document.querySelector("#text-reveal-text");

const getPercentage = () => {
  const windowBottom = window.scrollY + window.innerHeight - 240 - 240 - 90;
  const elementTop = textRevealTarget.offsetTop;

  const percentage =
    ((windowBottom - elementTop) / textRevealTarget.clientHeight) * 100;

  if (percentage > 100) return 100;

  if (windowBottom > elementTop) return Math.round(percentage);

  return 0;
};

const fillText = (percentage) => {
  const spans = textRevealText.children;
  if (!percentage) {
    return Array.from(spans).forEach((span) => {
      span.style.color = "#364944";
    });
  }

  const nOfSpans = percentage
    ? Math.round((spans.length / 100) * percentage)
    : 0;

  for (let i = 0; i < spans.length; i++) {
    const span = spans.item(i);
    if (i <= nOfSpans) {
      span.style.color = "#F0F5F0";
    } else {
      span.style.color = "#364944";
    }
  }
};

window.addEventListener("load", () => {
  const percentage = getPercentage();
  fillText(percentage);
});

const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];

    const onScroll = () => {
      const percentage = getPercentage();
      fillText(percentage);
    };

    if (entry.isIntersecting) {
      window.addEventListener("scroll", onScroll);
    } else {
      window.removeEventListener("scroll", onScroll);
    }
  },
  { rootMargin: "200px" }
);

observer.observe(textRevealTarget);
