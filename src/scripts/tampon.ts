const tampon = document.querySelector<HTMLElement>(".tampon");
const sectors = ["e", "se", "s", "sw", "w", "nw", "n", "ne"];
const restRadius = 60;

function directionTowards(x: number, y: number, box: DOMRect) {
  const dx = x - (box.left + box.width / 2);
  const dy = y - (box.top + box.height / 2);
  if (Math.hypot(dx, dy) < restRadius) return "c";
  return sectors[(Math.round(Math.atan2(dy, dx) / (Math.PI / 4)) + 8) % 8];
}

if (tampon && matchMedia("(hover: hover) and (pointer: fine)").matches) {
  let current = tampon.querySelector(".on");
  addEventListener("pointermove", (event) => {
    const direction = directionTowards(
      event.clientX,
      event.clientY,
      tampon.getBoundingClientRect(),
    );
    const next = tampon.querySelector(`[data-lean="${direction}"]`);
    if (!next || next === current) return;
    current?.classList.remove("on");
    next.classList.add("on");
    current = next;
  });
}
