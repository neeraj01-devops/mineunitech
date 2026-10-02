/* ==========================================================================
   HOMEPAGE SCRIPTS (SWIPER CAROUSELS & INTERACTIVITY)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
    // 1. Hero Swiper Carousel
    if (document.querySelector(".home-hero-swiper")) {
        const heroSwiper = new Swiper(".home-hero-swiper", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            speed: 800,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".home-hero-arrow-next",
                prevEl: ".home-hero-arrow-prev",
            },
            on: {
                slideChange: function () {
                    const realIndex = this.realIndex;
                    document.querySelectorAll(".home-hero-ind-num").forEach((el, idx) => {
                        if (idx === realIndex) {
                            el.classList.add("active");
                        } else {
                            el.classList.remove("active");
                        }
                    });
                },
            },
        });

        // Clickable slide indicators (01, 02, 03)
        document.querySelectorAll(".home-hero-ind-num").forEach((el) => {
            el.addEventListener("click", function () {
                const targetSlide = parseInt(this.getAttribute("data-slide"), 10);
                if (!isNaN(targetSlide)) {
                    heroSwiper.slideToLoop(targetSlide);
                }
            });
        });
    }

    // 2. Products Category Swiper Carousel
    if (document.querySelector(".home-products-swiper")) {
        new Swiper(".home-products-swiper", {
            slidesPerView: 4,
            spaceBetween: 22,
            loop: true,
            speed: 600,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".home-prod-next",
                prevEl: ".home-prod-prev",
            },
            pagination: {
                el: ".home-products-dots",
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 18,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 22,
                },
            },
        });
    }

    // 3. Testimonials Swiper Carousel
    if (document.querySelector(".home-testimonials-swiper")) {
        new Swiper(".home-testimonials-swiper", {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            speed: 600,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".home-test-next",
                prevEl: ".home-test-prev",
            },
        });
    }
});
