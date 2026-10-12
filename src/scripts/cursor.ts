import { gsap } from "gsap";

const cursor = document.querySelector<HTMLElement>(".cursor");
const mark = document.querySelector<HTMLElement>(".cursor-mark");
const root = document.documentElement;
const maxCaretHeight = 64;

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

function setup(cursor: HTMLElement, mark: HTMLElement) {
  const tip = cursor.querySelector(".cursor-tip");
  const caret = cursor.querySelector(".cursor-caret");
  const moveX = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
  const moveY = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });
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

  const showCaret = (textElement: Element | null) => {
    if (!textElement) {
      gsap.to(caret, { autoAlpha: 0, duration: 0.15, overwrite: "auto" });
      return;
    }
    const height = Math.min(
      parseFloat(getComputedStyle(textElement).fontSize) * 1.15,
      maxCaretHeight,
    );
    gsap.to(caret, {
      autoAlpha: 1,
      height,
      y: -height / 2,
      duration: 0.15,
      overwrite: "auto",
    });
  };

  const onPointerMove = (event: PointerEvent) => {
    moveX(event.clientX);
    moveY(event.clientY);
  };

  const onPointerOver = (event: PointerEvent) => {
    if (!started) {
      started = true;
      root.classList.add("custom-cursor");
      gsap.set(cursor, { x: event.clientX, y: event.clientY });
    }
    const target = event.target instanceof Element ? event.target : root;
    const link = target.closest("a, button");
    const editable = Boolean(
      target.closest("input, textarea, select, [contenteditable]"),
    );
    const text = !link && !editable && hasOwnText(target);
    root.classList.toggle("native-cursor", editable);
    if (link !== hovered) {
      hovered = link;
      if (link) growMark(link, event.clientX);
      else gsap.to(mark, { autoAlpha: 0, duration: 0.2, overwrite: true });
    }
    gsap.to(cursor, {
      autoAlpha: editable ? 0 : 1,
      duration: 0.15,
      overwrite: "auto",
    });
    gsap.to(tip, {
      autoAlpha: text ? 0 : 1,
      duration: 0.15,
      overwrite: "auto",
    });
    showCaret(text ? target : null);
  };

  const onPointerLeave = () => {
    hovered = null;
    gsap.to([cursor, mark], {
      autoAlpha: 0,
      duration: 0.15,
      overwrite: "auto",
    });
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

if (cursor && mark) {
  gsap
    .matchMedia()
    .add(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      () => setup(cursor, mark),
    );
}
