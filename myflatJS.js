document.addEventListener("DOMContentLoaded", function () {
  ScrollTrigger.normalizeScroll(true);
  gsap.registerPlugin(Flip);

  function initDesktopAnimations() {
    window.addEventListener("resize", adjustHeight);

    function adjustHeight() {
      var windowHeight = window.innerHeight;
      var wrapperHeight;

      if (windowHeight <= 911) {
        wrapperHeight = 53;
      } else if (windowHeight <= 1024) {
        wrapperHeight = 59;
      } else if (windowHeight <= 1280) {
        var minH = 1024;
        var maxH = 1280;
        var minHeightPercent = 59;
        var maxHeightPercent = 63;

        wrapperHeight =
          minHeightPercent +
          ((maxHeightPercent - minHeightPercent) * (windowHeight - minH)) /
            (maxH - minH);
      } else {
        wrapperHeight = 63;
      }

      document.querySelector(".main-image-wrapper").style.height =
        wrapperHeight + "%";
    }

    adjustHeight();

    const mainAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_main",
        start: "top center",
        end: "top center",
        overwrite: true,
      },
    });

    mainAnim.from(".navbar", { yPercent: -100, duration: 1 });

    mainAnim.to(
      ".navbar",
      {
        xPercent: -45,
        duration: 1,
        delay: 2,
      },
      "<"
    );

    const group = document.querySelector(".preload-img-wrapper");
    const images = group.querySelectorAll(".preload-img-item");

    const state = Flip.getState(".preload-img-wrapper, .preload-img-item");

    group.classList.remove("reorder");

    images.forEach((image) => {
      image.classList.remove("reorderimage");
    });

    Flip.from(state, {
      absolute: true,
      duration: 1.5,
      ease: "expo",
      delay: 2,
    });

    mainAnim.to(".preloader", {
      yPercent: -100,
      duration: 1,
      ease: "expo",
      onComplete: () => {
        gsap.fromTo(
          ".headings-wrapper",
          { yPercent: -50, autoAlpha: 0, ease: "power3.out" },
          { yPercent: 0, autoAlpha: 1, duration: 0.5 }
        );

        gsap.fromTo(
          ".savings-wrapper",
          { yPercent: 50, autoAlpha: 0, ease: "power3.out" },
          { yPercent: 0, autoAlpha: 1, duration: 0.5 },
          "<"
        );
      },
    });

    let savingsWrapper = document.querySelector(".savings-wrapper");

    const savingsAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_main",
        start: () => {
          let offsetTop = savingsWrapper.offsetTop;
          let windowHeight = window.innerHeight;
          return `${offsetTop - windowHeight * 0.05}px top`;
        },
        end: "+=300%",
        scrub: true,
        pin: true,
      },
    });

    savingsAnimation.to(".headings-wrapper", {
      autoAlpha: 0,
    });

    savingsAnimation.to(
      ".main_info-wrapper",
      {
        xPercent: 400,
      },
      "<"
    );

    savingsAnimation.to(
      ".main-image-wrapper",
      {
        width: "23%",
        height: "60%",
        x: "15.3rem",
      },
      "<"
    );

    savingsAnimation.to("#mainimgone", { scale: 1.5 }, "<");

    savingsAnimation.fromTo(
      ".savings-txt-item",
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      "<60%"
    );

    savingsAnimation.from(".savings-txt-item", { y: "10rem" }, "<");

    savingsAnimation.fromTo(".savings-img", { autoAlpha: 0 }, { autoAlpha: 1 });

    savingsAnimation.from(".savings-img", { y: "10rem" }, "<");
    savingsAnimation.to("#mainimgtwo", { yPercent: -100 }, "<");

    savingsAnimation.fromTo(
      ".main-marquee-wrapper",
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      "<"
    );

    savingsAnimation.from(".main-marquee-wrapper", { y: "10rem" }, "<");

    gsap.set(".is-2, .is-3, .is-4", {
      y: "30rem",
      autoAlpha: 0,
    });

    const worksAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_works",
        start: "top top",
        end: "+=400%",
        scrub: true,
        pin: true,
        overwrite: true,
      },
    });

    worksAnim.to(".is-2", { y: "0rem", autoAlpha: 1 });
    worksAnim.to(".is-1", { yPercent: -100, autoAlpha: 0 }, "<");
    worksAnim.to(".is-two", { yPercent: -100 }, "<");
    worksAnim.to(".is-one", { yPercent: -100 }, "<");
    worksAnim.to(".marquee-anim", { x: "-11.5rem" }, "<");

    worksAnim.to(".is-3", { y: "0rem", autoAlpha: 1 });
    worksAnim.to(".is-2", { yPercent: -100, autoAlpha: 0 }, "<");
    worksAnim.to(".is-three", { yPercent: -200 }, "<");
    worksAnim.to(".is-two", { yPercent: -200 }, "<");
    worksAnim.to(".marquee-anim", { x: "-26.5rem" }, "<");

    worksAnim.to(".is-4", { y: "0rem", autoAlpha: 1 });
    worksAnim.to(".is-3", { yPercent: -100, autoAlpha: 0 }, "<");
    worksAnim.to(".is-four", { yPercent: -300 }, "<");
    worksAnim.to(".is-three", { yPercent: -300 }, "<");
    worksAnim.to(".marquee-anim", { x: "-41rem" }, "<");

    const fillWorks = gsap.to(".works-blue-fill", {
      scrollTrigger: {
        trigger: ".section_works",
        start: "top top",
        end: "+=400%",
        scrub: true,
      },
      height: "100%",
      ease: "none",
    });

    const infoAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_info",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
      },
    });

    const gridAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_grid",
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });

    gridAnim.fromTo(
      ".images-grid-items",
      { yPercent: 100 },
      { yPercent: -200 }
    );
    gridAnim.to(".headings-grid-wrapper", { yPercent: 60 }, "<");

    const usFlexWrapper = document.querySelector(".us-flex-wrapper");
    const imgItemsWrapper = document.querySelector(".img-items-wrapper");

    const usFlexHeight = usFlexWrapper.offsetHeight;
    const imgItemsHeight = imgItemsWrapper.offsetHeight;

    const chooseAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_us",
        start: "top top",
        end: "+=200%",
        scrub: 1,
        pin: true,
      },
    });

    chooseAnim.to(".us-img-item_2", { yPercent: -100 });
    chooseAnim.from(".us-img-3", { yPercent: 50 }, "<");
    chooseAnim.to(".choose-wrapper", { y: "-70vh" }, "<");
    chooseAnim.to(
      ".img-items-wrapper",
      { height: `${imgItemsHeight - usFlexHeight}` },
      "<"
    );

    const cards = document.querySelectorAll(".benefit-item");
    const imagesD = document.querySelectorAll(".benefit-image");

    cards.forEach((card) => {
      card.addEventListener("mouseover", () => {
        const index = card.getAttribute("data-index");
        const image = document.querySelector(
          `.benefit-image[data-index="${index}"]`
        );
        if (image) {
          image.classList.add("is-visible");
        }
      });

      card.addEventListener("mouseout", () => {
        const index = card.getAttribute("data-index");
        const image = document.querySelector(
          `.benefit-image[data-index="${index}"]`
        );
        if (image) {
          image.classList.remove("is-visible");
        }
      });
    });

    const benefitAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_benefit",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
      },
    });

    gsap.to(".cta-img-absolute", {
      scrollTrigger: {
        trigger: ".faq-headings-wrapper",
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
      y: "26rem",
      ease: "none",
    });

    gsap.to(".faq-image", {
      scrollTrigger: {
        trigger: ".faq-headings-wrapper",
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
      x: "-100%",
      ease: "none",
    });

    gsap.from(".faq-item-wrapper", {
      scrollTrigger: {
        trigger: ".section_faq",
        start: "top center",
        end: "bottom center",
      },
      y: "100%",
      stagger: 0.05,
      ease: "power1.inOut",
      delay: gsap.utils.random(-0.1, 0.1),
    });
  }

  function initMobileAnimations() {
    gsap.set(".is-2, .is-3, .is-4", {
      y: "30rem",
      autoAlpha: 0,
    });

    const worksAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_works",
        start: "top top",
        end: "+=400%",
        scrub: true,
        pin: true,
      },
    });

    worksAnim.to(".is-2", { y: "0rem", autoAlpha: 1 });
    worksAnim.to(".is-1", { yPercent: -100, autoAlpha: 0 }, "<");
    worksAnim.to(".is-two", { yPercent: -100 }, "<");
    worksAnim.to(".is-one", { yPercent: -100 }, "<");
    worksAnim.to(".marquee-anim", { x: "-11.5rem" }, "<");

    worksAnim.to(".is-3", { y: "0rem", autoAlpha: 1 });
    worksAnim.to(".is-2", { yPercent: -100, autoAlpha: 0 }, "<");
    worksAnim.to(".is-three", { yPercent: -200 }, "<");
    worksAnim.to(".is-two", { yPercent: -200 }, "<");
    worksAnim.to(".marquee-anim", { x: "-26.5rem" }, "<");

    worksAnim.to(".is-4", { y: "0rem", autoAlpha: 1 });
    worksAnim.to(".is-3", { yPercent: -100, autoAlpha: 0 }, "<");
    worksAnim.to(".is-four", { yPercent: -300 }, "<");
    worksAnim.to(".is-three", { yPercent: -300 }, "<");
    worksAnim.to(".marquee-anim", { x: "-41rem" }, "<");

    const cardsInfo = document.querySelectorAll(".mob_info-wrapper");

    cardsInfo.forEach((card, index) => {
      card.addEventListener("click", () => {
        if (card.classList.contains("is-active")) {
          card.classList.remove("is-active");
          card.classList.add("is-info-hide");
        } else {
          cardsInfo.forEach((card) => {
            card.classList.remove("is-active");
            card.classList.add("is-info-hide");
          });

          card.classList.add("is-active");
          card.classList.remove("is-info-hide");
        }
      });
    });

    const firstCard = document.querySelector(".mob_info-wrapper");

    if (firstCard) {
      firstCard.click();
    }

    const mobInfoWrappers = document.querySelectorAll(".mob_info-wrapper");

    mobInfoWrappers.forEach(function (mobInfoWrapper) {
      mobInfoWrapper.addEventListener("click", function () {
        setTimeout(function () {
          if (ScrollTrigger) {
            ScrollTrigger.refresh();
          }
        }, 500);
      });
    });

    const gridAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_grid",
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });

    gridAnim.fromTo(
      ".images-grid-items",
      { yPercent: 100 },
      { yPercent: -200 }
    );
    gridAnim.to(".headings-grid-wrapper", { yPercent: 100 }, "<");

    const cards = Array.from(document.querySelectorAll(".mob_benefit-wrapper"));
    const images = Array.from(document.querySelectorAll(".benefit-img"));

    cards.forEach((card, index) => {
      card.addEventListener("click", () => {
        if (card.classList.contains("is-active")) {
          card.classList.remove("is-active");
          card.classList.add("is-hide");
          images[index].classList.remove("is-visible");
        } else {
          cards.forEach((card) =>
            card.classList.remove("is-hide", "is-active")
          );
          images.forEach((image) => image.classList.remove("is-visible"));

          card.classList.add("is-active");
          images[index].classList.add("is-visible");
        }
      });
    });
  }

  const matchMedia = gsap.matchMedia();

  matchMedia.add("(min-width: 480px)", initDesktopAnimations);
  matchMedia.add("(max-width: 479px)", initMobileAnimations);
});
