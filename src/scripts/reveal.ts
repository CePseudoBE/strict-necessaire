import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function belowFold(selector: string) {
  return gsap.utils
    .toArray<HTMLElement>(selector)
    .filter((element) => element.getBoundingClientRect().top > innerHeight);
}

gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
  const reveals = belowFold("[data-reveal]");
  gsap.set(reveals, { autoAlpha: 0, y: 24 });
  ScrollTrigger.batch(reveals, {
    start: "top 88%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
      }),
  });

  belowFold("[data-strike]").forEach((strike) =>
    gsap.fromTo(
      strike,
      { "--strike": 0 },
      {
        "--strike": 1,
        duration: 0.6,
        ease: "power2.inOut",
        scrollTrigger: { trigger: strike, start: "top 80%", once: true },
      },
    ),
  );
});
