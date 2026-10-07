const buttons = document.querySelectorAll<HTMLButtonElement>(".seg button");

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    buttons.forEach((other) => {
      const pressed = other === button;
      other.setAttribute("aria-pressed", String(pressed));
      const panel = document.getElementById(other.dataset.panel ?? "");
      if (panel) panel.hidden = !pressed;
    });
  }),
);
