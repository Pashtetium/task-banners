function initPromoCardAnimation() {
  const promoBanner = document.getElementById("promo-banner");
  const promoCard = document.getElementById("promo-card");

  const callback = ([entry], observer) => {
    if (!entry.isIntersecting) {
      promoCard.classList.add("promo-card_appear");
      observer.unobserve(promoBanner);
      return;
    }
  };

  const options = {
    root: null,
    threshold: 0,
  };

  const observer = new IntersectionObserver(callback, options);

  observer.observe(promoBanner);
}

function isPromoCardClosed() {
  return !!localStorage.getItem("isPromoCardClosed");
}

function initPromoCardListeners() {
  const closeButton = document.getElementById("promo-card-close-button");

  closeButton.addEventListener("click", () => {
    const promoCard = document.getElementById("promo-card");
    promoCard.classList.remove("promo-card_appear");
    localStorage.setItem("isPromoCardClosed", true);
  });
}

function init() {
  if (isPromoCardClosed()) {
    return;
  }
  initPromoCardListeners();
  initPromoCardAnimation();
}

init();
