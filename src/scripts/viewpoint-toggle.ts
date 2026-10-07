import { gsap } from "gsap";

const buttons = document.querySelectorAll<HTMLButtonElement>(".seg button");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

function select(selected: HTMLButtonElement) {
  buttons.forEach((button) => {
    const pressed = button === selected;
    button.setAttribute("aria-pressed", String(pressed));
    const panel = document.getElementById(button.dataset.panel ?? "");
    if (panel) panel.hidden = !pressed;
  });
}

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    if (button.getAttribute("aria-pressed") === "true") return;
    select(button);
    const panel = document.getElementById(button.dataset.panel ?? "");
    if (!panel || reducedMotion.matches) return;
    gsap.fromTo(
      panel.children,
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.06, overwrite: true },
    );
  }),
);

const initial = document.querySelector<HTMLButtonElement>(
  '.seg [aria-pressed="true"]',
);
if (initial) select(initial);
