document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     MASTHEAD SLIDER
  ========================== */
  new Swiper(".js-masthead-slider", {
    loop: true,
    speed: 1800,
    effect: "fade",
    fadeEffect: { crossFade: true },

    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },

    allowTouchMove: false,

    lazy: {
      loadPrevNext: true
    }
  });


  /* =========================
     UNDER DEVELOPMENT OVERLAY
  ========================== */
  const overlay = document.getElementById("devOverlay");
  const closeBtn = document.getElementById("devOverlayClose");
  const closeBtn2 = document.getElementById("devOverlayCloseBtn");

  if (overlay) {

    // Open overlay when clicking unfinished links
    document.querySelectorAll(".under-development").forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        overlay.classList.add("active");
      });
    });

    // Close overlay
    function closeOverlay() {
      overlay.classList.remove("active");
    }

    if (closeBtn) closeBtn.addEventListener("click", closeOverlay);
    if (closeBtn2) closeBtn2.addEventListener("click", closeOverlay);

    // Close when clicking outside content
    overlay.addEventListener("click", function(e) {
      if (e.target === overlay) {
        closeOverlay();
      }
    });
  }

});

document.addEventListener("DOMContentLoaded", function () {

  const transition = document.getElementById("page-transition");

  // Fade out when page loads
  setTimeout(() => {
    transition.classList.add("loaded");
  }, 100);

  // Intercept all internal links
  document.querySelectorAll("a[href]").forEach(link => {

    const url = link.getAttribute("href");

    // Ignore external, anchors, mail, tel
    if (
      url.startsWith("http") ||
      url.startsWith("#") ||
      url.startsWith("mailto:") ||
      url.startsWith("tel:")
    ) return;

    link.addEventListener("click", function (e) {
      e.preventDefault();

      transition.classList.remove("loaded");
      transition.classList.add("active");

      setTimeout(() => {
        window.location.href = url;
      }, 400);
    });
  });

});