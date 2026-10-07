const rows = document.querySelectorAll("#reqs li");
const stamp = document.getElementById("stamp");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let timers: number[] = [];

function play() {
  timers.forEach(clearTimeout);
  timers = [];
  if (reducedMotion) return;
  rows.forEach((row) => row.classList.add("wait"));
  stamp?.classList.add("wait");
  rows.forEach((row, i) => timers.push(window.setTimeout(() => row.classList.remove("wait"), 400 + i * 650)));
  timers.push(window.setTimeout(() => stamp?.classList.remove("wait"), 400 + rows.length * 650 + 200));
}

document.getElementById("replay")?.addEventListener("click", play);
play();
