document.addEventListener("DOMContentLoaded", () => {

  /* Calm typing animation */
  const typeElements = document.querySelectorAll(".type");
  let delay = 0;

  typeElements.forEach(el => {
    const text = el.dataset.text;
    setTimeout(() => typeText(el, text), delay);
    delay += text.length * 70 + 400;
  });

  function typeText(el, text) {
    el.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
      el.textContent += text.charAt(i);
      i++;
      if (i === text.length) clearInterval(interval);
    }, 70);
  }

  /* ECG → Hearts */
  const ecgLine = document.getElementById("ecgLine");
  const heartLine = document.getElementById("heartLine");

  if (ecgLine && heartLine) {
    setTimeout(() => {
      ecgLine.style.display = "none";
      heartLine.style.display = "block";
    }, 2600);
  }

  const question = document.getElementById("question");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const card = document.querySelector(".card");

  /* Show proposal after pause */
  if (question && yesBtn && noBtn) {
    setTimeout(() => {
      question.style.display = "block";
      yesBtn.style.display = "inline-block";
      noBtn.style.display = "inline-block";
    }, 3200);
  }

  /* Extreme panic NO button */
  if (noBtn && card) {
    noBtn.addEventListener("mouseover", () => {
      const cardRect = card.getBoundingClientRect();
      const maxX = cardRect.width - noBtn.offsetWidth;
      const maxY = cardRect.height - noBtn.offsetHeight - 60;

      noBtn.style.left = Math.random() * maxX + "px";
      noBtn.style.top = Math.random() * maxY + "px";
    });
  }

  /* YES button celebration */
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
    });
  }

});
