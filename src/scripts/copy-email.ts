const copyButton = document.getElementById("copy");
const address = document.getElementById("mail");

if (copyButton && address) {
  const selectAddress = () => {
    const range = document.createRange();
    range.selectNodeContents(address);
    const selection = getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
    copyButton.textContent = copyButton.dataset.selected ?? "";
  };

  copyButton.addEventListener("click", () => {
    // navigator.clipboard est absent hors contexte sécurisé (http, file://) : l'accès lève une exception
    try {
      navigator.clipboard
        .writeText(address.textContent?.trim() ?? "")
        .then(() => {
          copyButton.textContent = copyButton.dataset.copied ?? "";
        }, selectAddress);
    } catch {
      selectAddress();
    }
  });
}
