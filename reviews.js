let isOpen = false;
const reviewToggle = document.querySelector("#reviews-toggle");
const reviews = document.querySelector("#reviews-list");
const container = document.querySelector(".reviews");
const reviewItems = document.querySelectorAll(".review-item");

const links = [
  "https://www.trustpilot.com/review/logolivery.com",
  "https://www.trustpilot.com/review/logolivery.com",
  "https://www.trustpilot.com/review/logolivery.com",
  "https://www.trustpilot.com/review/logolivery.com",
  "https://www.producthunt.com/products/logolivery/reviews",
  "https://www.producthunt.com/products/logolivery/reviews",
  "https://twitter.com/amilkoff/status/1567778588795052032",
  "https://www.producthunt.com/products/logolivery/reviews",
  "https://www.producthunt.com/products/logolivery/reviews",
  "https://www.producthunt.com/products/logolivery/reviews",
  "https://www.trustpilot.com/reviews/63fc6deb9b64b1bdaf639be0",
  "https://www.producthunt.com/products/logolivery/reviews",
  "https://www.producthunt.com/products/logolivery/reviews",
  "https://www.producthunt.com/products/logolivery/reviews",
  "https://www.producthunt.com/products/logolivery/reviews",
];

if (reviews && reviewToggle) {
  reviewToggle.addEventListener("click", () => {
    if (!isOpen) {
      isOpen = true;
      const height = reviews.scrollHeight;

      reviews.classList.add("opened");
      container.classList.add("opened");

      reviews.style.maxHeight = height + "px";
      reviewToggle.textContent = "Got It!";
    } else {
      isOpen = false;
      container.classList.remove("opened");
      reviews.classList.remove("opened");
      reviews.style.maxHeight = "600px";
      reviewToggle.textContent = "More Customer Reviews";

      const top = window.scrollY + reviews.getBoundingClientRect().top;
      window.scrollTo({ top });
    }
  });
}

reviewItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    window.open(links[index], "_blank");
  });
});

reviews.addEventListener("transitionend", () => {
  window.dispatchEvent(new Event("height-increase"));
});
