document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const cards = document.querySelectorAll(".card");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let index = 0;

  function showSlide(i) {
    if (i < 0) index = cards.length - 1;
    else if (i >= cards.length) index = 0;
    else index = i;

    carousel.style.transform = `translateX(${-index * 100}%)`;
  }

  prevBtn.addEventListener("click", () => showSlide(index - 1));
  nextBtn.addEventListener("click", () => showSlide(index + 1));
});