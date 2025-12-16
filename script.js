const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

const pinCards = gsap.utils.toArray(".pin-card");

pinCards.forEach((eachCard, index) => {
  if (index < pinCards.length - 1) {
    ScrollTrigger.create({
      trigger: eachCard,
      start: "top top",
      endTrigger: pinCards[pinCards.length - 1],
      end: "top top",
      pin: true,
      pinSpacing: false,
    });

    ScrollTrigger.create({
      trigger: pinCards[index + 1],
      start: "top bottom",
      end: "top top",
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set(eachCard, {
          scale: 1 - progress * 0.25,
          rotation: index % 2 === 0 ? progress * 5 : -progress * 5,
          rotationX: index % 2 === 0 ? progress * 40 : -progress * 40,
        });
        gsap.set(eachCard.querySelector(".overlay"), {
          opacity: progress * 0.4,
        });
      },
    });
  }
});
