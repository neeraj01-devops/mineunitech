/**
 * PRODUCT DETAIL INTERACTIVE JS — CONVEYOR-PRODUCT-WEB-2026
 * Handles gallery thumbnails, prev/next arrows, and tab switching.
 */

document.addEventListener('DOMContentLoaded', function () {
  // --- Gallery & Thumbnails ---
  const mainImg = document.getElementById('pdpMainImage');
  const thumbs = document.querySelectorAll('.pdp-thumb-item');
  const prevBtn = document.getElementById('pdpPrevBtn');
  const nextBtn = document.getElementById('pdpNextBtn');
  const thumbScrollLeft = document.getElementById('pdpThumbScrollLeft');
  const thumbScrollRight = document.getElementById('pdpThumbScrollRight');
  const thumbContainer = document.getElementById('pdpThumbnailsRow');

  let currentIndex = 0;

  function setMainImage(index) {
    if (!thumbs || thumbs.length === 0 || !mainImg) return;
    if (index < 0) index = thumbs.length - 1;
    if (index >= thumbs.length) index = 0;
    currentIndex = index;

    thumbs.forEach(function (thumb, i) {
      if (i === currentIndex) {
        thumb.classList.add('active');
        const imgSrc = thumb.getAttribute('data-img-src') || thumb.querySelector('img').src;
        mainImg.style.opacity = '0';
        setTimeout(function () {
          mainImg.src = imgSrc;
          mainImg.style.opacity = '1';
        }, 150);
        // Ensure thumbnail is visible in scroll area
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        thumb.classList.remove('active');
      }
    });
  }

  if (thumbs && thumbs.length > 0) {
    thumbs.forEach(function (thumb, index) {
      thumb.addEventListener('click', function () {
        setMainImage(index);
      });
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function (e) {
      e.preventDefault();
      setMainImage(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function (e) {
      e.preventDefault();
      setMainImage(currentIndex + 1);
    });
  }

  if (thumbScrollLeft && thumbContainer) {
    thumbScrollLeft.addEventListener('click', function (e) {
      e.preventDefault();
      thumbContainer.scrollBy({ left: -100, behavior: 'smooth' });
    });
  }

  if (thumbScrollRight && thumbContainer) {
    thumbScrollRight.addEventListener('click', function (e) {
      e.preventDefault();
      thumbContainer.scrollBy({ left: 100, behavior: 'smooth' });
    });
  }

  // --- Tab Switching ---
  const tabBtns = document.querySelectorAll('.pdp-tab-btn');
  const tabPanes = document.querySelectorAll('.pdp-tab-pane');

  if (tabBtns && tabPanes) {
    tabBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const targetId = this.getAttribute('data-tab');

        tabBtns.forEach(function (b) { b.classList.remove('active'); });
        tabPanes.forEach(function (p) { p.classList.remove('active'); });

        this.classList.add('active');
        const targetPane = document.getElementById(targetId);
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });
  }

  // --- Related Products Carousel (Swiper) ---
  const relatedSliderEl = document.querySelector('.pdp-related-slider');
  if (relatedSliderEl) {
    function initRelatedSwiper() {
      if (typeof Swiper !== 'undefined') {
        new Swiper(relatedSliderEl, {
          slidesPerView: 1,
          spaceBetween: 16,
          loop: true,
          grabCursor: true,
          speed: 600,
          autoplay: {
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          navigation: {
            nextEl: '.pdp-related-next',
            prevEl: '.pdp-related-prev',
          },
          breakpoints: {
            576: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1025: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          },
        });
      }
    }

    if (typeof Swiper !== 'undefined') {
      initRelatedSwiper();
    } else {
      window.addEventListener('load', initRelatedSwiper);
    }
  }
});

