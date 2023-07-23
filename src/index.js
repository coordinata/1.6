import "./index.html";
import "./index.scss";

const swiperBrand = new Swiper(".image-slider", {
  direction: "horizontal",
  loop: "true",
  slidesPerView: "auto",
  spaceBetween: 16,

  breakpoints: {
    768: {
      enabled: false,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const toggleButton = document.querySelector(".brand-block__show-more-button");
let flase_or_true = true;
const element = document.getElementById("element"); // Замените 'yourElementId' на идентификатор вашего элемента
const height = element.offsetHeight;
const brandShowMore = document.querySelector(".brand-block__show-more-button");

brandShowMore.addEventListener("click", () => {
  changeCSS();
});

function changeCSS() {
  if (height === 160) {
    if (window.innerWidth > 1200) {
      const mediaQuery = window.matchMedia("(min-width: 1120px)");
      const swiperSlides = document.querySelectorAll(".swiper-slide-brand");
      if (flase_or_true) {
        if (mediaQuery.matches) {
          for (let i = 0; i < swiperSlides.length; i++) {
            swiperSlides[i].style.display = "flex";
            toggleButton.innerHTML = "Скрыть";
            toggleButton.style.setProperty(
              "--transform-rotate",
              "rotate(180deg)"
            );
            flase_or_true = false;
          }
        }
      } else {
        if (mediaQuery.matches) {
          for (let i = 0; i < swiperSlides.length; i++) {
            swiperSlides[i].style =
              ".swiper-slide-brand:nth-last-child(-n + 3) { display: none;  }";
            toggleButton.innerHTML = "Показать все";
            toggleButton.style.setProperty(
              "--transform-rotate",
              "rotate(0deg)"
            );
            flase_or_true = true;
          }
        }
      }
    } else if (window.innerWidth < 1200 && window.innerWidth >= 768) {
      const mediaQuery = window.matchMedia("(min-width: 768px)");
      const swiperSlides = document.querySelectorAll(".swiper-slide-brand");
      if (flase_or_true) {
        if (mediaQuery.matches) {
          for (let i = 0; i < swiperSlides.length; i++) {
            swiperSlides[i].style.display = "flex";
            toggleButton.innerHTML = "Скрыть";
            toggleButton.style.setProperty(
              "--transform-rotate",
              "rotate(180deg)"
            );
            flase_or_true = false;
          }
        }
      } else {
        if (mediaQuery.matches) {
          for (let i = 0; i < swiperSlides.length; i++) {
            swiperSlides[i].style =
              ".swiper-slide-brand:nth-last-child(-n + 3) { display: none;  }";
            toggleButton.innerHTML = "Показать все";
            toggleButton.style.setProperty(
              "--transform-rotate",
              "rotate(0deg)"
            );
            flase_or_true = true;
          }
        }
      }
    } else {
    }
  } else {
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page");

  // Sidebar + Header
  const sidebarOpen = document.querySelector(".js-sidebar-open");
  const sidebarClose = document.querySelector(".js-sidebar-close");
  const sidebar = document.querySelector(".side-navigation");
  const sidebarContent = document.querySelector(".side-navigation__content");

  sidebarOpen.addEventListener("click", (evt) => {
    sidebar.classList.add("side-navigation--active");
    page.classList.add("page--no-scroll");
    evt.stopPropagation();
  });

  sidebarClose.addEventListener("click", () => {
    sidebar.classList.remove("side-navigation--active");
  });

  sidebarContent.addEventListener("click", (evt) => {
    evt.stopPropagation();
  });

  page.addEventListener("click", () => {
    sidebar.classList.remove("side-navigation--active");
  });

  // Equipment Repair
  if (window.innerWidth < 768) {
    new Swiper(".equipment-repair-slider", {
      slidesPerView: 1.27,
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }

  const equipmentRepairSlider = document.querySelector(
    ".equipment-repair-slider"
  );
  const equipmentRepairMoreInfo = document.querySelector(
    ".equipment-repair__more-info"
  );

  equipmentRepairMoreInfo.addEventListener("click", () => {
    equipmentRepairSlider.classList.toggle("equipment-repair-slider--full");
    equipmentRepairMoreInfo.classList.toggle("more-info--active");
    toggleMoreInfoText(equipmentRepairMoreInfo, "Показать все", "Скрыть");
  });

  // Service Prices
  if (window.innerWidth < 768) {
    new Swiper(".service-prices-slider", {
      slidesPerView: 1.15,
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }

  // Popup
  const buttonPopupFeedback = document.querySelector(".js-popup-feedback");
  const buttonPopupRequestСall = document.querySelector(
    ".js-popup-request-call"
  );

  const popupFeedback = document.querySelector("#popup-feedback");
  const popupPopupRequestСall = document.querySelector("#popup-request-call");

  const popupFeedbackContent = popupFeedback.querySelector(".popup__content");
  const popupRequestСallContent =
    popupPopupRequestСall.querySelector(".popup__content");

  const popupClose = document.querySelectorAll(".js-popup-close");

  buttonPopupFeedback.addEventListener("click", (evt) => {
    popupFeedback.classList.add("popup--active");
    page.classList.add("page--no-scroll");
    evt.stopPropagation();
  });
  buttonPopupRequestСall.addEventListener("click", (evt) => {
    popupPopupRequestСall.classList.add("popup--active");
    page.classList.add("page--no-scroll");
    evt.stopPropagation();
  });

  popupFeedbackContent.addEventListener("click", (evt) => {
    evt.stopPropagation();
  });
  popupRequestСallContent.addEventListener("click", (evt) => {
    evt.stopPropagation();
  });

  popupClose.forEach((button) => {
    button.addEventListener("click", () => {
      popupFeedback.classList.remove("popup--active");
      popupPopupRequestСall.classList.remove("popup--active");
      page.classList.remove("page--no-scroll");
    });
  });

  page.addEventListener("click", () => {
    popupFeedback.classList.remove("popup--active");
    popupPopupRequestСall.classList.remove("popup--active");
    page.classList.remove("page--no-scroll");
  });

  // Secondary Functions
  function toggleMoreInfoText(moreInfoButton, textClose, textOpen) {
    if (moreInfoButton.textContent === textClose) {
      moreInfoButton.textContent = textOpen;
    } else {
      moreInfoButton.textContent = textClose;
    }
  }
});
