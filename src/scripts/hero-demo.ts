import { gsap } from "gsap";

const rows = document.querySelectorAll("#reqs li");
const sheet = document.querySelector(".sheet");
const mark = document.getElementById("stamp");
const tool = document.querySelector(".tampon");
const replayButton = document.getElementById("replay");

function offsetBetween(from: Element, to: Element) {
  const start = from.getBoundingClientRect();
  const end = to.getBoundingClientRect();
  return {
    x: end.left + end.width / 2 - (start.left + start.width / 2),
    y: end.top + end.height / 2 - (start.top + start.height / 2),
  };
}

function demoTimeline() {
  const demo = gsap.timeline({ delay: 0.4 });
  rows.forEach((row, index) => {
    demo
      .fromTo(
        row.querySelector(".req"),
        { "--p": 0 },
        { "--p": 1, duration: 0.5, ease: "power2.out" },
        index * 0.65,
      )
      .fromTo(
        row.querySelector(".verdict"),
        { autoAlpha: 0, x: -6 },
        { autoAlpha: 1, x: 0, duration: 0.3 },
        "-=0.2",
      );
  });
  if (!mark || !tool) return demo;

  const target = offsetBetween(tool, mark);
  return demo
    .to(tool, {
      x: target.x,
      y: target.y - 40,
      duration: 0.5,
      ease: "power2.inOut",
    })
    .to(tool, { y: target.y, scale: 0.94, duration: 0.14, ease: "power3.in" })
    .set(mark, { autoAlpha: 1 })
    .to(sheet, { y: 2, duration: 0.05, yoyo: true, repeat: 1 }, "<")
    .to(tool, { y: target.y - 40, scale: 1, duration: 0.2, ease: "power2.out" })
    .to(tool, { x: 0, y: 0, duration: 0.6, ease: "power2.inOut" });
}

gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
  let demo = demoTimeline();
  const replay = () => {
    demo.revert();
    demo = demoTimeline();
  };
  replayButton?.addEventListener("click", replay);
  return () => replayButton?.removeEventListener("click", replay);
});
