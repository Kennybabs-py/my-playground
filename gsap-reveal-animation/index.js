// Register CustomEase plugin
gsap.registerPlugin(CustomEase);

//Custom Eases
CustomEase.create("ease-out-quart", "0.165,0.84,0.44,1");
CustomEase.create("custom", ".85, 0, .15, 1");

function runLoaderAnimation() {
  const preloaderTl = gsap.timeline({
    defaults: { ease: "ease-out-quart", duration: 1.5, delay: 0.5 },
  });

  preloaderTl
    .to("#loader-mask", {
      xPercent: -100,
      duration: 0.8,
      delay: 2,
    })
    .to(
      "#loader-mask-2",
      {
        xPercent: -100,
        duration: 0.8,
      },
      ">-1"
    )
    .to(
      "#loader-mask-3",
      {
        xPercent: -100,
        duration: 0.8,
      },
      ">-1"
    )
    .from(
      "#js-wrapper-loader",
      {
        xPercent: 100,
        duration: 1,
      },
      ">-1"
    )
    .from("#js-loader-text", { y: "50", skewY: 5, duration: 0.8 }, ">-0.8")
    .to("#js-loader-text", { autoAlpha: 1, duration: 0.8 }, "<-0.5")
    .to("#js-wrapper-loader", {
      xPercent: -100,
      delay: 1,
      duration: 0.8,
      ease: "custom",
    })
    .fromTo(
      "#reveal-mask",
      {
        xPercent: 100,
        // delay: 2,
      },
      {
        xPercent: 0,
        duration: 0.8,
      },
      ">-0.8"
    )
    .fromTo(
      "#reveal-mask-2",
      {
        xPercent: 100,
        duration: 0.8,
        // delay: 2,
      },
      {
        xPercent: 0,
        duration: 0.8,
      },
      ">-1"
    )
    .fromTo(
      "#reveal-mask-3",
      {
        xPercent: 100,
        duration: 0.8,
        // delay: 2,
      },
      {
        xPercent: 0,
        duration: 0.8,
      },
      ">-1"
    )
    .to(
      "#reveal-mask-3",
      {
        xPercent: -100,
        duration: 0.8,
      },
      ">-0.8"
    )
    .to(
      "#reveal-mask-2",
      {
        xPercent: -100,
        duration: 0.8,
      },
      ">-1"
    )
    .to(
      "#reveal-mask",
      {
        xPercent: -100,
        duration: 0.8,
      },
      ">-1"
    )
    .from(
      "#js-wrapper",
      { xPercent: 100, duration: 0.85, ease: "custom" },
      ">-1.5"
    )
    .from(
      "#home-paragraph",
      { y: "165", skewY: 5, stagger: 0.15, duration: 0.9 },
      ">-0.9"
    )
    .from(
      "#paragraph-image",
      { autoAlpha: 0, duration: 0.1, ease: "custom" },
      "<-0.9"
    )
    .from(
      "#paragraph-image",
      { clipPath: "polygon(0 100%, 100% 86%, 100% 100%, 0 100%)", duration: 1 },
      "<"
    )
    .from("#inner-text", { autoAlpha: 0, duration: 0.8 }, "<-1")
    .from("#header", { autoAlpha: 0, duration: 0.6, ease: "custom" }, "<-0.23");
}

window.addEventListener("DOMContentLoaded", runLoaderAnimation);
