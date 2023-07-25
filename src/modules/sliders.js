
document.addEventListener("DOMContentLoaded", () => {
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

});