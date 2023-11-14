const pricingLinks = document.querySelectorAll("[data-pricing-link]");

pricingLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const el = document.querySelector(`#pricing`);
    if (el) {
      const top = window.scrollY + el.getBoundingClientRect().top;
      window.scrollTo({ top });
    }
  });
});
