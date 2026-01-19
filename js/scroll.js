gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".business-content",
    start: "top 5%",
    end: "+=250",
    pin: true,
    scrub: true,
  }
});




tl.to(".public-works-text, .public-works-img", { opacity: 0, duration: 0.3 }, 0)
  .to(".water-text, .water-img", { opacity: 1, duration: 0.3 }, 0.3)


  .to(".item-public", { opacity: 0.3, duration: 0.3 }, 0)
  .to(".item-water", { opacity: 1, duration: 0.3 }, 0.3)

  .to(".public-works-title", { color: "#DBE0C6", duration: 0.3 }, 0)
  .to(".water-title", { color: "#00a24f", duration: 0.3 }, 0.3)


  .to(".public-works-circle", { backgroundColor: "transparent", duration: 0.3 }, 0)

  .to(".water-circle", { backgroundColor: "#00a24f", duration: 0.3 }, 0.3);