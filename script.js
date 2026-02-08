document.addEventListener("DOMContentLoaded", () => {

  /* ===== CALM REVEAL ANIMATION ===== */
  const elements = document.querySelectorAll(".type");
  elements.forEach(el => {
    el.textContent = el.dataset.text || el.textContent;
    el.style.opacity = "0";
    el.style.transform = "translateY(6px)";
  });

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 500 + index * 400);
  });

/* ECG morphs into HEART */
const ecgLine = document.getElementById("ecgLine");
const heartShape = document.getElementById("heartShape");

if (ecgLine && heartShape) {
  setTimeout(() => {
    ecgLine.style.display = "none";
    heartShape.style.display = "block";
  }, 2800);
}

  /* ===== MANAGEMENT PAGE LOGIC ===== */
  const question = document.getElementById("question");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const card = document.querySelector(".card");

  if (question && yesBtn && noBtn) {
    setTimeout(() => {
      question.style.display = "block";
      yesBtn.style.display = "inline-block";
      noBtn.style.display = "inline-block";
    }, 3200);
  }

  /* EXTREME PANIC NO BUTTON */
  if (noBtn && card) {
    noBtn.addEventListener("mouseover", () => {
      const rect = card.getBoundingClientRect();
      const maxX = rect.width - noBtn.offsetWidth;
      const maxY = rect.height - noBtn.offsetHeight - 60;

      noBtn.style.left = Math.random() * maxX + "px";
      noBtn.style.top = Math.random() * maxY + "px";
    });
  }

  /* YES CELEBRATION */
if (yesBtn) {
  yesBtn.addEventListener("click", () => {

    confetti({
      particleCount: 140,
      spread: 100,
      origin: { y: 0.6 }
    });

    document.getElementById("proposalGif").src =
      "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif";

    document.getElementById("managementHeading").style.display = "none";
    question.style.display = "none";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    document.getElementById("outcome").style.display = "block";
    document.getElementById("stamp").style.display = "inline-block";

    // ✅ CASE CLOSED — THIS WAS MISSING / NOT FIRING
    document.getElementById("caseClosed").style.display = "block";
  });
}

});
