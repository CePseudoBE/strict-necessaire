import { gsap } from "gsap";

const tip = document.querySelector<SVGSVGElement>(".cursor-tip");
const mark = document.querySelector<HTMLElement>(".cursor-mark");
const root = document.documentElement;
const hotspot = 2;

function hasOwnText(element: Element) {
  return [...element.childNodes].some(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim(),
  );
}

function textBox(element: Element) {
  const range = document.createRange();
  range.selectNodeContents(element);
  return range.getBoundingClientRect();
}

function isLight(color: string) {
  const [r = 0, g = 0, b = 0] = color.match(/[\d.]+/g)?.map(Number) ?? [];
  const max = color.startsWith("color(") ? 1 : 255;
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / max > 0.5;
}

function setup(tip: SVGSVGElement, mark: HTMLElement) {
  const moveX = gsap.quickTo(tip, "x", { duration: 0.2, ease: "power3" });
  const moveY = gsap.quickTo(tip, "y", { duration: 0.2, ease: "power3" });
  let started = false;
  let hovered: Element | null = null;

  const placeMark = (element: Element) => {
    const box = textBox(element);
    const underline = mark.classList.contains("over-light-text");
    return {
      x: box.left - 3,
      y: underline ? box.bottom : box.top + box.height * 0.4,
      width: box.width + 6,
      height: underline ? 3 : box.height * 0.6,
    };
  };

  const growMark = (element: Element, x: number) => {
    mark.classList.toggle(
      "over-light-text",
      isLight(getComputedStyle(element).color),
    );
    const target = placeMark(element);
    gsap.fromTo(
      mark,
      { ...target, x, width: 12, autoAlpha: 1 },
      { ...target, duration: 0.3, ease: "power3.out", overwrite: true },
    );
  };

  const onPointerMove = (event: PointerEvent) => {
    moveX(event.clientX - hotspot);
    moveY(event.clientY - hotspot);
  };

  const onPointerOver = (event: PointerEvent) => {
    if (!started) {
      started = true;
      root.classList.add("custom-cursor");
      gsap.set(tip, { x: event.clientX - hotspot, y: event.clientY - hotspot });
    }
    const target = event.target instanceof Element ? event.target : root;
    const link = target.closest("a, button");
    const native =
      !link &&
      (Boolean(target.closest("input, textarea, select, [contenteditable]")) ||
        hasOwnText(target));
    root.classList.toggle("native-cursor", native);
    if (link !== hovered) {
      hovered = link;
      if (link) growMark(link, event.clientX);
      else gsap.to(mark, { autoAlpha: 0, duration: 0.2, overwrite: true });
    }
    gsap.to(tip, {
      autoAlpha: link || native ? 0 : 1,
      scale: link ? 0.5 : 1,
      duration: 0.15,
      overwrite: "auto",
    });
  };

  const onPointerLeave = () => {
    hovered = null;
    gsap.to([tip, mark], { autoAlpha: 0, duration: 0.15, overwrite: "auto" });
  };

  const onScroll = () => {
    if (hovered) gsap.set(mark, placeMark(hovered));
  };

  addEventListener("pointermove", onPointerMove);
  addEventListener("pointerover", onPointerOver);
  root.addEventListener("pointerleave", onPointerLeave);
  addEventListener("scroll", onScroll, { passive: true });
  return () => {
    removeEventListener("pointermove", onPointerMove);
    removeEventListener("pointerover", onPointerOver);
    root.removeEventListener("pointerleave", onPointerLeave);
    removeEventListener("scroll", onScroll);
    root.classList.remove("custom-cursor", "native-cursor");
  };
}

if (tip && mark) {
  gsap
    .matchMedia()
    .add(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      () => setup(tip, mark),
    );
}
